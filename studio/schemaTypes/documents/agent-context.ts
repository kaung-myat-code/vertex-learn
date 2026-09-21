import { defineType, defineField } from 'sanity'
import { CogIcon } from '@sanity/icons'

export const agentContext = defineType({
  name: 'agentContext',
  title: 'Agent Context',
  type: 'document',
  icon: CogIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'scopeFilter',
      title: 'Content Scope Filter',
      type: 'text',
      rows: 3,
      description: 'GROQ filter limiting which document types the agent can see',
    }),
    defineField({
      name: 'instructions',
      title: 'Query Instructions',
      type: 'text',
      rows: 6,
      description: 'Query guidance for the search agent',
    }),
  ],
  preview: {
    select: { title: 'title' },
  },
})
