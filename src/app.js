import Vue from 'vue'
import AppComponent from './components/AppComponent.vue'

import '../assets/app.css'

new Vue({
   render: h => h(AppComponent)
 }).$mount('#app')