import {defineField, defineType} from 'sanity';
import { BlockElementIcon } from '@sanity/icons';

const contentBlockSchema = defineType({
    name: 'contentBlock',
    title: 'Content Block',
    type: 'document',
    icon: BlockElementIcon,
    fields: [
      defineField({
        name: 'title',
        title: 'Title',
        type: 'string',
      }),
      defineField({
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        validation: (Rule) => Rule.required(),
        options: {
          source: 'title',
          maxLength: 96,
        },
      }),
    //   defineField({
    //     name: 'mainImage',
    //     title: 'Main image',
    //     type: 'image',
    //     options: {
    //       hotspot: true,
    //     },
    //   }),
      defineField({
        name: 'content',
        title: 'Content',
        type: 'baseContentBlock',
      }),
    ],
  })
  
  export default contentBlockSchema;