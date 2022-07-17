import { observable } from 'mobx'
import { createContext, useContext } from 'react'

interface WordsStore {
  today: string
}

export type StoreType = {
  words: WordsStore;
};

export const defaultStore: StoreType = observable({
  words: {
    today: 'hello world!'
  }
})

export const StoreContext = createContext<StoreType>(defaultStore)
export const useStore = (): StoreType => useContext(StoreContext)
