<script>
    import Footer from '../../../components/footers/Footer.svelte';
    import Header from '../../../components/header/Header.svelte';
    import ImageHero from '../../../components/hero/ImageHero.svelte';
    import TextSection from '../../../components/sections/TextSection.svelte';

    import DefaultSection from '../../../components/sections/DefaultSection.svelte';
    import Columns2x from '../../../components/grids/Columns2x.svelte';
    import ImageCard from '../../../components/cards/ImageCard.svelte';
    import ListCard from '../../../components/cards/ListCard.svelte';

    import { base } from "$app/paths";
    import { onMount } from 'svelte';

    import { animate } from '../../../utils/animations.js';


    let isMobile = false;

    const updateIsMobile = () => {
        isMobile = window.innerWidth < 767;
        console.log('Updating')
    }

    onMount(() => {
        window.addEventListener('resize', updateIsMobile);
        animate();
    })

</script>


<svelte:head>
    <title>
        Transporte Integral de Mercancías en Europa - Frío Antakira
    </title>
    <meta name="description" content="Ofrecemos una cobertura integral para el envío de Mercancías a Francia y Portugal, con rutas personalizadas que garantizan un buen servicio, adaptándonos a las necesidades de cada cliente">
</svelte:head>



<Header></Header>
<ImageHero
    title='Transporte Internacional'
    description='Realizamos transporte de mercancías internacional a países de Europa, con rutas personalizadas para garantizar la máxima eficacia.'
    buttonText='Contacta con nosotros'
    buttonUrl='/contacto'
    imageUrl='/assets/images/camiones.jpeg'
>
</ImageHero>


<DefaultSection title="¿Qué te ofrecemos?">
    <Columns2x>
        
        <ImageCard imageUrl="{base}/assets/images/camionesenfila.jpeg">
        </ImageCard>
        <ListCard>
            <h2>Llegamos a España y Europa.</h2>
            <p>
                Llegamos a más de 20 países, con rutas regulares que garantizan el buen servicio y una respuesta dinámica e inmediata, adaptada a las necesidades de cada cliente. Proporcionamos transparencia y trazabilidad de la mercancía durante el trayecto gracias a nuestros avanzados sistemas de geolocalización en tiempo real.
            </p>
        </ListCard>

        {#if isMobile}
            <ImageCard imageUrl="{base}/assets/images/camionsoldefondo.jpeg">
            </ImageCard>
            <ListCard>
                <h2>Ofrecemos seguridad en el transporte.</h2>
                <ul>
                    <li>Equipo propio de <b>seguimiento durante los 365 días del año</b>.</li>
                    <li><b>Parking de seguridad y rutas preestablecidas</b>, controladas por GPS.</li>
                    <li><b>Geolocalización en tiempo real</b> de nuestros vehículos.</li>
                    <li>
                        <b>Alarma de Temperatura.</b> Alarma online que controla los valores correctos de temperatura que requiere tu mercancía.
                    </li>
                    <li>
                        <b>Cierres de seguridad.</b> Garantizan una mayor seguridad durante el viaje.</li>
                    <li>Cierre de seguridad reforzado</li>
                </ul>
            </ListCard>
        {:else}
            <ListCard>
                <h2>Ofrecemos seguridad en el transporte.</h2>
                <ul>
                    <li>
                        <b>Alarma de Temperatura.</b> Alarma online que controla los valores correctos de temperatura que requiere tu mercancía.
                    </li>
                    <li>
                        <b>Cierres de seguridad.</b> Garantizan una mayor seguridad durante el viaje.</li>
                    <li>Cierre de seguridad reforzado</li>
                    <li>Transportamos tus mercancías <b>al lugar que necesites, en el momento que necesites</b>, con los cuidados que requieras.</li>
                    <li><b>Nos adaptamos plenamente tus necesidades</b> y las necesidades de tu producto o mercancía.</li>
                    <li>Proporcionamos <b>los más altos estándares de calidad y seguridad</b> en el transporte.</li>
                </ul>
            </ListCard>
            <ImageCard imageUrl="{base}/assets/images/camionsoldefondo.jpeg">
            </ImageCard>
        {/if}

    </Columns2x>
    <a class="default-button centered-button" href="{base}/contacto">Contacta con nosotros</a>
</DefaultSection>


<TextSection
    title="Transporte internacional de mercancías con FRIO ANTAKIRA.">
    <p>
        Somos la opción líder en el mercado cuando se trata de servicios de transporte de
        mercancías a nivel global. 
    </p>
    <p>
        Nuestro equipo de expertos en transporte internacional
        está altamente especializado y cuenta con la experiencia necesaria para gestionar
        una amplia gama de mercancías, desde productos alimenticios perecederos hasta
        maquinaria pesada y equipo industrial.
    </p>
    <p>
        Nos comprometemos a asegurar que sus mercancías sean transportadas de
        manera segura y eficiente a cualquier parte del mundo. Cumplimos rigurosamente
        con todos los requisitos y regulaciones internacionales de transporte, garantizando
        que su carga llegue a su destino en perfecto estado y en el plazo previsto.
    </p>
    <p>
        Para brindarle total tranquilidad, empleamos tecnología avanzada que permite el
        rastreo en tiempo real de su mercancía durante todo el proceso de transporte. Esto
        no solo le proporciona visibilidad constante, sino también la confianza de que su
        carga está siendo monitoreada y manejada con el más alto nivel de cuidado y
        profesionalismo.
    </p>
    <p>
        Confía en nosotros para llevar sus mercancías a cualquier parte del mundo de
        manera segura, confiable y eficiente. Somos su socio de confianza en el complejo
        mundo del transporte internacional de mercancías."
    </p>
        
    <a class="default-button centered-button" href="{base}/contacto">Contacta con nosotros</a>
</TextSection>

<Footer>
</Footer>




<style>
    .centered-button {
        display: block;
        margin: 40px auto;
        text-align: center;
        width: fit-content;
    }


</style>