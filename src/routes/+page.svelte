<script>
    import ImageCard from '../components/cards/ImageCard.svelte';
    import ListCard from '../components/cards/ListCard.svelte';
    import ServiceCard from '../components/cards/ServiceCard.svelte';
    import Footer from '../components/footers/Footer.svelte';
    import Columns2x from '../components/grids/Columns2x.svelte';
    import Columns3x from '../components/grids/Columns3x.svelte';
    import Header from '../components/header/Header.svelte';
    import VideoHero from '../components/hero/VideoHero.svelte';
    import DefaultSection from '../components/sections/DefaultSection.svelte';

    import { animate } from '../utils/animations.js';

    import { onDestroy, onMount } from 'svelte';


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
    <title>Transportes Frío Antakira. Ten tu mercancía en el lugar indicado en tiempo record.</title>
    <meta name="description" content="
        Más de 20 años de excelencia en transporte de mercancías,
        brindando seguridad, eficiencia y profesionalismo en cada viaje, tanto a nivel
        nacional como internacional. Tu carga en buenas manos."
    />
</svelte:head>

<Header></Header>
<VideoHero
    title='Más Seguro, más Rápido, a Cualquier Lugar'
    description='Más de 20 años de excelencia en transporte de mercancías,
    brindando seguridad, eficiencia y profesionalismo en cada viaje, tanto a nivel
    nacional como internacional. Tu carga en buenas manos.'
    buttonText='Contacta con nosotros'
    buttonUrl='contacto'
    videoUrl='/assets/videos/video-transportes.mp4'
>
</VideoHero>

<div id="about-us">
    <DefaultSection title="Conócenos">
        <Columns2x>
            <div class="info-element">
                <h1>¿Quién hay detrás de Frío Antakira?</h1>
                <p>Transportes Frío Antakira tiene sus raíces en una empresa familiar, que con constancia, esfuerzo y un servicio excelente ha conseguido ampliar el equipo hasta contar con una flota propia con la que garantizar la calidad de nuestros servicios.</p>
            </div>
            <div class="video-container">
                <iframe class="embedly-embed" src="//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2Fkw710-t99vs%3Ffeature%3Doembed&amp;display_name=YouTube&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dkw710-t99vs&amp;image=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fkw710-t99vs%2Fhqdefault.jpg&amp;key=96f1f04c5f4143bcb0f2e68c87d65feb&amp;type=text%2Fhtml&amp;schema=youtube" scrolling="no" allowfullscreen="" title="TRANSPORTES FRÍO ANTAKIRA, operador logístico #Antequera."></iframe>
            </div>
        </Columns2x>
    </DefaultSection>
</div>

<DefaultSection 
    title="Descubre nuestros servicio"
    background_color="#f9f9fb"
    >
    <h3 class="centered-thin-text">Transporte:</h3>
    <Columns2x>
        <ServiceCard link="/transportes/transporte-nacional">
            <h1>Transporte Nacional</h1>
            <p>Consigue que tus mercancías lleguen a toda España mediante nuestro servicio de transporte Nacional. Con rutas personalizadas que aseguran la mayor velocidad y seguridad en el trayecto.</p>
            <a href="/">Obtener más información</a>
        </ServiceCard>
        <ServiceCard link="/transportes/transporte-internacional">
            <h1>Transporte Internacional</h1>
            <p>Llegamos a Francia y Portugal, con rutas a medida que garantizan el buen servicio y una respuesta dinámica e inmediata adaptada a las necesidades de cada cliente.</p>
            <a href="/">Obtener más información</a>
        </ServiceCard>
    </Columns2x>

    <h3 class="centered-thin-text">Logística</h3>
    <Columns3x>
    
        <ServiceCard link="/logistica/almacenaje">
            <h1>Almacenaje 24 h</h1>
            <p>Almacenamos tu mercancía en el corazón logístico de Andalucía (Antequera). Garantizando la seguridad de la mercancía y la facilidad de su transporte.</p>
            <a href="/">Obtener más información</a>
        </ServiceCard>

        <ServiceCard link="/logistica/picking">
            <h1>Picking</h1>
            <p>Realizamos el picking de tus productos en el lugar y momento indicado. Estamos especializados en todo tipo de mercancías, cubriendo cuales sean sus necesidades.</p>
            <a href="/">Obtener más información</a>
        </ServiceCard>

        <ServiceCard link="/logistica/grupaje">
            <h1>Grupaje</h1>
            <p>Realizamos grupaje de mercancías para poder reducir costos y aumentar la eficiencia en el transporte, ya sea de forma nacional o initernacional.</p>
            <a href="/">Obtener más información</a>
        </ServiceCard>
    </Columns3x>

    <h3 class="centered-thin-text">Tipos de Mercancías:</h3>
    <Columns3x>
        <ServiceCard link="/mercancias/refrigerados">
            <h1>Refrigerados y control de temperatura.</h1>
            <p>Transportamos todo tipo de mercancías con control de temperatura requerida.</p>
            <a href="/">Obtener más información</a>
        </ServiceCard>
        <ServiceCard link="/mercancias/especiales">
            <h1>Productos frágiles o con necesidades especiales</h1>
            <p>Transportamos mercancías que requieren una atención especial debido a su tamaño, forma, peso o fragilidad.</p>
            <a href="/">Obtener más información</a>
        </ServiceCard>
        <ServiceCard link="/mercancias/lonas">
            <h1>Protección contra el medio ambiente con camiones de Lona.</h1>
            <p>Transportamos mercancías que requieren protección contra las inclemencias del tiempo, como la lluvia, la nieve y el sol.</p>
            <a href="/">Obtener más información</a>
        </ServiceCard>
    </Columns3x>
    <a class="default-button centered-button" href="/contacto">Contacta con nosotros</a>
</DefaultSection>


<DefaultSection title="¿Por qué elegir Frío Antakira?">
    <Columns2x>
        <ImageCard imageUrl="/assets/images/sunshine.webp">
        </ImageCard>
        <ListCard>
            <h2>Valores</h2>
            <ul>
                <li>Cuidamos de nuestros clientes y trabajadores.</li>
                <li>Garantizamos un servicio de calidad.</li>
                <li>Generamos confianza mediante la transparencia.</li>
                <li>Contribuimos a la sociedad preservando el medio ambiente.</li>
                <li>Aseguramos la igualdad de oportunidades.</li>
            </ul>
        </ListCard>

        {#if isMobile}
            <ImageCard imageUrl="/assets/images/camionsoldefondo.jpeg">
            </ImageCard>
            <ListCard>
                <h2>Misión</h2>
                <ul>
                    <li>Transportar tus mercancías al lugar que necesites, en el momento que necesites, con los cuidados que requieras.</li>
                    <li>Ofrecer un servicio de calidad adaptado a las necesidad específica de cada cliente.</li>
                    <li>Proporcionar los más altos estándares de calidad y seguridad en el transporte.</li>
                </ul>
            </ListCard>
        {:else}
            <ListCard>
                <h2>Misión</h2>
                <ul>
                    <li>Transportar tus mercancías al lugar que necesites, en el momento que necesites, con los cuidados que requieras.</li>
                    <li>Ofrecer un servicio de calidad adaptado a las necesidad específica de cada cliente.</li>
                    <li>Proporcionar los más altos estándares de calidad y seguridad en el transporte.</li>
                </ul>
            </ListCard>
            <ImageCard imageUrl="/assets/images/camionsoldefondo.jpeg">
            </ImageCard>
        {/if}

        <ImageCard imageUrl="/assets/images/camionesenfila.jpeg">
        </ImageCard>
        <ListCard>
            <h2>Visión</h2>
            <ul>
                <li>De Antequera al resto del mundo. Empezamos con una pequeña flota que va creciendo año a año.</li>
                <li>Contribuimos al desarrollo y al progreso social siendo medioambientalmente eficientes y sostenibles</li>
            </ul>
        </ListCard>

    </Columns2x>
    <a class="default-button centered-button" href="/contacto">Contacta con nosotros -></a>
</DefaultSection>
<Footer/>




<style>
    .centered-button {
        display: block;
        margin: 40px auto;
        text-align: center;
        width: fit-content;
    }


    .info-element {
        padding: 20px;
    }

    .info-element h1{
        font-size: 38px;
        font-weight: 600;
        padding: 10px 0;
        color: var(--dark-blue);
    }

    .info-element p {
        font-size: 18px;
        padding: 10px 0;
        color: rgb(75, 75, 75);
    }

    .video-container {
        width: 100%;
        width: calc(100% - 20px);
        padding: 10px;
        aspect-ratio: 16/9;
    }

    iframe {
        width: 100%;
        aspect-ratio: 16/9;
        border-radius: 8px;
    }
</style>