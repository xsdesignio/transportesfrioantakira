
// IMPORTANT: update all these property values in src/lib/config.js
import { siteTitle, siteDescription, siteURL, siteLink } from '$lib/config'

export const prerender = true

export const GET = async () => {	
	const data = await Promise.all(
		Object.entries(import.meta.glob('$lib/posts/*.md')).map(async ([path, page]) => {
			const { metadata } = await page()
			const slug = path.split('/').pop().split('.').shift()
			return { ...metadata, slug }
		})
	)
	.then(posts => {
		return posts.sort((a, b) => new Date(b.date) - new Date(a.date))
	})

	const body = render(data)
	const headers = {
		'Cache-Control': `max-age=0, s-max-age=${600}`,
		'Content-Type': 'application/xml',
	}
	return new Response(
		body,
		{
			status: 200,
			headers,
		}
	)
};


//Be sure to review and replace any applicable content below!
const render = (posts) => `

<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
	<url>
		<loc>https://clientshunter.co/</loc>
		<changefreq>weekly</changefreq>
		<lastmod>2023-07-21</lastmod>
		<priority>1</priority>
	</url>
	${posts
		.map(
			(post) => {
				
				let date = new Date(post.date)
				let formatted_date = `${date.getFullYear()}-${(date.getMonth() - 1).toString().padStart(2, '0')}-${date.getDay().toString().padStart(2, '0')}`
				return`
	<url>
		<loc>https://${siteURL}/blog/${post.slug}</loc>
		<changefreq>weekly</changefreq>
		<lastmod>${formatted_date}</lastmod>
		<priority>0.9</priority>
	</url>`
	}
		)
		.join('')
	}
</urlset>

`;












