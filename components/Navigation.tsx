"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  label: string;
  href: string;
}

interface NavigationProps {
  items?: NavItem[];
}

const defaultItems: NavItem[] = [
  { label: "Courses", href: "/courses" },
  { label: "My Learning", href: "/my-learning" },
];

export function Navigation({ items = defaultItems }: NavigationProps) {
  const pathname = usePathname();

  return (
    <nav className="bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary-500 rounded-radius-sm flex items-center justify-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="white"
                >
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </div>
              <span className="font-display-2 text-neutral-900">Lalalearn</span>
            </Link>
            <div className="hidden md:flex items-center gap-6">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    text-sm font-medium transition-colors
                    ${
                      pathname === item.href
                        ? "text-primary-500"
                        : "text-neutral-700 hover:text-primary-500"
                    }
                  `}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-neutral-500 hover:text-neutral-700">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
