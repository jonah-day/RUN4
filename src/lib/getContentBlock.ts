import { sanityClient } from 'sanity:client';
import groq from 'groq';
import type { Slug } from '@sanity/types';


interface ContentBlock {
  _id: string;
  _type: 'contentBlock';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name: string;
  title: string;
  slug: Slug;
}

async function getContentBlocks() {

  return await sanityClient.fetch<ContentBlock[]>(groq`
  *[_type == "contentBlock"] { 
    ...,
  }`);
}

export { getContentBlocks };
export type { ContentBlock };






// export async function getContentBlocks() {
//   const query = groq`*[_type == 'contentBlock' && defined(slug.current)] | order(_createdAt desc)`;
//   const contentBlocks = await sanityClient.fetch(query);
//   return contentBlocks;
// }

// export async function getContentBlock( slug: string ) {
//     const query = groq`*[_type == 'contentBlock' && slug.current == $slug][0]`;
//     const contentBlock = await sanityClient.fetch(query, { slug });
//     return contentBlock;
//   }