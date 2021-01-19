import { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<RequiredKeys<{ a: number, b?: string }>, "a">>,
    Expect<Equal<RequiredKeys<{ a: undefined, b?: undefined }>, "a">>,
    Expect<Equal<RequiredKeys<{ a: undefined, b?: undefined, c: string, d: null }>, "a" | "c" | "d">>,
    Expect<Equal<RequiredKeys<{}>, never>>
]


// answer

type TypeEqual<A, B> = (<T>() => T extends A ? 1 : 2 ) extends (<T>() => T extends B ? 1 : 2) ? true : false
type RequiredKeys<T extends object> = Exclude<{
    [K in keyof T]: TypeEqual<Pick<T, K>, Required<Pick<T, K>>> extends true ? K : never
}[keyof T], undefined>