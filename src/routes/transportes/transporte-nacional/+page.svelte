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
        Transporte Integral de Mercancías por toda España - Frío Antakira
    </title>
    <meta name="description" content="Ofrecemos una cobertura integral en toda la península española, con rutas personalizadas que garantizan un buen servicio , adaptándonos a las necesidades de cada cliente">
</svelte:head>

<Header></Header>
<ImageHero
    title='Transporte Nacional de Mercancías'
    description='
        Ofrecemos una cobertura integral en toda la península española, con rutas personalizadas que garantizan un buen servicio, adaptándonos a las necesidades de cada cliente'
    buttonText='Contacta con nosotros'
    buttonUrl='/contacto'
    imageUrl='/assets/images/camionesenfila.jpeg'
>
</ImageHero>

<DefaultSection title="¿Qué te ofrecemos?">
    <Columns2x>
        
        <ImageCard imageUrl="{base}/assets/images/sunshine.webp">
        </ImageCard>
        <ListCard>
            <h2>Llegamos a todos los puntos de España.</h2>
            <p>
                Nos esforzamos por brindar el servicio más seguro y rápido posible, transportando tus mercancías por toda España. Nuestros años de experiencia nos permiten garantizar que cumpliremos con todas sus expectativas en cuanto a tiempo de entrega y seguridad durante el transporte
            </p>
        </ListCard>

        {#if isMobile}
            <ImageCard imageUrl="{base}/assets/images/camionsoldefondo.jpeg">
            </ImageCard>
            <ListCard>
                <h2>Llegamos a todos los puntos de España.</h2>
                <ul>
                    <li>Equipo propio de seguimiento durante los 365 días del año.</li>
                    <li>Parking de seguridad y rutas preestablecidas, controladas por GPS.</li>
                    <li>Geolocalización en tiempo real de nuestros vehículos.</li>
                    <li>Sistema de control de temperatura adaptado a todo tipo de mercancías.</li>
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
    title="Transporte Nacional: Conexiones Rápidas y Seguras en Toda España.">
    <p>
        Nuestro servicio de transporte nacional es su solución para <b>enviar mercancías a cualquier rincón de España</b>. 
        Con rutas personalizadas diseñadas para garantizar la máxima eficiencia y seguridad en cada trayecto.
    </p>

    <p>
        Contamos con una <b>red logística sólida y una flota de vehículos modernos</b> que nos
        permite ofrecer conexiones mejoradas en todo el país. Ya sea que necesite
        transportar productos perecederos, cargas sensibles o mercancías a granel, entre
        otros, ya que estamos equipados para manejar cualquier desafío logístico que
        pueda surgir.
    </p>
    <p>
        Nuestro equipo de profesionales altamente capacitados se encarga de cada detalle,
        desde la <b>planificación de rutas, hasta la entrega puntual</b>.
    </p>
<!-- 
    <p>
        Ofrecemos una amplia variedad de soluciones de transporte terrestre para todo tipo de mercancías y a lo largo de toda España (también ofrecemos transporte terrestre internacional si así lo requieres).
    </p> 
-->
    <p>
        Trabajamos incansablemente para asegurarnos de que nuestros clientes estén completamente satisfechos con nuestros servicios de transporte de alta calidad.
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