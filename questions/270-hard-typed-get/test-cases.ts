import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Get<Data, 'hello'>, 'world'>>,
  Expect<Equal<Get<Data, 'foo.bar.count'>, 6>>,
  Expect<Equal<Get<Data, 'foo.bar'>, { value: 'foobar', count: 6 }>>,

  Expect<Equal<Get<Data, 'no.existed'>, never>>,
]

type Data = {
  foo: {
    bar: {
      value: 'foobar',
      count: 6,
    },
    included: true,
  },
  hello: 'world'
}


// answer

type ParseLeft<T> = 
  T extends `${infer U}${infer P}` ? 
    U extends "" | "." ? 
      "" :
    `${U}${ParseLeft<P>}` :
  T;

type ParseRawRight<Right> = 
  Right extends `${infer RightLeft}${infer RightRight}` ? 
    RightLeft extends "." ?
      RightRight :
    null :
  null;
  

type ParseRight<T, Left extends string> = 
  T extends `${Left}${infer Right}` ? 
    ParseRawRight<Right> :
  null;

type ParseValue<T extends object, K extends string> = T[ParseLeft<K>]

// type Get<T extends object, K extends string> = 
  
