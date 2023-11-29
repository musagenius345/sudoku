import { derived, get } from 'svelte/store';
import SudokuToolCollection from '../../sudokujs/src/main.ts'
import { persisted } from "svelte-persisted-store";


// Define the levels array
export const levels = ['easy', 'medium', 'hard', 'very-hard', 'insane', 'inhumane'] as const;

// Create a type for the union of level strings
export type Level = typeof levels[number];
export type Table = string[][];



export const selectedLevel = persisted<Level>('selectedLevel', 'easy');

export function createTable(){
  const sudoku = SudokuToolCollection()
  // let chosenLevel = derived(selectedLevel, () => selectedLevel)
  const table = persisted<Table>('sudoku-table-MB', sudoku.generator.generate(get(selectedLevel)))

 return {
    table
    }

}
