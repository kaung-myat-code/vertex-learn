import { type SchemaTypeDefinition } from 'sanity'

import { course } from './documents/course'
import { lesson } from './documents/lesson'
import { instructor } from './documents/instructor'
import { category } from './documents/category'
import { video } from './documents/video'
import { agentContext } from './documents/agent-context'

import { courseModule } from './objects/module'
import { learningOutcome } from './objects/learning-outcome'
import { resource } from './objects/resource'
import { keyPoint } from './objects/key-point'
import { chapter } from './objects/chapter'
import { transcriptChunk } from './objects/transcript-chunk'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    course,
    lesson,
    instructor,
    category,
    video,
    agentContext,
    courseModule,
    learningOutcome,
    resource,
    keyPoint,
    chapter,
    transcriptChunk,
  ],
}
