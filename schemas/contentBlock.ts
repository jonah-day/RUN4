import {defineField, defineType, defineArrayMember} from 'sanity';

export const contentBlock = defineType({
    name: 'contentBlock',
    title: 'Content Block',
    type: 'document',
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
      }),
      defineField({
        name: 'text',
        title: 'Text',
        type: 'text',
      }),
    ],
});