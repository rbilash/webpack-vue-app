/* libs and dependencies */
import Vue from 'vue'

/* app components and dependencies */
import AppComponent from './components/AppComponent.vue'
import store from './store'

/* styles, fonts etc. */
import './assets/app.scss'

/* render main component and mount to the DOM */
new Vue({
    store,
    render: h => h(AppComponent)
}).$mount('#app')