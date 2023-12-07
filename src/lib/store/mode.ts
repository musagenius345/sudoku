import { persisted } from "svelte-persisted-store";
export type Mode = 'EDIT' | 'DELETE' | 'UNDO' |'CHECK'
export let GAME_MODE = persisted<Mode>('sudoku-GAME_MODE-MB', 'EDIT')
