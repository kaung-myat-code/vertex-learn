import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm">
      {items.map((item, index) => (
        <span key={index} className="flex items-center gap-2">
          {index > 0 && (
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-neutral-300"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          )}
          {item.href ? (
            <Link
              href={item.href}
              className="text-neutral-500 hover:text-primary-500 transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-neutral-900 font-medium">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
