import { persisted } from "svelte-persisted-store"

 export const levels = ['easy', 'medium', 'hard', 'very-hard', 'insane', 'inhumane']
 export let selectedLevel = persisted('selectedLevel', 'easy')
