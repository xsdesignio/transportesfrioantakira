<!-- ------------------------------------------ J S ------------------------------------------ -->
<script>
    

    export let title;
    export let description;
    export let buttonText;
    export let buttonUrl;
    export let videoUrl;

</script>



<!-- ------------------------------------------ H T M L ------------------------------------------ -->
<section class="hero">
    <div class="hero-content animate">
        <h1 class="hero-title">
            { title }
        </h1>
        <p class="hero-description">
            { description }
        </p>
        <a href="{buttonUrl}" class="default-button">
            { buttonText }
        </a>
    </div>

    <video id="background-video" class="hero-media-asset is-visible" autoplay="true" muted="true" loop="true" playsinline="true" data-hero-video="{ videoUrl }" data-src-lg="{ videoUrl }" data-src-sm="{ videoUrl }">
        <source src="{ videoUrl }" type="video/mp4">
    </video>
    
</section>



<!-- ------------------------------------------ C S S ------------------------------------------ -->
<style>
    .hero {
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1fr;
        place-items: center;
        background: linear-gradient(60deg, #0034569c, #1e0e5990);
        background-size: cover;
        background-position: center;
        color: white;
        text-align: center;
        position: relative;
        padding: 80px 40px;
        font-family: Montserrat;
        min-height: 60vh;
        height: fit-content;
    }

    #background-video {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: -10;
    }

    .hero-content {
        max-width: 800px;
        display: grid;
        place-items: center;
        gap: 28px;
    }

    .hero-title {
        font-size: 52px;
        font-weight: 700;
        text-shadow: rgba(0, 10, 62, 0.8) 0 0 40px;
    }
    .hero-description {
        max-width: 600px;
        font-size: 22px;
    }


    @media screen and (max-width: 767px) {
        .hero-content {
            text-align: left;
        }

        .hero-title {
            font-size: 32px;
        }
        

    }

</style>