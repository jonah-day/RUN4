import {defineField, defineType, defineArrayMember} from 'sanity';
import { RocketIcon } from '@sanity/icons'

const contentBlockSchema = defineType({
    name: 'contentBlock',
    title: 'Content Block',
    type: 'document',
    icon: RocketIcon,
    fields: [
      defineField({
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (Rule) => Rule.required(),
      }),
      defineField({
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
        validation: (Rule) => Rule.required(),
      }),
      defineField({
        name: 'text',
        title: 'Text',
        type: 'text',
        validation: (Rule) => Rule.required(),
      }),
    ],
});

export default contentBlockSchema;