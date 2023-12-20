import { sanityClient } from 'sanity:client';
import  imageUrlBuilder from '@sanity/image-url';

type ImageUrlBuilder = ReturnType<typeof imageUrlBuilder>;
type ImageSource = Parameters<ImageUrlBuilder["image"]>[0];

const imageUrlFor = (source: ImageSource) =>
  imageUrlBuilder(sanityClient).image(source);

export { imageUrlFor };

