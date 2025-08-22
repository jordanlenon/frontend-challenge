import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/styles/main.scss'

// Create app
const app = createApp(App)

// Components
import Icon from './components/base/Icon.vue'
import Card from './components/base/Card.vue'
import Chip from './components/base/Chip.vue'

// Register components
app.component('icon', Icon)
app.component('card', Card)
app.component('chip', Chip)

// Mount app
app.mount('#app')
