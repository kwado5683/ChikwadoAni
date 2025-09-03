import * as React from "react"

const cn = (...inputs) => {
  return inputs.filter(Boolean).join(' ')
}

const buttonVariants = {
  base: "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  variants: {
    variant: {
      default: "bg-primary text-white hover:bg-orange-600",
      destructive: "bg-red-600 text-white hover:bg-red-700",
      outline: "border border-input bg-background hover:bg-orange-600 hover:text-white",
      secondary: "bg-gray-200 text-gray-800 hover:bg-orange-600 hover:text-white",
      ghost: "hover:bg-orange-600 hover:text-white",
      link: "text-primary underline-offset-4 hover:underline hover:text-orange-600",
      neumorphic: "neumorphic text-white hover:neumorphic-hover hover:bg-orange-600",
      glassmorphic: "glassmorphic text-white hover:glassmorphic-hover hover:bg-orange-600",
    },
    size: {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-11 rounded-md px-8",
      icon: "h-10 w-10",
    },
  },
}

const Button = React.forwardRef(({ className = "", variant = "default", size = "default", asChild = false, ...props }, ref) => {
  const variantClasses = buttonVariants.variants.variant[variant] || buttonVariants.variants.variant.default;
  const sizeClasses = buttonVariants.variants.size[size] || buttonVariants.variants.size.default;
  const finalClasses = cn(buttonVariants.base, variantClasses, sizeClasses, className);

  return (
    <button
      className={finalClasses}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = "Button"

export { Button, buttonVariants }