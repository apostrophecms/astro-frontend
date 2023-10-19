# Astro demo with Apostrophe

This "Astro-Postrophe" demo is mostly powered by Stephane's hard work with a little bit of setup from me.

## How to set it up

To set this up, you'll need *two* projects:

1. The `astro-demo` branch of `a3-boilerplate`. Get that up and running in one terminal.

2. This repo, `astro-demo`. `npm install` and `npm run dev` in a second terminal.

3. Then you can access your website **at the URL printed by `astro-demo`, not Apostrophe.** You could go straight to
Apostrophe, but there's no need, and also eventually we'll remove the `.html` templates from this branch of
`a3-boilerplate` (or a new repo) to make this clear. You want to do everything within the Astro-powered site.

4. Then you can log in normally and edit, pretty much normally, even though Astro is rendering everything.

I haven't migrated the project-level CSS into Astro yet, so the page looks basic, but our admin UI works normally.

## How to implement new page and widget components

Every page type and widget type in the Apostrophe project must have a matching component in this project. You **don't** need to write
a `.html` template to match in Apostrophe (TODO: give Apostrophe appropriate options so the absence of these doesn't break anything if
somebody goes straight to Apostrophe).

For pages, see `src/templates/index.js` and the Astro components in `src/templates`.

For widgets, see `src/widgets/index.js` and the Astro components in `src/widgets`.

Note that Apostrophe page and widget types are mapped one to one to Astro components, all of which are at project
level for now.

## What about Vue, React, SvelteJS etc.? I thought I could use those.

You can. You can `import` them from any Astro component and pass them props just as if they were Astro components.
Astro components exist as a bridge between the other frameworks, and because React et al. aren't that well suited
to implementing an entire page including the outermost wrapper tags.

## What about browser-side JavaScript?

This is a server-side rendering solution, allowing you to use modern frameworks to generate all of your markup server side,
which is what most people prefer right now. But obviously front end JavaScript is still a thing.

We don't have a solution in place for widget players yet. See the Astro docs re: how components that need to be available
in browser space could be handled (I'm punting because I haven't tried it yet).

## Astro resources

Feel free to check the [Astro documentation](https://docs.astro.build) or jump into the Astro [Discord server](https://astro.build/chat).
