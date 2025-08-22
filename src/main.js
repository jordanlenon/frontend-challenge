import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/styles/main.scss'
import router from './router'
import { vTooltip } from 'floating-vue'


// Create app
const app = createApp(App)

// Components
import Icon from './components/base/Icon.vue'
import Card from './components/base/Card.vue'
import Chip from './components/base/Chip.vue'
import LoadingBox from './components/base/LoadingBox.vue'
import Alert from './components/base/Alert.vue'

// Register components
app.component('icon', Icon)
app.component('card', Card)
app.component('chip', Chip)
app.component('loadingBox', LoadingBox)
app.component('alert', Alert)
app.directive('tooltip', vTooltip)

// Router
app.use(router)

// Mount app
app.mount('#app')
