import { defineConfig } from 'astro/config';
import { sanityIntegration as sanity } from '@sanity/astro';
import react from '@astrojs/react';
import { loadEnv } from 'vite';
import vercel from "@astrojs/vercel/serverless";
import tailwind from "@astrojs/tailwind";


const {
  PUBLIC_SANITY_STUDIO_PROJECT_ID,
  PUBLIC_SANITY_STUDIO_DATASET,
  PUBLIC_SANITY_PROJECT_ID,
  PUBLIC_SANITY_DATASET
} = loadEnv(import.meta.env.MODE, process.cwd(), '');

// Different environments use different variables
const projectId = PUBLIC_SANITY_STUDIO_PROJECT_ID || PUBLIC_SANITY_PROJECT_ID;
const dataset = PUBLIC_SANITY_STUDIO_DATASET || PUBLIC_SANITY_DATASET;


// https://astro.build/config
export default defineConfig({
  integrations: [sanity({
    projectId,
    dataset,
    apiVersion: `2022-03-07`,
    studioBasePath: '/admin',
    //`false` if you want to ensure fresh data / Set useCdn to false if you're building statically
    useCdn: false
  }),
  react(),
  tailwind()],
  output: 'hybrid',
  adapter: vercel()
});