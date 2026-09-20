import { defineQuery } from 'next-sanity'

export const ALL_COURSES_QUERY = defineQuery(`
  *[_type == "course"] | order(title asc) {
    _id,
    title,
    "slug": slug.current,
    summary,
    coverImage,
    level,
    price,
    popular,
    studentCount,
    instructor->{ name, "slug": slug.current, photo },
    category->{ title, "slug": slug.current },
    "moduleCount": count(modules),
    "lessonCount": count(modules[].lessons)
  }
`)

export const COURSE_BY_SLUG_QUERY = defineQuery(`
  *[_type == "course" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    summary,
    coverImage,
    level,
    price,
    popular,
    studentCount,
    learningOutcomes,
    instructor->{
      name,
      "slug": slug.current,
      photo,
      expertise,
      bio
    },
    category->{ title, "slug": slug.current },
    modules[] {
      _key,
      title,
      summary,
      lessons[]-> {
        _id,
        title,
        "slug": slug.current,
        duration,
        freePreview,
        studentCount,
        posterImage
      }
    }
  }
`)

export const LESSON_BY_SLUG_QUERY = defineQuery(`
  *[_type == "lesson" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    videoUrl,
    posterImage,
    duration,
    freePreview,
    studentCount,
    notes,
    keyPoints,
    proTip,
    resources
  }
`)

export const ALL_INSTRUCTORS_QUERY = defineQuery(`
  *[_type == "instructor"] | order(name asc) {
    _id,
    name,
    "slug": slug.current,
    photo,
    expertise,
    bio
  }
`)

export const INSTRUCTOR_BY_SLUG_QUERY = defineQuery(`
  *[_type == "instructor" && slug.current == $slug][0] {
    _id,
    name,
    "slug": slug.current,
    photo,
    expertise,
    bio,
    "courses": *[_type == "course" && references(^._id)] {
      _id,
      title,
      "slug": slug.current,
      summary,
      coverImage,
      level,
      studentCount
    }
  }
`)

export const ALL_CATEGORIES_QUERY = defineQuery(`
  *[_type == "category"] | order(title asc) {
    _id,
    title,
    "slug": slug.current,
    description
  }
`)
