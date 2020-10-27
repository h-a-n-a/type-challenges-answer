import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Expected1, MyOmit<Todo, 'description'>>>,
  Expect<Equal<Expected2, MyOmit<Todo, 'description' | 'completed'>>>
]

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
  completed: boolean
}

interface Expected2 {
  title: string
}

// answer

type MyExtract<T, U> = T extends U ? never : T;

type MyOmit<T, U extends keyof T> = {
  [K in MyExtract<keyof T, U>]: T[K]
}