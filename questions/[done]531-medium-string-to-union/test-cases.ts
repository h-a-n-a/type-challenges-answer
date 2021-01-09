import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<StrintToUnion<"">, never>>,
  Expect<Equal<StrintToUnion<"t">, "t">>,
  Expect<Equal<StrintToUnion<"hello">, "h" | "e" | "l" | "l" | "o">>,
  Expect<Equal<StrintToUnion<"coronavirus">, "c" | "o" | "r" | "o" | "n" | "a" | "v" | "i" | "r" | "u" | "s">>,
]

// answer

type Helper<T extends string> = T extends "" ? [never] : T extends `${infer U}${infer P}` ? [U, ...Helper<P>] : [never]

// type StrintToUnion<T extends string> = Helper<T>[number];

type StrintToUnion<T extends string> = T extends `${infer U}${infer P}` ? U | StrintToUnion<P> : never;