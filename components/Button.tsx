import { ButtonHTMLAttributes, forwardRef } from "react";

type ButtonVariant = "primary" | "secondary" | "tertiary" | "text";
type ButtonSize = "lg" | "md";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary-500 text-white hover:bg-primary-400 active:bg-primary-500",
  secondary:
    "border border-primary-500 text-primary-500 hover:bg-primary-100 active:bg-primary-200",
  tertiary:
    "border border-neutral-300 text-neutral-700 hover:bg-neutral-100 active:bg-neutral-200",
  text: "text-neutral-700 hover:text-primary-500 active:text-primary-400",
};

const sizeStyles: Record<ButtonSize, string> = {
  lg: "h-11 px-4 text-base",
  md: "h-9 px-3 text-sm",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "lg", className = "", children, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled}
        className={`
          inline-flex items-center justify-center gap-2
          font-medium rounded-radius-md
          transition-colors duration-150
          disabled:opacity-50 disabled:cursor-not-allowed
          ${variantStyles[variant]}
          ${sizeStyles[size]}
          ${className}
        `}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
