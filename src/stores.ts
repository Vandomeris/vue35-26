import { reactive } from 'vue'
import type { Product } from './types/types'

interface Favourites {
  list: Product[]
  toggle: (product: Product) => void
}

export const favourites = reactive<Favourites>({
  list: [],
  toggle(product) {
    const index = this.list.findIndex((item) => item.id === product.id)

    if (index === -1) {
      this.list.push(product)
    } else {
      this.list.splice(index, 1)
    }
  },
})
