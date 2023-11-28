import { writable } from "svelte/store"

type StepOne = {
    name?: string,
    email?: string,
    number?: string,
}

// type StepTwo = {}

type Steps = 1 | 2 | 3 | 4 

type StepTwo = {

}

export const data = writable({
   1: {
    name: null,
    email: null,
    number: null
  },
   2: {

  },
   3: {

  },
   4: {

  }
})



