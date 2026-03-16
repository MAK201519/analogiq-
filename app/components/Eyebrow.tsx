interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
  /** Use on dark backgrounds — renders as muted white per spec */
  muted?: boolean;
}

export default function Eyebrow({
  children,
  className = "",
  muted = false,
}: EyebrowProps) {
  return (
    <p
      className={`eyebrow ${muted ? "!text-white/35" : ""} ${className}`}
    >
      {children}
    </p>
  );
}
