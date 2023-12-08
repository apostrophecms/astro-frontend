import { defineConfig } from 'astro/config';
import apostrophe from '@apostrophecms/astro-integration';

export default defineConfig({
  output: 'server',
  integrations: [
    apostrophe({
      aposHost: 'http://localhost:3000',
      widgetsMapping: './src/widgets',
      templatesMapping: './src/templates',
      forwardHeaders: [
        'content-security-policy', 
        'strict-transport-security', 
        'x-frame-options',
        'referrer-policy',
        'cache-control',
        'host'
      ]
    })
  ]
});
