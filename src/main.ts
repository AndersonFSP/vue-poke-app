import { createApp } from 'vue'
import { firebaseAuth } from '@/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
// import { store, key} from './store'

let app: unknown
onAuthStateChanged(firebaseAuth, () => {
  if (!app) {
    app = createApp(App)
      // .use(store, key)
      .use(createPinia())
      .use(router)
      .mount('#app')
  }
})
