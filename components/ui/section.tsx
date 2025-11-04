export default function Section({ children, className = "", id }: React.PropsWithChildren<{className?: string; id?: string;}>) {
  return <section id={id} className={`py-16 md:py-24 ${className}`}>{children}</section>;
}
