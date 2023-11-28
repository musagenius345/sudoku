import { persisted } from "svelte-persisted-store";


export const intialData = {
  name: null,
  email: null,
  tel: null
}

export const personalInfo = persisted("personalInfo-MSF", intialData)







