/*import Link from "next/link";
type Props = { href?: string; onClick?: () => void; variant?: "primary"|"ghost"; children: React.ReactNode; className?: string; ariaLabel?: string; };
export default function Button({ href, onClick, variant="primary", children, className="", ariaLabel }: Props) {
  const base = "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium transition";
  const styles = variant==="primary"
    ? "bg-emerald-600 text-white hover:bg-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
    : "text-emerald-700 hover:text-emerald-900";
  const content = <span>{children}</span>;
  return href ? (
    <Link aria-label={ariaLabel} href={href} className={`${base} ${styles} ${className}`}>{content}</Link>
  ) : (
    <button aria-label={ariaLabel} onClick={onClick} className={`${base} ${styles} ${className}`}>{content}</button>
  );
}*/

import Link from "next/link";
type buttonProps = { href?: string; onClick?: () => void; variant?: "primary"|"ghost"; children: React.ReactNode; className?: string; ariaLabel?: string; };
export default function Button({ href, onClick, variant="primary", children, className="", ariaLabel }: buttonProps) {
  const base = "inline-flex items-center justify-center px-5 py-3 text-sm font-medium transition rounded-full";
  const styles = variant==="primary"
    ? "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
    : " hover:text-emerald-900";
  const content = <span>{children}</span>;
  return (
    <Link aria-label={ariaLabel} href={href ? href : "/"} className={`${base} ${styles} ${className}`}>{content}</Link>//fix redirection
  )
}