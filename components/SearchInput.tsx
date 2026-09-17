import { InputHTMLAttributes, forwardRef } from "react";

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  shortcut?: string;
}

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  ({ shortcut = "⌘K", className = "", ...props }, ref) => {
    return (
      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500">
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
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
        </div>
        <input
          ref={ref}
          type="search"
          className={`
            w-full h-11 pl-10 pr-16
            border border-neutral-200 rounded-radius-md
            text-base text-neutral-900
            placeholder:text-neutral-500
            focus:outline-none focus:border-primary-focus
            transition-colors duration-150
            ${className}
          `}
          {...props}
        />
        {shortcut && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 text-sm text-neutral-500">
            <kbd className="px-1.5 py-0.5 bg-neutral-100 rounded text-xs">
              {shortcut}
            </kbd>
          </div>
        )}
      </div>
    );
  }
);

SearchInput.displayName = "SearchInput";
