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
import SkeletonLoading from './components/base/SkeletonLoading.vue'

// Register components
app.component('Icon', Icon)
app.component('Card', Card)
app.component('Chip', Chip)
app.component('Alert', Alert)
app.component('SkeletonLoading', SkeletonLoading)
app.component('LoadingBox', LoadingBox)
app.directive('Tooltip', vTooltip)

// Router
app.use(router)

// Mount app
app.mount('#app')
