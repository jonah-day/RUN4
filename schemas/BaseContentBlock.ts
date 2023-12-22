import {defineType, defineArrayMember} from 'sanity'

const baseContentBlockSchema = defineType({
  title: 'Base Content Block',
  name: 'baseContentBlock',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Base Block',
      type: 'block',

      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'Quote', value: 'blockquote'},
      ],


      lists: [
        {title: 'Bullet', value: 'bullet'},
        {title: 'Numbered', value: 'number'},
      ],



      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          {title: 'Bold', value: 'strong'},
          {title: 'Italic', value: 'em'},
          {title: 'Underline', value: 'underline'},
          {title: 'Strike', value: 'strike-through'},

          // {title: 'Code', value: 'code',
          //  component: CodeDecorator },

          // {title: 'Highlight', value: 'highlight',
          // component: (props) => (
          //   <span style={{backgroundColor: '#0f0'}}>
          //     {props.children}
          //   </span>
          // ),
          // icon: BulbOutlineIcon,
          // },
        ],

        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
            ],
          },
        ],
      },
    }),

    defineArrayMember({
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alternative text',
          type: 'string',
        },
      ],
    }),
  ],
})

export default baseContentBlockSchema;