import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { SearchInput } from "@/components/SearchInput";
import { Select } from "@/components/Select";
import { Badge } from "@/components/Badge";
import {
  CourseCard,
  LessonCardVideo,
  LessonCardLesson,
  ResourceCard,
} from "@/components/Card";
import { ProgressBar } from "@/components/ProgressBar";
import { StatusIndicator } from "@/components/StatusIndicator";
import { Navigation } from "@/components/Navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Pagination } from "@/components/Pagination";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Breadcrumb
            items={[
              { label: "All Courses", href: "/courses" },
              { label: "Next.js for Production", href: "/courses/nextjs" },
              { label: "Data Fetching & Caching" },
            ]}
          />
        </div>

        {/* Typography Section */}
        <section className="mb-16">
          <h2 className="font-heading-2 text-neutral-900 mb-8">Typography</h2>
          <div className="space-y-4">
            <p className="font-display-1 text-neutral-900">
              Display 1 - Playfair Display
            </p>
            <p className="font-display-2 text-neutral-900">
              Display 2 - Playfair Display
            </p>
            <p className="font-heading-1 text-neutral-900">
              Heading 1 - Inter Semi Bold
            </p>
            <p className="font-heading-2 text-neutral-900">
              Heading 2 - Inter Semi Bold
            </p>
            <p className="font-heading-3 text-neutral-900">
              Heading 3 - Inter Medium
            </p>
            <p className="font-body-large text-neutral-700">
              Body Large - Inter Regular (16px)
            </p>
            <p className="font-body text-neutral-700">
              Body - Inter Regular (14px)
            </p>
            <p className="font-small text-neutral-500">
              Small - Inter Regular (12px)
            </p>
          </div>
        </section>

        {/* Colors Section */}
        <section className="mb-16">
          <h2 className="font-heading-2 text-neutral-900 mb-8">Colors</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-heading-3 text-neutral-700 mb-3">Primary</h3>
              <div className="flex gap-4">
                {[
                  { name: "500", color: "bg-primary-500" },
                  { name: "400", color: "bg-primary-400" },
                  { name: "300", color: "bg-primary-300" },
                  { name: "200", color: "bg-primary-200" },
                  { name: "100", color: "bg-primary-100" },
                ].map((item) => (
                  <div key={item.name} className="text-center">
                    <div
                      className={`w-16 h-16 rounded-radius-md ${item.color}`}
                    />
                    <p className="text-sm text-neutral-500 mt-2">{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-heading-3 text-neutral-700 mb-3">Neutral</h3>
              <div className="flex gap-4">
                {[
                  { name: "900", color: "bg-neutral-900" },
                  { name: "700", color: "bg-neutral-700" },
                  { name: "500", color: "bg-neutral-500" },
                  { name: "300", color: "bg-neutral-300" },
                  { name: "200", color: "bg-neutral-200" },
                  { name: "100", color: "bg-neutral-100" },
                  { name: "50", color: "bg-neutral-50" },
                ].map((item) => (
                  <div key={item.name} className="text-center">
                    <div
                      className={`w-16 h-16 rounded-radius-md border border-neutral-200 ${item.color}`}
                    />
                    <p className="text-sm text-neutral-500 mt-2">{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Buttons Section */}
        <section className="mb-16">
          <h2 className="font-heading-2 text-neutral-900 mb-8">Buttons</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-heading-3 text-neutral-700 mb-3">
                Primary
              </h3>
              <div className="flex gap-4">
                <Button variant="primary">Get Started</Button>
                <Button variant="primary" size="md">
                  Get Started
                </Button>
                <Button variant="primary" disabled>
                  Get Started
                </Button>
              </div>
            </div>
            <div>
              <h3 className="font-heading-3 text-neutral-700 mb-3">
                Secondary
              </h3>
              <div className="flex gap-4">
                <Button variant="secondary">Explore Courses</Button>
                <Button variant="secondary" size="md">
                  Explore Courses
                </Button>
                <Button variant="secondary" disabled>
                  Explore Courses
                </Button>
              </div>
            </div>
            <div>
              <h3 className="font-heading-3 text-neutral-700 mb-3">
                Tertiary
              </h3>
              <div className="flex gap-4">
                <Button variant="tertiary">View Lesson</Button>
                <Button variant="tertiary" size="md">
                  View Lesson
                </Button>
                <Button variant="tertiary" disabled>
                  View Lesson
                </Button>
              </div>
            </div>
            <div>
              <h3 className="font-heading-3 text-neutral-700 mb-3">Text</h3>
              <div className="flex gap-4">
                <Button variant="text">Watch Video</Button>
                <Button variant="text" size="md">
                  Watch Video
                </Button>
                <Button variant="text" disabled>
                  Watch Video
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Inputs Section */}
        <section className="mb-16">
          <h2 className="font-heading-2 text-neutral-900 mb-8">Inputs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-heading-3 text-neutral-700 mb-3">
                Search Input
              </h3>
              <SearchInput placeholder="Search anything..." />
            </div>
            <div>
              <h3 className="font-heading-3 text-neutral-700 mb-3">
                Text Input
              </h3>
              <Input placeholder="Enter your email" />
            </div>
            <div>
              <h3 className="font-heading-3 text-neutral-700 mb-3">Select</h3>
              <Select
                options={[
                  { value: "relevant", label: "Most Relevant" },
                  { value: "newest", label: "Newest" },
                  { value: "popular", label: "Most Popular" },
                ]}
              />
            </div>
            <div>
              <h3 className="font-heading-3 text-neutral-700 mb-3">
                Input with Label
              </h3>
              <Input label="Email Address" placeholder="you@example.com" />
            </div>
          </div>
        </section>

        {/* Badges Section */}
        <section className="mb-16">
          <h2 className="font-heading-2 text-neutral-900 mb-8">Badges</h2>
          <div className="flex gap-4">
            <Badge variant="video">Video</Badge>
            <Badge variant="lesson">Lesson</Badge>
            <Badge variant="popular">Popular</Badge>
          </div>
        </section>

        {/* Status Indicators Section */}
        <section className="mb-16">
          <h2 className="font-heading-2 text-neutral-900 mb-8">
            Status Indicators
          </h2>
          <div className="flex gap-8">
            <StatusIndicator status="in-progress" percentage={45} />
            <StatusIndicator status="completed" />
            <StatusIndicator status="now-playing" />
            <StatusIndicator status="locked" />
          </div>
        </section>

        {/* Progress Bar Section */}
        <section className="mb-16">
          <h2 className="font-heading-2 text-neutral-900 mb-8">
            Progress Bar
          </h2>
          <div className="max-w-md">
            <ProgressBar value={35} />
          </div>
        </section>

        {/* Cards Section */}
        <section className="mb-16">
          <h2 className="font-heading-2 text-neutral-900 mb-8">Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CourseCard
              icon={
                <span className="text-xl font-bold text-neutral-700">N</span>
              }
              title="Next.js for Production"
              description="Build scalable, high-performance web applications with Next.js."
              level="Intermediate"
              duration="18h 24m"
              modules={12}
            />
            <LessonCardVideo
              badge="video"
              title="Data Fetching in Server Components"
              description="Learn how to fetch data on the server using async/await and Next.js best practices."
              lessonNumber="Lesson 5.1"
              duration="12:45"
              timestamp="12:45"
            />
            <LessonCardLesson
              badge="lesson"
              title="Data Fetching & Caching"
              description="Explore different data fetching methods in Next.js and how to cache and revalidate data for optimal performance."
              moduleNumber="Module 5"
            />
            <ResourceCard
              title="Caching and Revalidation Guide"
              description="Deep dive into Next.js caching strategies."
              fileType="PDF"
              fileSize="1.2 MB"
            />
          </div>
        </section>

        {/* Pagination Section */}
        <section className="mb-16">
          <h2 className="font-heading-2 text-neutral-900 mb-8">Pagination</h2>
          <Pagination currentPage={1} totalPages={8} />
        </section>

        {/* Shadows Section */}
        <section className="mb-16">
          <h2 className="font-heading-2 text-neutral-900 mb-8">Shadows</h2>
          <div className="flex gap-8">
            {[
              { name: "sm", shadow: "shadow-sm" },
              { name: "md", shadow: "shadow-md" },
              { name: "lg", shadow: "shadow-lg" },
              { name: "xl", shadow: "shadow-xl" },
            ].map((item) => (
              <div key={item.name} className="text-center">
                <div
                  className={`w-24 h-24 bg-white rounded-radius-md ${item.shadow}`}
                />
                <p className="text-sm text-neutral-500 mt-2">{item.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Border Radius Section */}
        <section className="mb-16">
          <h2 className="font-heading-2 text-neutral-900 mb-8">
            Border Radius
          </h2>
          <div className="flex gap-8">
            {[
              { name: "xs", radius: "rounded-radius-xs" },
              { name: "sm", radius: "rounded-radius-sm" },
              { name: "md", radius: "rounded-radius-md" },
              { name: "lg", radius: "rounded-radius-lg" },
              { name: "xl", radius: "rounded-radius-xl" },
              { name: "full", radius: "rounded-radius-full" },
            ].map((item) => (
              <div key={item.name} className="text-center">
                <div
                  className={`w-16 h-16 bg-primary-500 ${item.radius}`}
                />
                <p className="text-sm text-neutral-500 mt-2">{item.name}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
