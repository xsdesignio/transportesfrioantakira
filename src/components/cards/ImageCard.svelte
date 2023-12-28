<script>
    export let imageUrl;
</script>

<article class="animate" style="background-image: url({ imageUrl });">

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