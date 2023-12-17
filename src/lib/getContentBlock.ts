import { sanityClient } from 'sanity:client';
import groq from 'groq';


export async function getContentBlocks() {
  const query = groq`*[_type == 'contentBlock' && defined(slug.current)] | order(_createdAt desc)`;
  const contentBlocks = await sanityClient.fetch(query);
  return contentBlocks;
}

export async function getContentBlock( slug: string ) {
    const query = groq`*[_type == 'contentBlock' && slug.current == $slug][0]`;
    const contentBlock = await sanityClient.fetch(query, { slug });
    return contentBlock;
  }