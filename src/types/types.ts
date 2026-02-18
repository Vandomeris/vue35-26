export interface EditingInput {
  id: number
  text: string
}

export interface Todo {
  id: number
  title: string
  completed: boolean
}

export interface Product {
  id: string
  title: string
  category: string
  price: number
  oldPrice: number
  brand: string
  inStock: boolean
  rating: number
  description: string
  image: string
}
