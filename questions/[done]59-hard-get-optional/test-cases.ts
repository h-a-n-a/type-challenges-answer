import { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<GetOptional<{ foo: number, bar?: string }>, { bar?: string }>>,
    Expect<Equal<GetOptional<{ foo: undefined, bar?: undefined }>, { bar?: undefined }>>,
]

// answer

type GetOptionalKeys<T extends object> = {
    [K in keyof T]:  { [Key in K]?: T[K] } extends Pick<T, K> ? K : never
}[keyof T]

type GetOptional<T extends object> = Pick<T, GetOptionalKeys<T>>
