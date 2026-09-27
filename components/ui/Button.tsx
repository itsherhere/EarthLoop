import Link from "next/link";

type ButtonProps = {
  href?: string;
  onClick?: () => void;
  variant?: "filled" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
  /** optional, ignored unless you use it in className; kept to not break callers */
  color?: string;
  /** full-width helper (doesn't break old uses) */
  block?: boolean;
};

export default function Button({
  href,
  onClick,
  variant = "filled",
  size = "md",
  children,
  className = "",
  ariaLabel,
  block = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 ease-out transform";

  const sizes = {
    sm: "h-10 px-4 text-sm leading-none min-w-[120px]",
    md: "h-12 px-6 text-base leading-none min-w-[150px]",
    lg: "h-14 px-7 text-base leading-none min-w-[190px]", // ← matches your desktop button height & typography
    xl: "h-14 px-7 text-base",
  } as const;



  const variants = {
    filled:
      "bg-[#1f574a] text-white hover:bg-emerald-700 hover:scale-[1.02]",
    outline:
      // ← EXACT look in your screenshot
      "bg-transparent text-white ring-1 ring-white/25 hover:ring-white/60 hover:scale-[1.02]",
    ghost:
      "bg-transparent hover:text-white hover:scale-[1.02]",
   
  } as const;


  const width = block ? "w-full" : "";
  
  const classes = `${base} ${sizes[size]} ${variants[variant]} ${width} ${className}`;
  const content = <span>{children}</span>;

  return href ? (
    <Link aria-label={ariaLabel} href={href ?? "/"} onClick={onClick} className={classes}>
      {content}
    </Link>
  ) : (
    <button aria-label={ariaLabel} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
