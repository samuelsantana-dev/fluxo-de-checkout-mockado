import { cn } from "@/libs/utils"
import * as React from "react"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "secondary" | "destructive"
  size?: "sm" | "md" | "lg" | "icon"
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-medium rounded-2xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",

          {
            default:
              "bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-500",
            outline:
              "border border-gray-300 text-gray-700 hover:bg-gray-100 focus-visible:ring-gray-400",
            ghost:
              "text-gray-700 hover:bg-gray-100 focus-visible:ring-gray-300",
            secondary:
              "bg-gray-100 text-gray-800 hover:bg-gray-200 focus-visible:ring-gray-400",
            destructive:
              "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500",
          }[variant],

          // tamanhos
          {
            sm: "h-8 px-3 text-sm",
            md: "h-10 px-4 text-base",
            lg: "h-12 px-6 text-lg",
            icon: "h-10 w-10",
          }[size],

          className
        )}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"
