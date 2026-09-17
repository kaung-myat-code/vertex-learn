import { Badge } from "./Badge";

interface CourseCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  level?: string;
  duration?: string;
  modules?: number;
}

export function CourseCard({
  icon,
  title,
  description,
  level,
  duration,
  modules,
}: CourseCardProps) {
  return (
    <div className="bg-white border border-neutral-200 rounded-radius-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="flex items-start gap-4">
        {icon && (
          <div className="w-12 h-12 bg-neutral-100 rounded-radius-md flex items-center justify-center flex-shrink-0">
            {icon}
          </div>
        )}
        <div className="flex-1 min-w-0">
          <h3 className="font-heading-3 text-neutral-900 mb-1">{title}</h3>
          <p className="text-sm text-neutral-500 line-clamp-2">{description}</p>
        </div>
      </div>
      {(level || duration || modules) && (
        <div className="flex items-center gap-4 mt-4 pt-4 border-t border-neutral-100">
          {level && (
            <span className="flex items-center gap-1 text-sm text-neutral-500">
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
                <path d="M2 20h.01" />
                <path d="M7 20v-4" />
                <path d="M12 20v-8" />
                <path d="M17 20V8" />
              </svg>
              {level}
            </span>
          )}
          {duration && (
            <span className="flex items-center gap-1 text-sm text-neutral-500">
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
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              {duration}
            </span>
          )}
          {modules && (
            <span className="flex items-center gap-1 text-sm text-neutral-500">
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
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
              </svg>
              {modules} modules
            </span>
          )}
        </div>
      )}
    </div>
  );
}

interface LessonCardVideoProps {
  badge?: "video" | "lesson";
  title: string;
  description: string;
  lessonNumber?: string;
  duration?: string;
  timestamp?: string;
  onWatch?: () => void;
}

export function LessonCardVideo({
  badge = "video",
  title,
  description,
  lessonNumber,
  duration,
  timestamp,
  onWatch,
}: LessonCardVideoProps) {
  return (
    <div className="bg-white border border-neutral-200 rounded-radius-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="aspect-video bg-neutral-100 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-md">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-primary-500 ml-0.5"
            >
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          </div>
        </div>
      </div>
      <div className="p-4">
        <Badge variant={badge}>{badge}</Badge>
        <h3 className="font-heading-3 text-neutral-900 mt-2 mb-1">{title}</h3>
        <p className="text-sm text-neutral-500 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-neutral-100">
          <div className="flex items-center gap-2 text-sm text-neutral-500">
            {lessonNumber && <span>{lessonNumber}</span>}
            {duration && (
              <>
                <span className="text-neutral-300">·</span>
                <span>{duration}</span>
              </>
            )}
          </div>
          {timestamp && (
            <button
              onClick={onWatch}
              className="flex items-center gap-1 text-sm text-primary-500 hover:text-primary-400 font-medium"
            >
              Watch from {timestamp}
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
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

interface LessonCardLessonProps {
  badge?: "video" | "lesson";
  title: string;
  description: string;
  moduleNumber?: string;
  onView?: () => void;
}

export function LessonCardLesson({
  badge = "lesson",
  title,
  description,
  moduleNumber,
  onView,
}: LessonCardLessonProps) {
  return (
    <div className="bg-white border border-neutral-200 rounded-radius-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
      <Badge variant={badge}>{badge}</Badge>
      <h3 className="font-heading-3 text-neutral-900 mt-2 mb-1">{title}</h3>
      <p className="text-sm text-neutral-500 line-clamp-2">{description}</p>
      <div className="flex items-center justify-between mt-4 pt-4 border-t border-neutral-100">
        <span className="text-sm text-neutral-500">{moduleNumber}</span>
        <button
          onClick={onView}
          className="flex items-center gap-1 text-sm text-primary-500 hover:text-primary-400 font-medium"
        >
          View lesson
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
            <path d="M7 17 17 7" />
            <path d="M7 7h10v10" />
          </svg>
        </button>
      </div>
    </div>
  );
}

interface ResourceCardProps {
  title: string;
  description: string;
  fileType?: string;
  fileSize?: string;
  onDownload?: () => void;
}

export function ResourceCard({
  title,
  description,
  fileType,
  fileSize,
  onDownload,
}: ResourceCardProps) {
  return (
    <div className="bg-white border border-neutral-200 rounded-radius-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 bg-neutral-100 rounded-radius-md flex items-center justify-center flex-shrink-0">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-neutral-500"
          >
            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
            <path d="M14 2v4a2 2 0 0 0 2 2h4" />
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-heading-3 text-neutral-900 mb-1">{title}</h3>
          <p className="text-sm text-neutral-500 line-clamp-2">{description}</p>
          {(fileType || fileSize) && (
            <div className="flex items-center gap-2 mt-2 text-sm text-neutral-500">
              {fileType && <span>{fileType}</span>}
              {fileSize && (
                <>
                  <span className="text-neutral-300">·</span>
                  <span>{fileSize}</span>
                </>
              )}
            </div>
          )}
        </div>
        {onDownload && (
          <button
            onClick={onDownload}
            className="p-2 text-neutral-500 hover:text-primary-500 transition-colors"
            aria-label="Download"
          >
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
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" x2="12" y1="15" y2="3" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
