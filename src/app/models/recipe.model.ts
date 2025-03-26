export interface Recipe {
  id: string
  name: string
  description: string
  image: string
  rating: number
  time: number
  calories: number
  netCarbs: number
  protein: number
  fat: number
  categories: string[]
  difficulty: string
  area: string
  ingredients: string[]
  instructions: string[]
}

