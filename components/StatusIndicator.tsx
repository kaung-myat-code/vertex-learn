type Status = "in-progress" | "completed" | "now-playing" | "locked";

interface StatusIndicatorProps {
  status: Status;
  percentage?: number;
}

export function StatusIndicator({ status, percentage }: StatusIndicatorProps) {
  const getStatusContent = () => {
    switch (status) {
      case "in-progress":
        return (
          <div className="flex items-center gap-2 text-primary-500">
            <div className="w-5 h-5 rounded-full border-2 border-primary-500 flex items-center justify-center">
              <span className="text-[10px] font-semibold">{percentage ?? 0}</span>
            </div>
            <span className="text-sm">In Progress</span>
          </div>
        );
      case "completed":
        return (
          <div className="flex items-center gap-2 text-green-600">
            <div className="w-5 h-5 rounded-full bg-green-600 flex items-center justify-center">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <span className="text-sm">Completed</span>
          </div>
        );
      case "now-playing":
        return (
          <div className="flex items-center gap-2 text-primary-500">
            <div className="w-5 h-5 rounded-full bg-primary-500 flex items-center justify-center">
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="white"
              >
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </div>
            <span className="text-sm">Now Playing</span>
          </div>
        );
      case "locked":
        return (
          <div className="flex items-center gap-2 text-neutral-500">
            <div className="w-5 h-5 rounded-full border-2 border-neutral-300 flex items-center justify-center">
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <span className="text-sm">Locked</span>
          </div>
        );
    }
  };

  return <div>{getStatusContent()}</div>;
}
