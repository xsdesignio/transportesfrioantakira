<script>
    import { base } from "$app/paths";
</script>

<section>
    <img src="{base}/logo2.png" alt="">
    <div>
        <h3>TRANSPORTE TERRESTRE</h3>
        <ul>
            <a href="{base}/transportes/transporte-nacional">Transporte Nacional</a>
            <a href="{base}/transportes/transporte-internacional">Transporte Internacional</a>
        </ul>
    </div>
    <div>
        <h3>LOGÍSTICA</h3>
        <ul>
            <a href="{base}/logistica/almacenaje">Logística Integral</a>
            <a href="{base}/logistica/picking">Picking</a>
            <a href="{base}/logistica/grupaje">Grupaje</a>
        </ul>
    </div>

    <div>
        <h3>MERCANCÍAS</h3>
        <ul>
            <a href="{base}/mercancias/refrigerados">Multitemperatura</a>
            <a href="{base}/mercancias/especiales">Especiales</a>
            <a href="{base}/mercancias/lonas">Lonas</a>
        </ul>
    </div>
</section>

<style>
    section {
        padding: 60px 10px;
        display: grid;
        grid-template-columns: 2fr 1fr 1fr 1fr;
        gap: 20px;
        background-color: var(--default-blue);
        background: linear-gradient(140deg, var(--dark-blue), var(--default-blue));
        border-top: 1px solid var(--dark-blue);
    }

    section > img {
        place-self: center;
        width: 360px;
        max-width: 100%;
        border-radius: 16px;
    }

    section div {
        padding: 20px;
    }

    section h3 {
        margin-bottom: 20px;
        font-size: 22px;
        color: var(--light-blue);
    }

    section a {
        padding: 10px 0;
        font-size: 16px;
        display: block;
        text-decoration: None;
        color: var(--light-blue);
    }

    @media screen and (max-width: 767px) {
        section {
            grid-template-columns: 1fr;
        }
    }
</style>