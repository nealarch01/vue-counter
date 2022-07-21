import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

createApp(<any>App).mount('#app') // Typecast "any" type to disable error message
