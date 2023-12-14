import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import apostrophe from '@apostrophecms/astro-integration';

export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone'
  }),
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
