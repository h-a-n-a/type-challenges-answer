import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<TrimLeft<'str'>, 'str'>>,
  Expect<Equal<TrimLeft<' str'>, 'str'>>,
  Expect<Equal<TrimLeft<'     str'>, 'str'>>,
  Expect<Equal<TrimLeft<'     str     '>, 'str     '>>,
  Expect<Equal<TrimLeft<'   \n\t foo bar '>, 'foo bar '>>,
]

// answer

type TrimLeft<T extends string> = 
  T extends `${infer U}${infer P}` ? 
    U extends " " | "\n" | "\t" ? 
      TrimLeft<P> :
    `${U}${P}` :
  never;
