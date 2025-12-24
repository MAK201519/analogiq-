import { cn } from "@/app/lib/utils";

type InputRadioProps = {
  name: string;
  value: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  className?: string;
  dataName?: string;
};

export default function InputRadio({
  name,
  value,
  checked,
  onChange,
  label,
  className,
  dataName,
}: InputRadioProps) {
  return (
    <label
      className={cn(
        "inline-grid grid-cols-[max-content] grid-rows-[max-content] justify-items-start relative shrink-0 cursor-pointer",
        className
      )}
      data-name={dataName || label}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      <div className="col-1 ml-0 mt-0 relative row-1 size-[28px]">
        <div className="absolute inset-[-3.57%]">
          {checked ? (
            <div className="bg-[#191a23] border border-[#191a23] border-solid rounded-full size-full flex items-center justify-center">
              <div className="bg-white rounded-full size-[12px]" />
            </div>
          ) : (
            <div className="bg-white border border-black border-solid rounded-full size-full" />
          )}
        </div>
      </div>
      <p className="col-1 font-normal leading-[normal] ml-[42px] mt-[2px] relative row-1 text-[18px] text-black">
        {label}
      </p>
    </label>
  );
}
