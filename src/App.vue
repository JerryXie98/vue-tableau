<template>
  <div id="app">
    <img src="./assets/logo.png">
    <button @click="testFilters">Change Filters</button>
    <button @click="testSize">Change Size</button>
    <button @click="testExport">Export PDF</button>
    <Tableau :url="url" :height="height" :width="width" :filters="filters" ref="tableau"></Tableau>
  </div>
</template>

<script>
import Tableau from './components/Tableau.vue'
// import Tableau from 'vue-tableau'

export default {
  name: 'app',
  components: {
    Tableau
  },
  methods: {
    testSize () {
      this.height = 500,
      this.width = 500
    },
    testFilters () {
      this.filters = {}
    },
    testExport () {
      this.$refs.tableau.viz.showExportPDFDialog()
    }
  },
  data () {
    return {
      url: 'http://public.tableau.com/views/RegionalSampleWorkbook/Storms',
      filters: {
        'Storm Name': ['CELIA', 'BLAS', 'AGATHA'],
        'Basin': 'East Pacific'
      },
      height: 1000,
      width: 1000
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
