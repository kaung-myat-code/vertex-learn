import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schema } from './schemaTypes'
import { structure } from './structure'

const projectId = import.meta.env.SANITY_STUDIO_PROJECT_ID || import.meta.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = import.meta.env.SANITY_STUDIO_DATASET || import.meta.env.NEXT_PUBLIC_SANITY_DATASET

export default defineConfig({
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({ structure }),
    visionTool(),
  ],
})
