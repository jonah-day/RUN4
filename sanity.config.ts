import {defineConfig} from 'sanity';
import {deskTool} from 'sanity/desk';
import {visionTool} from '@sanity/vision';
import { sanityClient } from 'sanity:client';
import { schemaTypes } from './schemas/index.ts';

const { projectId, dataset } = sanityClient.config();

if (!projectId || !dataset)
  throw new Error(
    'projectId and/or dataset not set',
  );

export default defineConfig({
  name: 'default',
  title: 'RUN4',
  projectId,
  dataset,
  plugins: [
    deskTool(),
    visionTool()
  ],
  
  schema: {
    types: schemaTypes,
  },
})
  