import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [{
    name: "Books",
    path: "/",
    component: () => import("@/components/BooksList.vue")
  },
  {
    name: "Book",
    path: "/books/:id(\\d+)",
    component: () => import("@/components/BookPage.vue")
  },
  {
    name: "BookCreate",
    path: "/books/create",
    component: () => import("@/components/BookCreate.vue")
  },
  {
    name: "BookEditor",
    path: "/books/:id(\\d+)/editor",
    component: () => import("@/components/BookEditor.vue")
  },
  {
    name: "ErrorPage",
    path: "/:pathMatch(.*)*",
    component: () => import("@/components/ErrorPage.vue")
  },
] 
})

const pinia = createPinia()

const app = createApp(App)
app.use(router).use(pinia).mount('#app')
