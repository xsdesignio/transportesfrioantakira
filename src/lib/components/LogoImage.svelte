<script>
    import { base } from "$app/paths";

</script>

<a class="logo-container site-title" href="{ base }/">
    <img class="logo-image" src="{ base }/logo.png" alt="">
    <h1 class="logo logo-header">Clients Hunter</h1>
</a>


<style>
    .logo-container {
        text-align: center;
        display: grid;
        grid-template-columns: auto 1fr;
        max-width: fit-content;
        place-items: center;
    }
    /* .logo {
        font-family: 'comfortaa';
        font-weight: 900;
        color: #341B4D;
        width: max-content;
    }

    .logo-container {
        display: grid;
        grid-template-columns: auto auto;
        justify-self: left;
        align-items: center;
        height: fit-content;
        border-radius: 18px;
        background-color: white;
        padding: 4px 10px;
        width: fit-content;
    }
 */
    .logo-container h1 {
        max-width: fit-content;
        font-size: 20px;
        margin: 0;
        padding: 0;
        outline-bottom: none !important;

        background: -webkit-linear-gradient(60deg, #e77f56, #ca2d2d 80%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .logo-image {
        width: 54px;
        margin: 10px 10px 10px 0;
    }

</style>



