<script>
    import { onMount } from 'svelte';
    import Footer from '../../../components/footers/Footer.svelte';
    import Header from '../../../components/header/Header.svelte';
    import ImageHero from '../../../components/hero/ImageHero.svelte';
    import TextSection from '../../../components/sections/TextSection.svelte';
    import Columns2x from '../../../components/grids/Columns2x.svelte';
    import Card from '../../../components/cards/Card.svelte';

    import { base } from "$app/paths"
    import { animate } from '../../../utils/animations.js';

    onMount(() => {
        animate()
    })

</script>

<Header></Header>
<ImageHero
    title='¿Necesita Almacenar su mercancía?'
    description='Transportes Frio Antakira es su solución.
    Situados estratégicamente en el corazón logístico de Andalucía, en Antequera,
    ofrecemos acceso fácil y una excepcional agilidad en el transporte.'
    buttonText='Contacta con nosotros'
    buttonUrl='/contacto'
    imageUrl='/assets/images/camionesenfila.jpeg'
>
</ImageHero>
<TextSection
    title="Descubre en más detalle nuestros servicios de Logística Integral.">
    <p>
        ¿Necesita almacenar su mercancía? Transportes frio Antakira es su solución. 
    </p>
    <p>
        <b>Situados estratégicamente en el corazón logístico de Andalucía, en Antequera</b>,
        ofrecemos acceso fácil y una excepcional agilidad en el transporte.
    </p>

    <h2>
        Nuestros Servicios de Logística Incluyen:
    </h2>

    <Columns2x>
        <Card link="/logistica/almacenaje">
            <h3>
                Almacenamiento Seguro
            </h3>
            <p>
                Nuestras instalaciones están perfectamente
                acondicionadas para la carga y descarga eficiente de vehículos,
                proporcionando un espacio seguro para su mercancía.
            </p>
        </Card>

        <Card link="/logistica/almacenaje">
            <h3>
                Distribución Eficiente
            </h3>
            <p>
                Ofrecemos servicios de recogida, almacenaje y
                distribución. Con control de stocks en tiempo real, almacenamos sus
                productos en estanterías o palets completos/semi-palets, preparados para su
                envío.
            </p>
        </Card>

        <Card link="/logistica/almacenaje">
            <h3>
                Optimización de Cargas
            </h3>
            <p>
                Nuestros expertos se encargan de la repaletización
                y preparación de picking, garantizando una distribución precisa y sin
                inconvenientes.
            </p>
        </Card>

        <Card link="/logistica/almacenaje">
            <h3>
                Gestión Integral
            </h3>
            <p>
                Desde la eliminación de bultos dañados hasta la reparación
                de palets, gestionamos todas las incidencias. Controlamos stocks, entregas,
                etiquetado y aspecto para asegurar la integridad de su mercancía.
            </p>
        </Card>
    </Columns2x>

    <h2>Servicio Personalizado: </h2>
    <p>
        Nos enorgullecemos de ofrecer un <b>servicio altamente personalizado</b>. Estamos listos
        para adaptarnos a sus necesidades específicas. Si requiere servicios adicionales o
        tiene dudas concretas, no dude en ponerse en contacto con nosotros. Estamos aquí para satisfacer sus 
        necesidades de almacenamiento y distribución de manera <b>confiable y eficiente</b>.
    </p>
    <p>
        En Transportes Frío Antakira, su mercancía es nuestra prioridad. Confíe en nosotros
        para cuidar de sus productos con el máximo cuidado y profesionalismo.
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

    h2 {
        margin-top: 60px;
    }

    h3 {
        padding-bottom: 10px;
        font-weight: bold;
    }
    p {
        margin: 15px 0;
    }

</style>