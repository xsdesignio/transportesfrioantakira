<!-- ------------------------------------------ J S ------------------------------------------ -->
<script>
    

    export let title;
    export let description;
    export let buttonText;
    export let buttonUrl;
    export let imageUrl;

</script>



<!-- ------------------------------------------ H T M L ------------------------------------------ -->
<section class="hero" style="background-image: url({imageUrl});">
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

</section>



<!-- ------------------------------------------ C S S ------------------------------------------ -->
<style>
    .hero {
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1fr;
        place-items: center;
        background-color: #04008080;
        background-size: cover;
        background-position: center;
        background-blend-mode: color-burn;
        color: white;
        text-align: center;
        position: relative;
        padding: 80px 40px;
        font-family: Montserrat;
        min-height: 60vh;
        height: fit-content;
    }


    .hero-content {
        max-width: 800px;
        display: grid;
        place-items: center;
        gap: 40px;
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