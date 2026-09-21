import type { StructureResolver } from 'sanity/structure'
import { BookIcon } from '@sanity/icons'
import { DocumentTextIcon } from '@sanity/icons'
import { UserIcon } from '@sanity/icons'
import { TagIcon } from '@sanity/icons'
import { PlayIcon } from '@sanity/icons'
import { CogIcon } from '@sanity/icons'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Courses')
        .icon(BookIcon)
        .child(S.documentTypeList('course').title('Courses')),
      S.listItem()
        .title('Lessons')
        .icon(DocumentTextIcon)
        .child(S.documentTypeList('lesson').title('Lessons')),
      S.divider(),
      S.listItem()
        .title('Instructors')
        .icon(UserIcon)
        .child(S.documentTypeList('instructor').title('Instructors')),
      S.listItem()
        .title('Categories')
        .icon(TagIcon)
        .child(S.documentTypeList('category').title('Categories')),
      S.divider(),
      S.listItem()
        .title('Videos')
        .icon(PlayIcon)
        .child(S.documentTypeList('video').title('Videos')),
      S.listItem()
        .title('Search Config')
        .icon(CogIcon)
        .child(
          S.document()
            .schemaType('agentContext')
            .documentId('agentContext')
        ),
    ])
