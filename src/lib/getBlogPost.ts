import { sanityClient } from 'sanity:client';
import groq from 'groq';
import type { Image, Slug, TypedObject } from '@sanity/types';


interface BlogPost {
  _id: string;
  _type: 'blogPost';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name: string;
  title: string;
  date: string;
  excerpt: string;
  content: TypedObject;
  image: Image;
  slug: Slug;
}


async function getBlogPosts() {

  return await sanityClient.fetch<BlogPost[]>(groq`
  *[_type == "blogPost"] {
    ...,
    "image": image { ..., asset-> },
    "content": content[] {
      ...,
      _type == "image" => {
        ...,
        asset->
      }
    }
  }
`);
}


export default getBlogPosts;
export type { BlogPost };