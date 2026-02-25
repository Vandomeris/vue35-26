import { createRouter, createWebHistory } from 'vue-router'
import IndexPage from './pages/IndexPage.vue'
import TodoPage from './pages/TodoPage.vue'
import ProductsPage from './pages/ProductsPage.vue'
import SingleProductPage from './pages/SingleProductPage.vue'
import CurrencyConverterPage from './pages/CurrencyConverterPage.vue'
import CartPage from './pages/CartPage.vue'

const routes = [
  { path: '/', component: IndexPage },
  { path: '/todos', component: TodoPage },
  { path: '/products', component: ProductsPage },
  { path: '/products/:id', component: SingleProductPage },
  { path: '/exchange', component: CurrencyConverterPage },
  { path: '/cart', component: CartPage },
]

export const router = createRouter({
  history: createWebHistory(),
  // routes: routes,
  routes,
})
