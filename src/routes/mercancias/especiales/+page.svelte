<script>
    import Footer from '../../../components/footers/Footer.svelte';
    import Header from '../../../components/header/Header.svelte';
    import ImageHero from '../../../components/hero/ImageHero.svelte';
    import TextSection from '../../../components/sections/TextSection.svelte';

</script>

<svelte:head>
    <title>Transporte de mercancías con requerimientos especiales - FRIO ANTAKIRA</title>
    <meta name="description" content="
    Transportamos tus mercancías con requerimientos especiales, de forma segura y eficaz gracias a nuestro personal altamente cualificado y nuestros camiones preparados para todo tipo de mercancías."
    />
</svelte:head>

<Header></Header>
<ImageHero
    title='Transporte de mercancías con requerimientos especiales'
    description='Transportamos tus mercancías con requerimientos especiales, de forma segura y eficaz gracias a nuestro personal altamente cualificado y nuestros camiones preparados para todo tipo de mercancías.'
    buttonText='Contacta con nosotros'
    buttonUrl='/contacto'
    imageUrl='/assets/images/camionatardecer.jpeg'
>
</ImageHero>
<TextSection
    title="Camiones especializados para cuidar la integridad de tu mercancía durante todo el trayecto.">
    <p>
        Si está buscando una solución de transporte de mercancías que se adapte a sus necesidades específicas, ha venido al lugar correcto. Contamos con una <b>amplia flota de vehículos de transporte</b>, que incluyen camiones con lona o taulinier y camiones frigoríficos, entre otros.
    </p>
    <p>
        Nuestros <b>conductores altamente capacitados</b> tienen años de experiencia en el transporte de mercancías que requieren un cuidado especial, por lo que puede estar seguro de que su carga estará en buenas manos. Además, utilizamos tecnología avanzada para garantizar la seguridad y la puntualidad en la entrega de sus mercancías.
    </p>
    <p>
        Ofrecemos servicios de transporte tanto para empresas como para particulares, y estamos comprometidos con brindar un servicio personalizado que se adapte a sus necesidades específicas.
    </p>
    <p>
        Si necesita una solución de transporte para su negocio, cuente con nosotros, contáctenos hoy mismo y obtén más información sobre los servicios que tenemos para cubrir tu caso específico. Estamos disponibles para responder a cualquier pregunta que pueda tener y para proporcionarle una cotización personalizada para su proyecto. ¡Permítanos mostrarle cómo podemos hacer que su transporte de mercancías sea una experiencia sin problemas!
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