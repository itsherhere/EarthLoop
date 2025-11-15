import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asLinkHref?: string;
  icon?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
};

export default function GlassButton({ asLinkHref, icon, className = "", children, ...rest }: Props) {
  if (asLinkHref) {
    return (
      <a href={asLinkHref} className={`glass-btn ${className}`}>
        {children}
        {icon}
      </a>
    );
  }
  return (
    <button className={`glass-btn ${className}`} {...rest}>
      {children}
      {icon}
    </button>
  );
}
