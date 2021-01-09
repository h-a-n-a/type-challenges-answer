import { Alike, Expect, MergeInsertions } from '@type-challenges/utils'

type cases = [
  Expect<Alike<MyReadonly2<Todo1>, Readonly<Todo1>>>,
  Expect<Alike<MyReadonly2<Todo1, 'title' | 'description'>, Expected>>,
  Expect<Alike<MyReadonly2<Todo2, 'title' | 'description'>, Expected>>,
]

interface Todo1 {
  title: string
  description?: string
  completed: boolean
}

interface Todo2 {
  readonly title: string
  description?: string
  completed: boolean
}

interface Expected {
  readonly title: string
  readonly description?: string
  completed: boolean
}

// answer

type MyReadonly2<T, U extends keyof T = keyof T> = {
  readonly [K in U]: T[K]
} & {
  [K in keyof T]: T[K] // copy original readonlys
}

type Test = MyReadonly2<Todo1, 'title' | 'description'>