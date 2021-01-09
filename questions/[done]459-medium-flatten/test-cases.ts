import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Flatten<[]>, []>>,
  Expect<Equal<Flatten<[1, 2, 3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<Flatten<[1, [2]]>, [1, 2]>>,
  Expect<Equal<Flatten<[1, 2, [3, 4], [[5]]]>, [1, 2, 3, 4, 5]>>,
  Expect<Equal<Flatten<[{foo: 'bar'; 2: 10}, 'foobar']>, [{foo: 'bar'; 2: 10}, 'foobar']>>,
]

// answer

type Flatten<T extends Array<any>> = T extends [infer P, ...infer U] ? P extends Array<any> ? [...Flatten<P>, ...Flatten<U>]: [P, ...Flatten<U>] : []
