<script>
    import { base } from "$app/paths";
    
    let links = [
      { name: 'home', link: '/' },
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
        { name: 'Logística Integral', link: '/logistica/almacenaje' },
        { name: 'Picking', link: '/logistica/picking' },
        { name: 'Grupaje', link: '/logistica/grupaje'}
      ]},
      { name: 'Sobre nosotros', link: '/#about-us' },
    ]

    let isClicked = false;


    // This function is called when html button is pressed
    function openCloseMenu () {
        isClicked = isClicked? false : true;
    }
</script>


{#if isClicked}
    <button class="mobile-button" type="button" on:click="{openCloseMenu}">
        <img class="close-icon" src="/assets/icons/cross.svg" alt="" srcset="/assets/icons/cross.svg">
    </button>

    <div class="mobile-menu" id="menu-content">
        <nav class="mobile-links-list">
            {#each links as link}
                <div class="link-wrapper animate">
                    {#if 'sublinks' in link }
                        <button class="link" on:click={ () => link["active"] = !link["active"]}>
                            {#if link['active']}
                                <b>{ link['name'] } -</b>
                            {:else}
                                { link['name'] } +
                            {/if}
                        </button>
                        {#if link['active']}
                            <div class="floating-links">
                                {#each link['sublinks'] as sublink}
                                <a class="sublink" href="{ base + sublink['link']}">
                                    {#if window.location.href == ( base + sublink['link'])}
                                        <span class="selected">{sublink['name']}</span>
                                    {:else}
                                        {sublink['name']}
                                    {/if}
                                </a>
                                {/each}
                            </div>
                        {/if}
                    {:else}
                        <button class="link" on:click={() => {
                            window.location.pathname = (base+link['link'])
                        }}>
                            {#if window.location.href == (base + link['link'])}
                                <span class="selected">{link['name']}</span>
                            {:else}
                                {link['name']}
                            {/if}
                        </button>
                    {/if}
                </div>
            {/each}
            <div class="link-wrapper contact-button-wrapper animate">
                <a href="{ base }/contacto" class="default-button contact-button">Contactar</a>
            </div>
        </nav>
    </div>

{:else}
    <button class="mobile-button" type="button" on:click="{openCloseMenu}">
        <img class="open-icon" src="{ base }/assets/icons/menu.svg" alt="" srcset="{ base }/assets/icons/menu.svg">
    </button>
{/if}



<style>

    .mobile-menu {
        display: none;
        opacity: 0;
        transition: .2s;
    }
    
    .mobile-button {
        display: none;
        height: 40px;
        width: 40px;
        background-color: white;
        border-radius: 50%;
        position: relative;
        z-index: 25;
        border: none;
        padding: 0;
        margin: 0;
    }

    .mobile-button img {
        width: 32px;
        border-radius: 50%;
    }

    .mobile-button:hover {
        transform: scale(1.1);
    }
    .mobile-button:active {
        transform: scale(.6);
    }



    @media screen and (max-width: 767px) {


        .link {
            display: block;
            text-decoration: none;
            color: #333;
            text-align: right;
            font-size: 22px;
            justify-self: right;
            padding: 20px;
            width: 100%;
        }

        .contact-button-wrapper {
            display: grid;
            justify-content: right;
        }
        .contact-button {
            display: block;
            margin: 20px;
            margin-top: 40px;
            width: fit-content;
        }

        .floating-links {
            background: linear-gradient(to right, rgba(255, 255, 255, 0.8), rgb(255, 255, 255));
        }

        .sublink {
            text-decoration: none;
            color: #555555;
            padding: 10px;
            text-align: right;
            font-size: 18px;
            justify-self: right;
            width: calc( 100% - 20px );
        }

        button {
            border: none;
            background: none;
            cursor: pointer;
        }

        .floating-links {
            display: block;
        }

        .floating-links * {
            margin-bottom: 10px;
            display: block;
        }

        .selected {
            font-weight: bold;
            transform: scale(1.08);
            background: linear-gradient(to right, #764ba2, #667eea);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            text-decoration: underline;
        }

        

        .mobile-button {
            justify-self: right;
            display: block;
        }


        .mobile-menu {
            position: absolute;
            inset: 0 0 0 auto;
            opacity: 1;
            background-color: rgba(242, 246, 255, 0.92);
            background: linear-gradient(to right, rgba(242, 246, 255, 0.8), rgb(242, 246, 255));
            width: 100vw;
            height: 100vh;

            display: grid;
            place-items: center right;
            transition: .2s;
        }

        .mobile-links-list {
            display: block;
            opacity: 1;
            text-align: right;
            height: fit-content;
            width: 100%;
            
        }
    }

</style>