<script>
    import { base } from "$app/paths";
</script>


<form action="{base}/" method="POST" class="contact-form">
    <div>
        <h1>Explícanos tu propuesta o cualquier duda que tengas sobre nuestros servicios de transporte.</h1>
        <h2>Te responderemos lo antes posible.</h2>
    </div>
    <div>
        <label for="">Nombre</label>
        <input type="text">
    </div>
    <div>
        <label for="">Empresa</label>
        <input type="text">
    </div>
    <div>
        <label for="">Número</label>
        <input type="text">
    </div>
    <div>
        <label for="">Correo</label>
        <input type="text">
    </div>
    <div>
        <label for="">Mensaje</label>
        <textarea name="" id="" cols="30" rows="10">Escribenos con cualquier duda o propuesta.</textarea>
    </div>
    <input class="default-button" type="submit" value="Enviar">
</form>


<style>
    .contact-form {
        width: calc(100% - 80px);
        max-width: 600px;
        padding: 40px;
    }

    .contact-form > div {
        margin: 0 0 20px 0;
        display: grid;
        grid-template-rows: auto auto;
    }

    .contact-form > div h1, h2, h3 {
        color: var(--dark-blue);
    }

    .contact-form > div label {
        font-size: 18px;
        font-weight: 600;
        color: var(--dark-blue);
        margin: 10px 0;
    }

    .contact-form > div input {
        font-size: 18px;
        padding: 6px;
    }

    .contact-form > div textarea {
        font-size: 18px;
        padding: 10px;
    }

    .contact-form > input[type="submit"] {
        border: none;
        font-weight: 600;
    }
    .contact-form > input[type="submit"]:hover {
        cursor: pointer;
        font-weight: 800;
    }


</style>