type Getters<S, Keys extends string> = {
  [Key in Keys]: (state: S) => any
}

type Mutations<S, G, Keys extends string> = {
  [Key in Keys]: (state: S, getters: G) => any
}

interface Options<S, GK extends string, MK extends string, G extends Getters<S, GK> = Getters<S, GK>> {
  state: S
  getters: G
  mutations: Mutations<S, G, MK>
}

function createStore<S, GK extends string, MK extends string>(options: Options<S, GK, MK>) {
  return options
}

const ret = createStore({
  state: {
    count: 0,
  },
  getters: {
    isOdd: state => {
      return state.count % 2 === 1
    },
  },
  mutations: {
    incrementIfOdd: (_state, getters) => {
      getters.isOdd
    },
  },
})

function fn<FO extends Record<any, any>>(
  foo: FO,
  bar: {
    [P in keyof FO]: FO[P]
  },
) {
  return { foo, bar }
}

const returned = fn(
  {
    baz() {
      return false
    },
  },
  {
    baz() {
      return false
    },
  },
)

returned.bar.baz
