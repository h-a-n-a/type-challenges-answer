import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<'title', GetReadonlyKeys<Todo1>>>,
  Expect<Equal<'title' | 'description', GetReadonlyKeys<Todo2>>>,
]

interface Todo1 {
  readonly title: string
  description: string
  completed: boolean
}

interface Todo2 {
  readonly title: string
  readonly description: string
  completed?: boolean
}

// answer

type GetReadonlyKeys<T> = {
  [K in keyof T]: Equal<Pick<T, K>, { -readonly [Key in K]: T[Key] }> extends true ? never : K;
}[keyof T]
