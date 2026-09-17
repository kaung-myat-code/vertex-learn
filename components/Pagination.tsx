"use client";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const showEllipsisStart = currentPage > 3;
    const showEllipsisEnd = currentPage < totalPages - 2;

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);

      if (showEllipsisStart) {
        pages.push("...");
      }

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        if (!pages.includes(i)) {
          pages.push(i);
        }
      }

      if (showEllipsisEnd) {
        pages.push("...");
      }

      if (!pages.includes(totalPages)) {
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <nav aria-label="Pagination" className="flex items-center gap-1">
      <button
        onClick={() => onPageChange?.(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 text-neutral-500 hover:text-neutral-700 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Previous page"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>
      {getPageNumbers().map((page, index) => (
        <span key={index}>
          {typeof page === "number" ? (
            <button
              onClick={() => onPageChange?.(page)}
              className={`
                w-8 h-8 rounded-radius-sm text-sm font-medium
                transition-colors
                ${
                  currentPage === page
                    ? "bg-primary-500 text-white"
                    : "text-neutral-700 hover:bg-neutral-100"
                }
              `}
              aria-current={currentPage === page ? "page" : undefined}
            >
              {page}
            </button>
          ) : (
            <span className="w-8 h-8 flex items-center justify-center text-neutral-500">
              {page}
            </span>
          )}
        </span>
      ))}
      <button
        onClick={() => onPageChange?.(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 text-neutral-500 hover:text-neutral-700 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Next page"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>
    </nav>
  );
}
