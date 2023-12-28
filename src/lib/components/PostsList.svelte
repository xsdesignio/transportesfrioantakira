<script>
	export let posts = []

    import { base } from '$app/paths';
</script>


<ul class="posts-list">
	{#each posts as post}
		<li>

			<a href="{ base }/blog/{post.slug}" class="article">
				<article>
					<h2>
						{post.title}
					</h2>
				</article>

				<p>{post.excerpt}</p>

			</a>
		</li>
	{/each}
</ul>


<style>
	.article {
		width: 100vw;
		position: relative;
		background-color: var(--darker);
		color: white !important;
		padding: 20px;
		transition: .2s background-color;
		text-decoration: none !important;
	}

	.article:hover {
		background-color: var(--lightAccent);
		outline: 2px solid var(--darker);
	}

	.article:hover h2 {
		color: var(--darker) !important;
	}

	.article:hover p {
		color: var(--darker) !important;
	}
	.article h2 {
		color: white !important;
		margin: 20px 0;
	}
</style>