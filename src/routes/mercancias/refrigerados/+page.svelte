<script>
    import Footer from '../../../components/footers/Footer.svelte';
    import Header from '../../../components/header/Header.svelte';
    import ImageHero from '../../../components/hero/ImageHero.svelte';
    import TextSection from '../../../components/sections/TextSection.svelte';

</script>


<svelte:head>
    <title>Transporte de mercancías y alimentos con temperatura controlada - FRIO ANTAKIRA</title>
    <meta name="description" content="
    Nos especializamos en transportar tus mercancías con necesidades específicas de
    temperatura, con un equipo altamente cualificado y una flota de camiones especialmente equipados.
    "
    />
</svelte:head>



<Header></Header>
<ImageHero
    title='Transporte de mercancías y alimentos con temperatura controlada'
    description='Nos especializamos en transportar tus mercancías con necesidades específicas de
    temperatura, con un equipo altamente cualificado y una flota de camiones especialmente equipados.'
    buttonText='Contacta con nosotros'
    buttonUrl='/contacto'
    imageUrl='/assets/images/Horticultura.webp'
>
</ImageHero>
<TextSection
    title="Descubre en detalle nuestro servicio de Transporte con temperatura controlada.">
    <p>
        Nuestro servicio de transporte de alimentos y mercancías con temperatura controlada es la solución perfecta para garantizar la calidad de sus productos durante todo el proceso de envío. Nos enorgullece ofrecer un servicio de transporte de alta calidad que cumple con los más altos estándares de seguridad y calidad.
    </p>
    <p>
        Realizamos transportes de <b>todo tipo de mercancías con temperatura controlada</b>. Contamos con vehículos modernos equipados con la <b>última tecnología de refrigeración y monitoreo</b> de temperatura para asegurarnos de que su carga llegue en perfectas condiciones.
    </p>
    <p>
        Además, nos aseguramos de que el transporte sea  <b>seguro y eficiente, cumpliendo con todas las regulaciones y normativas necesarias</b>. Esto significa que puede confiar en nosotros para llevar sus productos a cualquier lugar en el mundo de manera segura y oportuna.
    </p>
    <p>
        No importa el tipo de carga que necesite enviar, ya sea alimentos frescos, como
        conservas o cualquier otra mercancía que requiera un control de temperatura, Transportes Frío Antakira es la mejor opción.
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