import { Equal, Expect, ExpectFalse, NotEqual, MergeInsertions } from '@type-challenges/utils'

type Foo = {
  a: number;
  b: string;
};
type Bar = {
  b: number;
};

type cases = [
  Expect<Equal<Merge<Foo, Bar>, {
	a: number;
	b: number;
  }>>
]

// answer

type Merge<T extends object, U extends object> = MergeInsertions<Pick<T, Exclude<keyof T, keyof U>> & U>
