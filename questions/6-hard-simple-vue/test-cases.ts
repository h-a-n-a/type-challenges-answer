
import { Equal, Expect } from '@type-challenges/utils'

SimpleVue({
  data() {
    // @ts-expect-error
    this.firstname
    // @ts-expect-error
    this.getRandom()
    // @ts-expect-error
    this.data()

    return {
      firstname: 'Type',
      lastname: 'Challenges',
      amount: 10,
    }
  },
  computed: {
    fullname() {
      return `${this.firstname} ${this.lastname}`
    },
  },
  methods: {
    getRandom() {
      return Math.random()
    },
    hi() {
      this.fullname.toLowerCase()
      this.getRandom()
    },
    test() {
      const fullname = this.fullname
      const cases: [
        Expect<Equal<typeof fullname, string>>,
      ] = [] as any
    },
  },
})

// answer
type ToReturnType<T> = {
  [K in keyof T]: T[K] extends (...args: any[]) => infer U ? U : any;
}

type Options<T, U, P> = {
  data: () => T,
  computed: U & ThisType<T & ToReturnType<U> & P>,
  methods: P & ThisType<T & ToReturnType<U> & P>
} & ThisType<{}>

declare function SimpleVue<T, U, P>(options: Options<T, U, P>): any