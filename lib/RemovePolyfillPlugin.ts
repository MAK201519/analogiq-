type Compilation = {
  assets: {
    [key: string]: {
      source: () => string;
      size: () => number;
    };
  };
};

type Compiler = {
  hooks: {
    emit: {
      tapAsync: (
        name: string,
        callback: (compilation: Compilation, callback: () => void) => void
      ) => void;
    };
  };
};

// Custom webpack plugin to remove polyfill strings from compiled output
export class RemovePolyfillPlugin {
  // Regex patterns to match and remove polyfills
  private polyfillRegexes = [
    // Pattern 1: Array.prototype.at||(Array.prototype.at=function(...){...}),
    /(Array\.prototype\.at|Array\.prototype\.flat|Array\.prototype\.flatMap|Object\.fromEntries|Object\.hasOwn|String\.prototype\.trimEnd|String\.prototype\.trimStart)\|\|\(\1=function\(.*?\)\{.*?\}\),/g,
    // Pattern 2: "trimEnd"in String.prototype||(String.prototype.trimEnd=String.prototype.trimRight),
    /"trimEnd"in String\.prototype\|\|\(String\.prototype\.trimEnd=String\.prototype\.trimRight\),/g,
    // Pattern 3: "trimStart"in String.prototype||(String.prototype.trimStart=String.prototype.trimLeft),
    /"trimStart"in String\.prototype\|\|\(String\.prototype\.trimStart=String\.prototype\.trimLeft\),/g,
  ];

  apply(compiler: Compiler) {
    compiler.hooks.emit.tapAsync(
      "RemovePolyfillPlugin",
      (compilation, callback) => {
        // Iterate over all compiled assets
        for (const filename in compilation.assets) {
          // Only check JavaScript files
          if (!filename.endsWith(".js")) continue;

          const asset = compilation.assets[filename];
          let content = asset.source().toString();

          // Remove polyfills using all regex patterns
          for (const regex of this.polyfillRegexes) {
            content = content.replace(regex, "");
          }

          // Update the asset with cleaned content
          compilation.assets[filename] = {
            source: () => content,
            size: () => content.length,
          };
        }

        callback();
      }
    );
  }
}
