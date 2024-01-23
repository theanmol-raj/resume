import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'testimonials',
  title: 'Testimonials',
  type: 'document',
  fields: [
    defineField({
      name: 'testimonial',
      title: 'Testimonial',
      type: 'string',
    }),
    defineField({
      name: 'user',
      title: 'User',
      type: 'string',
    }),
    defineField({
        name: 'linkedIn',
        title: 'LinkedIn',
        type: 'string',
      }),
    defineField({
        name: 'designation',
        title: 'Designation',
        type: 'string',
      }),
    defineField({
        name: 'mainImage',
        title: 'Main image',
        type: 'image',
        options: {
          hotspot: true,
        },
        fields: [
          {
            name: 'alt',
            type: 'string',
            title: 'Alternative Text',
          }
        ]
      })
  ],
})
