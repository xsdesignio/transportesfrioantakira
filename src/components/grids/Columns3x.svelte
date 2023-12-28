<script>
    
</script>

<div class="grid animate">
    <slot>
    </slot>
</div>

<style>
    .grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        place-items: top;
        gap: 20px;
        margin: 20px 0;
    }


    @media screen and (max-width: 767px) {
        .grid {
            grid-template-columns: 1fr;
        }
    }
</style>