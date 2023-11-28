
import { persisted } from 'svelte-persisted-store';

export const initialOptionState = [
  { id: 1, heading: 'Arcade', price: 9, yearlyPrice: 90, src: '/images/icon-arcade.svg', active: false },
  { id: 2, heading: 'Advanced', price: 12, yearlyPrice: 120, src: '/images/icon-advanced.svg', active: false },
  { id: 3, heading: 'Pro', price: 15, yearlyPrice: 150, src: '/images/icon-pro.svg', active: false }
]

export const optionsStore = persisted('selectedOptions', initialOptionState);

export let period = persisted('MultiStep-MSF','mo')


// export const getPrice = (price: number) => period === 'mo' ? price : yearlyPrice
