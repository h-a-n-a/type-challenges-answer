import { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<OptionalKeys<{ a: number, b?: string }>, "b">>,
    Expect<Equal<OptionalKeys<{ a: undefined, b?: undefined }>, "b">>,
    Expect<Equal<OptionalKeys<{ a: undefined, b?: undefined, c?: string, d?: null }>, "b" | "c" | "d">>,
    Expect<Equal<OptionalKeys<{}>, never>>
]


// answer

type OptionalKeys<T extends object> = Exclude<{
    [K in keyof T]: Pick<T, K> extends Required<Pick<T, K>> ? never : K
}[keyof T], undefined>