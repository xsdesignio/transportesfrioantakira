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
    title='Realizamos Picking (recogida) y transporte de todo tipo de mercancías.'
    description='Nuestro equipo de profesionales altamente capacitados asegura que su mercancía sea recogida y entregada en el lugar y momento adecuados, con los requerimientos necesarios, con cuidado y atención en tu mercancía durante todo el trayecto.'
    buttonText='Contacta con nosotros'
    buttonUrl='/contacto'
    imageUrl='/assets/images/picking.jpg'
>
</ImageHero>
<TextSection
    title="Descubre nuestro servicio de Picking y Recogida en más detalle.">
    <p>
        Nos encargamos de todo el proceso de transporte, desde la recolección hasta la entrega, lo que le permite concentrarse en su negocio y actividades principales. Contamos con varios años de experiencia realizando el picking y la entrega de tus mercancías por toda España y parte de Eeuropa-
    </p>
    <p>   
        No importa cuál sea el tamaño o la complejidad de su envío, nuestro servicio de Picking y Recogida está diseñado para satisfacer sus necesidades específicas de transporte. Ya sea que necesite un envío urgente o una entrega programada, estamos listos para ayudarlo.
    </p>
    <p>
        Contacta con nosotros hoy mismo y descubre cómo nuestros servicios pueden ayudarte en el transporte de mercancías que necesita su negocio.
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