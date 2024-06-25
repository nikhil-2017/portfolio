import 'primevue/resources/themes/lara-light-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import '/node_modules/primeflex/primeflex.css'
import 'primeicons/primeicons.css'
import './assets/css/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'

import App from './App.vue'
import router from './router'

// PrimeVue Components
import Card from 'primevue/card'

import Tooltip from 'primevue/tooltip'

const renderApp = () => {
  createApp(App)
    .use(createPinia())
    .use(router)
    .use(PrimeVue)

    //
    .component('Card', Card)

    .directive('tooltip', Tooltip)

    .mount('#app')
}

renderApp()
