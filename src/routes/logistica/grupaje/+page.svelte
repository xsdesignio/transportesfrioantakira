<script>
    import { onMount } from 'svelte';
    import Footer from '../../../components/footers/Footer.svelte';
    import Header from '../../../components/header/Header.svelte';
    import ImageHero from '../../../components/hero/ImageHero.svelte';
    import TextSection from '../../../components/sections/TextSection.svelte';

    import { animate } from '../../../utils/animations.js';

    onMount(() => {
        animate()
    })

</script>

<Header></Header>
<ImageHero
    title='Realizamos Grupaje que permite optimizar los recursos y reducir los costos de transporte.'
    description='Llegamos a todos los puntos de España y varios países de Europa, con rutas personalizadas que garantizan la eficacia, el buen servicio y una respuesta dinámica e inmediata adaptada a las necesidades de cada cliente.'
    buttonText='Contacta con nosotros'
    buttonUrl='/contacto'
    imageUrl='/assets/images/logoencamion.jpeg'
>
</ImageHero>
<TextSection
    title="Descubre en más detalle nuestro servicio de recogida y/o grupaje de mercancías.">
    <p>
        Nuestro servicio de grupaje es una solución eficiente y económica para el transporte de mercancías de pequeñas y medianas empresas, que necesitan enviar cargas parciales a diferentes destinos. Con este servicio, agrupamos la carga con otras mercancías de otros clientes en un solo camión, lo que reduce los costos de envío y mejora la eficiencia del transporte.
    </p>
    <p>
        Ya sea que necesite transporte de cargas completas o parciales, transporte en condiciones de temperatura controlada, transporte de carga peligrosa, transporte de productos alimenticios, entre otros, estamos listos para ayudarlo.
    </p>
    <p>
        En Transportes Frío Antakira contamos con un servicio de grupaje de alta calidad, donde ofrecemos una solución rentable y fiable para el envío de cargas parciales. Con nuestra amplia red de destinos, podemos recoger y entregar su carga en cualquier lugar de forma segura y eficiente.
    </p>
    <p>
        Además, contamos con un excelente servicio de atención al cliente, lo que significa que siempre estamos disponibles para responder a sus preguntas y preocupaciones. Nos aseguramos de mantener una comunicación clara y transparente contigo en todo momento, para que te sientas seguro y tranquilo durante todo el proceso de envío.</p>
    <p>
        No dude en contactar con nosotros para obtener un presupuesto de forma gratuita.
    </p>
    
    <a class="default-button centered-button" href="/contacto">Contacta con nosotros -></a>
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