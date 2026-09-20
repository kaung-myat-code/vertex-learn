import { defineType, defineField } from 'sanity'

export const transcriptChunk = defineType({
  name: 'transcriptChunk',
  title: 'Transcript Chunk',
  type: 'object',
  fields: [
    defineField({
      name: 'startSeconds',
      title: 'Start (seconds)',
      type: 'number',
      validation: (rule) => rule.min(0),
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: { title: 'text', subtitle: 'startSeconds' },
  },
})
