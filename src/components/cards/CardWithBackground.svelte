<script>
    export let imageUrl;
    export let title;
    export let description;
    import { base } from "$app/paths";
</script>

<article style="background-image: url({base + imageUrl });">
    <h3>{title}</h3>
    <p>{description}</p>
</article>

<style>
    article {
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        height: 100%;
        min-height: 100px;
        min-width: 100px;
        width: 100%;
        aspect-ratio: 3/2;
        border-radius: 8px;
    }
</style>