import { defineType, defineField } from 'sanity'

export const keyPoint = defineType({
  name: 'keyPoint',
  title: 'Key Point',
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      title: 'Text',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: { title: 'text' },
  },
})
