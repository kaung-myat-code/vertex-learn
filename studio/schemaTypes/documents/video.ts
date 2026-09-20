import { defineType, defineField, defineArrayMember } from 'sanity'
import { PlayIcon } from '@sanity/icons'

export const video = defineType({
  name: 'video',
  title: 'Video',
  type: 'document',
  icon: PlayIcon,
  fields: [
    defineField({
      name: 'videoId',
      title: 'Video ID',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'Video URL',
      type: 'url',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'chapters',
      title: 'Chapters',
      type: 'array',
      of: [defineArrayMember({ type: 'chapter' })],
    }),
    defineField({
      name: 'chunks',
      title: 'Transcript Chunks',
      type: 'array',
      of: [defineArrayMember({ type: 'transcriptChunk' })],
    }),
  ],
  preview: {
    select: { title: 'videoId', subtitle: 'url' },
  },
})
