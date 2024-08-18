import {defineField, defineType} from 'sanity'

export const landingPage = defineType({
  name: 'landingPage',
  type: 'document',
  title: 'Landing Page',
  fields: [
    defineField({
      name: 'headline',
      title: 'headline',
      type: 'string',
    }),
  ],
})
