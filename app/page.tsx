import { Navigation } from "@/components/Navigation";
import { SearchInput } from "@/components/SearchInput";
import { Button } from "@/components/Button";
import { CourseCard } from "@/components/Card";

const courses = [
  {
    icon: (
      <span className="text-2xl font-bold text-neutral-700">N</span>
    ),
    title: "Next.js for Production",
    description: "Build scalable, high-performance web applications with Next.js.",
    level: "Intermediate",
    duration: "18h 24m",
    modules: 12,
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C6.48 2 2 4.69 2 8v1.5c0 1.5.5 2.5 1 3l.5.5V17c0 2 2 3.5 4.5 4h4c2.5-.5 4.5-2 4.5-4v-4l.5-.5c.5-.5 1-1.5 1-3V8c0-3.31-4.48-6-10-6zM7.5 14a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm9 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" fill="#3b82f6" />
      </svg>
    ),
    title: "Docker Essentials",
    description: "Containerize applications and streamline your development workflow.",
    level: "Beginner",
    duration: "10h 12m",
    modules: 8,
  },
  {
    icon: (
      <span className="text-lg font-bold text-blue-600">TS</span>
    ),
    title: "TypeScript Deep Dive",
    description: "Go beyond the basics and write safer, more expressive code.",
    level: "Intermediate",
    duration: "14h 36m",
    modules: 10,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden hero-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 text-center">
          <span className="inline-block px-4 py-1.5 rounded-radius-full bg-primary-100 text-primary-500 text-xs font-semibold tracking-widest uppercase mb-6">
            Intelligent Learning
          </span>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] leading-tight text-neutral-900 mb-6">
            Search your learning
            <br />
            in plain English.
          </h1>

          <p className="text-lg text-neutral-500 max-w-xl mx-auto mb-8">
            Vertex understands what you want to learn and
            <br className="hidden sm:block" /> finds the exact lessons across all your courses.
          </p>

          <Button variant="primary" className="mb-10 px-6">
            Explore Courses
            <svg
              width="18"
              height="18"
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
          </Button>

          <div className="max-w-2xl mx-auto">
            <SearchInput
              placeholder="Ask anything about your learning..."
              className="!h-14 !text-base !rounded-radius-lg !pl-12 !pr-20 shadow-md"
            />
          </div>
        </div>
      </section>

      {/* All Courses Section */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-heading-2 text-neutral-900">All Courses</h2>
          <a
            href="/courses"
            className="flex items-center gap-1 text-sm font-medium text-primary-500 hover:text-primary-400 transition-colors"
          >
            View all courses
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
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <CourseCard key={course.title} {...course} />
          ))}
        </div>
      </section>

      {/* Footer Banner */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="border-t border-neutral-200 pt-8">
          <div className="flex items-center justify-center gap-2 mb-8">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary-300"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            <span className="text-sm text-neutral-500">
              New courses and lessons added every week.
            </span>
          </div>

          {/* Decorative bar chart */}
          <div className="flex items-end justify-center gap-1 h-20">
            {[40, 55, 30, 70, 45, 80, 35, 60, 50, 75, 40, 65, 55, 85, 45, 70, 30, 50, 60, 40].map((h, i) => (
              <div
                key={i}
                className="w-3 sm:w-4 rounded-t-sm bar-gradient"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
