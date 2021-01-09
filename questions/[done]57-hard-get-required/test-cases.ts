import { Equal, Expect, ExpectFalse, NotEqual } from '@type-challenges/utils'

type cases = [
    Expect<Equal<GetRequired<{ foo: number, bar?: string }>, { foo: number }>>,
    Expect<Equal<GetRequired<{ foo: undefined, bar?: undefined }>, { foo: undefined }>>,
]

// answer

type GetRequiredKeys<T extends object> = {
    [K in keyof T]: Pick<T, K> extends {
        [Key in K]-?: T[Key]
    } ? K : never;
}[keyof T]

type GetRequired<T extends object> = Pick<T, GetRequiredKeys<T>>