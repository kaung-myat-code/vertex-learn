type BadgeVariant = "video" | "lesson" | "popular";

interface BadgeProps {
  variant: BadgeVariant;
  children: React.ReactNode;
}

const variantStyles: Record<BadgeVariant, string> = {
  video: "bg-purple-600 text-white",
  lesson: "bg-purple-100 text-purple-700",
  popular: "bg-primary-500 text-white",
};

export function Badge({ variant, children }: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center
        px-2.5 py-1
        text-xs font-semibold uppercase tracking-wide
        rounded-radius-sm
        ${variantStyles[variant]}
      `}
    >
      {children}
    </span>
  );
}
