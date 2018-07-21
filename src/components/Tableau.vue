<template>
    <div class="tableau">
    </div>
</template>

<script>
export default {
    name: 'Tableau',
    props: ['url', 'options'],
    data () {
        return {
            viz: {}
        }
    },
    mounted () {
        const containerDiv = document.getElementById("vizContainer")
        this.viz = new window.tableau.Viz(containerDiv, this.url, this.options)
    },
    beforeDestroy () {
        this.viz.dispose
    }
}
</script>