import adapter from '@sveltejs/adapter-static'
import { mdsvex } from 'mdsvex'
import preprocess from 'svelte-preprocess'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Ensures both .svelte and .md files are treated as components (can be imported and used anywhere, or used as pages)
	extensions: ['.svelte'],

	kit: {
		adapter: adapter({
			pages: 'build/',
			assets: 'build',
			fallback: '404.html',
			precompress: false,
			strict: true
		}),

		paths: {
			base: process.env.BASE_PATH || '',
		},
		prerender: {
			entries: [
				'/contacto/',
				'/logistica/almacenaje/',
				'/logistica/grupaje/',
				'/logistica/picking/',
				'/mercancias/especiales/',
				'/mercancias/lonas/',
				'/mercancias/refrigerados/',
				'/transportes/transporte-internacional/',
				'/transportes/transporte-nacional/',
				'/sitemap.xml',
			],
			handleHttpError: ({ error, request }) => {
				// Implement your error handling logic here
				console.error(`Error during prerender`);
				return { status: 200, html: 'An error occurred during prerender.' };
			  },
		}
	}
};

export default config;
