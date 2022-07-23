import { createApp } from 'vue'
import { firebaseAuth } from '@/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import App from './App.vue'
import router from './router'
import store from './store'

let app: unknown
onAuthStateChanged(firebaseAuth, () => {
  if (!app) {
    app = createApp(App)
      .use(store)
      .use(router)
      .mount('#app')
  }
})
