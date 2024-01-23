import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'stack',
  title: 'Stack',
  type: 'document',
  fields: [
    defineField({
      name: 'skill',
      title: 'Skill',
      type: 'string',
    }),
    defineField({
        name: 'description',
        title: 'description',
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
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "reference",
      to: { type: "stackcategory" },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
  ],

  preview: {
    select: {
      title: 'skill',
      media: 'mainImage',
    },
  },
})
