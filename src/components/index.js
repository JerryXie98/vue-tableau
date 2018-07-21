import Vue from 'vue';
import Tableau from './Tableau.vue'

const Components = {
  Tableau
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;
