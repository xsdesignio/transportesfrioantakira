<script>
    import Card from "../../components/cards/Card.svelte";
import ImageCard from "../../components/cards/ImageCard.svelte";
    import Footer from "../../components/footers/Footer.svelte";
    import Contact from "../../components/forms/Contact.svelte";
    import Columns2x from "../../components/grids/Columns2x.svelte";
    import Header from "../../components/header/Header.svelte";
    import DefaultSection from "../../components/sections/DefaultSection.svelte";
    import TextSection from "../../components/sections/TextSection.svelte";

</script>

<Header></Header>
<DefaultSection title="Contacta con nuestro equipo">
    <Columns2x>
        <Contact></Contact>
        <ImageCard imageUrl="/assets/images/camiones.jpeg"></ImageCard>
    </Columns2x>
</DefaultSection>

<TextSection title="O utiliza cualquiera de los siguientes canales:">
    <Columns2x>

        <Card>
            <h4>Teléfonos</h4>
            <p>
                <b>952 701 607</b> (Administración)
                <br>
                <br>
                <b>607 941 311</b> (Logística)
                <br>
                <br>
                <b>615 324 699</b> (Emergencias 24h)
            </p>
        </Card>

        <Card>
            <h4>Dirección</h4>
            <p>
                Oficinas -> 
                    <a href="https://www.google.com/maps/place/C.+Taza,+11,+29200+Antequera,+M%C3%A1laga/@37.0220246,-4.5610362,17z/data=!3m1!4b1!4m6!3m5!1s0xd728fe18c9b4f8b:0x41bfea017e78036c!8m2!3d37.0220246!4d-4.5610362!16s%2Fg%2F11csds1cdf">
                        Calle Taza 11, Antequera (Málaga)
                    </a>
                <br>
                <br>
                Instalaciones -> 
                    <a href="https://www.google.com/maps/place/C.+Castilla+y+Leon,+3,+29200+Antequera,+M%C3%A1laga/@37.0405603,-4.5213137,17z/data=!3m1!4b1!4m6!3m5!1s0xd72857ff839e0f5:0x33398a0b862ae361!8m2!3d37.0405603!4d-4.5213137!16s%2Fg%2F11s9x87h6x">
                        Calle Castilla y León 5-7, PEAN de Antequera, Antequera (Málaga)
                    </a>
            </p>
        </Card>
    </Columns2x>
    <Card>
        <h4>Correo</h4>
        <p>
            <a href="mailto:info@transportesfrioantakira.es">administración@transportesfrioantakira.com</a>
        </p>

    </Card>

</TextSection>
<Footer></Footer>


