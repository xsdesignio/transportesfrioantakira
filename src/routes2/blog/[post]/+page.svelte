<!-- This file renders each individual blog post for reading. Be sure to update the svelte:head below -->
<script>
	export let data

	const {
		title,
		excerpt,
		date,
		updated,
		/* coverImage,
		coverWidth,
		coverHeight, */
		categories 
	} = data.meta
	const { PostContent } = data

	import { base } from '$app/paths';
</script>


<svelte:head>
	<!-- Be sure to add your image files and un-comment the lines below -->
	<title>{title}</title>
	<meta data-key="description" name="description" content="{excerpt}">
	<meta property="og:type" content="article" />
	<meta property="og:title" content={title} />
	<meta name="twitter:title" content={title} />
	<meta property="og:description" content={excerpt} />
	<meta name="twitter:description" content={excerpt} />
	<!-- <meta property="og:image" content="https://yourdomain.com/image_path" /> -->
	<!-- <meta property="og:image:width" content={coverWidth} />
	<meta property="og:image:height" content={coverHeight} /> -->
	<!-- <meta name="twitter:image" content="https://yourdomain.com/image_path" /> -->
</svelte:head>



<section class="hero">

	<div class="content">
		<h1>{ title }</h1>

		<div class="meta">
			<b>Published:</b> {date}
			<br>
			<b>Updated:</b> {updated}
		</div>
	</div>
	
</section>

<article class="post">
	<!-- You might want to add an alt frontmatter attribute. If not, leaving alt blank here works, too. -->
	

	<svelte:component this={PostContent} />

	{#if categories}
		<aside class="post-footer">
			<h2>Posted in: </h2>
			<ul>
				{#each categories as category}
					<li>
						<a href="{base}/blog/category/{category}/">
							{ category }
						</a>
					</li>
				{/each}
			</ul>
		</aside>
	{/if}
</article> 



<style>
	.hero {
		width: 100vw;
		position: relative;
		background-color: var(--darker);
	}

	.hero .content {
		padding: 20px;
	}

	.content {
		color: white !important;
	}

	.content h1 {
		color: white !important;
	}

</style>