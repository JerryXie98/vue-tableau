<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Tableau :url="url" :options="options"></Tableau>
  </div>
</template>

<script>
// import Tableau from './components/Tableau.vue'
// import Tableau from 'vue-tableau'

export default {
  name: 'app',
  data () {
    return {
      scriptUrl: 'https://public.tableau.com/javascripts/api/tableau-2.min.js',
      url: 'http://public.tableau.com/views/RegionalSampleWorkbook/Storms',
      options: {
        hideTabs: true
      }
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
