import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
// import {presentationTool} from 'sanity/presentation'

const SANITY_STUDIO_PREVIEW_URL = process.env.SANITY_STUDIO_PREVIEW_URL || 'http://localhost:3000'
export default defineConfig({
  name: 'default',
  title: 'portofolio',

  projectId: 'hu9rbuh3',
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool(),
    //? it used to add the preview page
    // presentationTool({
    //   // Required: set the base URL to the preview location in the front end
    //   previewUrl: SANITY_STUDIO_PREVIEW_URL,
    // }),
  ],

  schema: {
    types: schemaTypes,
  },
})
