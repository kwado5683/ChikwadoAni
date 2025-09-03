import * as React from "react"

const cn = (...inputs) => {
  return inputs.filter(Boolean).join(' ')
}

const badgeVariants = {
  default: "border-transparent bg-primary text-white hover:bg-orange-600",
  secondary: "border-transparent bg-gray-100 text-gray-900 hover:bg-orange-600 hover:text-white",
  destructive: "border-transparent bg-red-600 text-white hover:bg-red-700",
  outline: "text-white border-gray-300 bg-transparent hover:bg-orange-600 hover:text-white",
  neumorphic: "neumorphic text-white hover:neumorphic-hover hover:bg-orange-600 border-0",
  glassmorphic: "glassmorphic text-white hover:glassmorphic-hover hover:bg-orange-600 border-0",
}

function Badge({ className = "", variant = "default", ...props }) {
  const baseClasses = "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
  const variantClasses = badgeVariants[variant] || badgeVariants.default
  const finalClasses = cn(baseClasses, variantClasses, className)

  return (
    <div className={finalClasses} {...props} />
  )
}

export { Badge, badgeVariants }