<script>
    export let link;
    import { base } from "$app/paths";

</script>

<a href="{base + link}" class="service-card">
    <slot>
        <h1>Servicio</h1>
        <p>Descripción de Servicio</p>
        <a href="/">Link al servicio</a>
    </slot>
</a>

<style>
    .service-card {
        padding: 40px;
        border-radius: 4px;
        background-color: white;
        text-decoration: none;
        min-width: 200px;
        min-height: 200px;
        max-width: 100%;
        cursor: pointer;
        transition: .4s;
        border: 1px solid var(--default-blue);
    }
    .service-card:hover{
        background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(238, 252, 255, 1) 100%);
        font-weight: normal;
        box-shadow: 10px 0 40px 0 rgba(0, 8, 79, 0.2);
    }
</style>