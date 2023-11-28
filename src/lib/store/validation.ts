import { persisted } from "svelte-persisted-store";
export const intialData = {
  stepOne: {
    name: true,
    email: true,
    phoneNumber: true
  },
  stepTwo: false,
}
export const validateForm = persisted('validate-MSF', intialData)
