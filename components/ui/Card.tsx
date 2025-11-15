"use client";

import { motion } from "framer-motion";
import { cn } from "@/app/lib/utils";
import Button from "@/components/ui/Button";

interface CardProps {
  title?: string;
  subtitle?: string;
  body?: string;
  icon?: React.ReactNode;
  href?: string;
  children?: React.ReactNode;
  buttonText?: string;
  buttonColor?: string; 
  buttonVariant?:  "filled" | "outline" | "primary" | "ghost";
  buttonClassName?: string; 
  className?: string;
  tone?: "dark" | "light";

}

export default function Card({
  title,
  subtitle,
  body,
  icon,
  href,
  buttonText = "Learn More",
  buttonColor,
  buttonVariant = "primary",
  buttonClassName,
  className,
  children,
  tone = "dark",
}: CardProps) {
  const isLight = tone === "light";

  const textMain   = isLight ? "text-slate-900"      : "text-white";
  const textSub    = isLight ? "text-slate-700/90"   : "text-[#AEE1C3]/90";
  const textBody   = isLight ? "text-slate-800/90"   : "text-white/80";
  const ringOuter  = isLight ? "ring-black/10"       : "ring-white/5";
  const ringInner  = isLight ? "ring-black/10"       : "ring-white/10";
  const shadow     = isLight ? "shadow-[0_12px_30px_rgba(2,6,23,0.12)]"
                             : "shadow-[0_20px_40px_rgba(0,0,0,0.35)]";
  const defaultBg  = isLight ? "bg-white" : "bg-[#08332b]";

  const buttonToneClass =
    isLight
      ? "bg-emerald-600 text-white hover:bg-emerald-700" // solid for light cards
      : "bg-white/0 text-white ring-1 ring-white/25 hover:ring-white/60"; // outline for dark cards

      return (
        <motion.div
          whileHover={{ y: -6 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className={cn(
            `relative overflow-hidden rounded-[28px] ${defaultBg}
             p-6 md:p-8 ${shadow} ring-1 ${ringOuter}
             min-h-[430px] flex flex-col ${textMain}`,
            className
          )}
        >
         
          <div className={cn("pointer-events-none absolute inset-0 rounded-[28px] ring-1", ringInner)} />
          {!isLight && (
            <div className="pointer-events-none absolute -top-24 -left-24 h-48 w-48 rounded-full bg-white/5 blur-3xl" />
          )}
    
          <div className="flex-1 flex flex-col">
            {icon && (
              <div className="mb-4 flex justify-center">
                <div className="w-[80px] sm:w-[100px]">{icon}</div>
              </div>
            )}
    
            <h3 className={cn(
              "whitespace-pre-line text-xl sm:text-2xl md:text-[26px] font-extrabold leading-tight text-center"
            )}>
              {title}
            </h3>
    
            {subtitle && (
              <p className={cn("mt-1 text-base font-medium text-center", textSub)}>
                {subtitle}
              </p>
            )}
    
            {body && (
              <p className={cn("mt-3 leading-relaxed text-center", textBody)}>
                {body}
              </p>
            )}
    
            {children}
          </div>
    
          {href && buttonText && (
            <div className="mt-8">
              <Button
                href={href}
                variant={buttonVariant}        // now respected
                block
                className={cn("w-full md:px-auto bg-white/0   text-white ring-1 ring-white/25 hover:ring-white/60",buttonToneClass, buttonClassName)}
              >
                {buttonText}
              </Button>
            </div>
          )}
    
          {/* bottom shadow foot */}
          <div className="pointer-events-none absolute -bottom-5 left-6 right-6 h-5 rounded-full bg-black/30 blur-2xl opacity-40" />
        </motion.div>
      );
    }
