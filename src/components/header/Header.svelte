
<script>
    

    import MobileMenu from "./MobileMenu.svelte";

    let links = [
      { name: 'Home', link: '/' },
      { name: 'Mercancías', sublinks: [
        { name: 'Refrigerados y temperatura controlada', link: '/mercancias/refrigerados' },
        { name: 'Mercancías frágiles y especiales', link: '/mercancias/especiales' },
        { name: 'Protección con Lona o Taulinier', link: '/mercancias/lonas'}
      ]},
      { name: 'Transporte', sublinks: [
        { name: 'Transporte Terrestre Nacional', link: '/transportes/transporte-nacional' },
        { name: 'Transporte Terrestre Internacional', link: '/transportes/transporte-internacional' },
      ]},
      { name: 'Logística', sublinks: [
        { name: 'Almacenaje 24h', link: '/logistica/almacenaje' },
        { name: 'Picking', link: '/logistica/picking' },
        { name: 'Grupaje', link: '/logistica/grupaje'}
      ]},
      { name: 'Sobre nosotros', link: '/#about-us' },
    ]


    let smallHeader = false;

    function manageScroll () {
        if(window.scrollY > 50 && !smallHeader) {
            console.log("hola")
            smallHeader = true;
        } else if(window.scrollY <= 50 && smallHeader) {
            smallHeader = false;
        }
    }
</script>


<svelte:window on:scroll={manageScroll} />
<header class={smallHeader ? 'smaller' : '' }> 
    <a class="logo-container" href="/">
        <img src="/logo2.png" alt="">
    </a>
    
    <nav>
        {#each links as link}
            <a href="{link['link']}">
                {link['name']}
                {#if 'sublinks' in link }
                    <div class="floating-links">
                        {#each link['sublinks'] as sublink}
                        <a href="{sublink['link']}">
                            {sublink['name']}
                        </a>
                        {/each}
                    </div>    
                {/if}
            </a>
        {/each}
    </nav>
    <a href="/contacto" class="default-button contact-button">Contacto</a>

    <MobileMenu links={links}></MobileMenu>
</header>


<style>
    header {
        position: sticky;
        width: calc(100% - 80px);
        inset: 0 auto auto auto;
        display: grid;
        align-items: center;
        grid-template-columns: 1fr 2fr 1fr;
        padding: 0 40px;
        background-color: white;
        z-index: 20;
        border-bottom: 1px solid var(--dark-blue);
        box-shadow: rgba(0, 0, 0, 0.2) -14px 0 20px 0;
    }

    header.smaller {

    }

    header a {
        padding: 10px;
        text-decoration: none;
        color: black;
        font-family: Montserrat;
    }

    header .logo-container {
        justify-self: left;
        display: block;
    }

    header > a img {
        height: 72px;
        justify-self: left;
        transition: .4s;
    }

    header.smaller > a img {
        height: 48px;

    }

    header > nav {
        justify-self: center;
        align-items: center;
    }

    header > a {
        justify-self: right;
        align-items: center;
    }

    header > nav > a {
        position: relative;
        overflow: visible;
    }

    .contact-button {
        color: white;
    }
    
    .floating-links {
        display: none;
        position: fixed;
        background-color: white;
        position: absolute;
        inset: 40px 5px auto 5px;
        width: 220px;
        border: 1px solid var(--default-blue);
        transition: .4s;
    }

    .floating-links a{
        display: block;
        font-weight: 400;
        padding: 20px 10px;
        border-bottom: 1px solid var(--default-blue);
    }

    .floating-links a:hover{
        font-weight: 600;
        background-color: var(--light-gray);
    }
   
    header a:hover .floating-links {
        display: block;
    }


    @media screen and (max-width: 767px) {
        header {
            display: grid;
            grid-template-columns: 1fr 1fr;
            padding: 0 20px;
            width: calc(100% - 40px);
        }

        header > nav {
            display: none;
        }

        header > a {
            display: none;
        }
    }

</style>