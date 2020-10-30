import { Alike, Expect } from '@type-challenges/utils'

declare const a: Chainable

const result = a
  .option('foo', 123)
  .option('bar', { value: 'Hello World' })
  .option('name', 'type-challenges')
  .get()

type cases = [
  Expect<Alike<typeof result, Expected>>
]

type Expected = {
  foo: number
  bar: {
    value: string
  }
  name: string
}

// answer

type Chainable<T = {}> = {
  option<A extends string, B>(key: A, value: B): Chainable<{ [K in A]: B } & T>
  get(): T
}