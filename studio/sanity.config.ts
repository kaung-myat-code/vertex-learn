import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schema } from './schemaTypes'
import { structure } from './structure'

function requiredEnv(name: string): string {
  const value = process.env[name]
  if (!value) throw new Error(`Missing required environment variable: ${name}`)
  return value
}

const projectId = requiredEnv('SANITY_STUDIO_PROJECT_ID')
const dataset = requiredEnv('SANITY_STUDIO_DATASET')

export default defineConfig({
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({ structure }),
    visionTool(),
  ],
})
