<script>
    export let title;
    export let background_color;
</script>


<section style="background-color: {background_color};">
    <div class="section-content">
        <h1 class="animate">{ title }</h1>
        <slot>

        </slot>
    </div>
    
</section>


<style>
    .section-content {
        max-width: 900px;
        margin: 10px auto;
        padding: 80px 10px;
    }

    .section-content h1 {
        padding: 0 0 0 40px;
        border-left: 2px solid var(--default-blue);
        color: var(--dark-blue);
        font-size: 42px;
        font-weight: 800;
        max-width: 800px;
        margin-bottom: 80px;
    }


    @media screen and (max-width: 767px) {
        .section-content h1 {
            padding: 0 0 0 20px !important;
        } 
    }

</style>