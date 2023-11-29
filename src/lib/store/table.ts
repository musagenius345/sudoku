import {  get } from 'svelte/store';
import SudokuToolCollection from '../../sudokujs/src/main'
import { persisted } from "svelte-persisted-store";


// Define the levels array
export const levels = ['easy', 'medium', 'hard', 'very-hard', 'insane', 'inhumane'] as const;

// Create a type for the union of level strings
export type Level = typeof levels[number];
export type Table = string;



export const selectedLevel = persisted<Level>('selectedLevel', 'easy');

export function createTable(){
  const sudoku = SudokuToolCollection()
  // let chosenLevel = derived(selectedLevel, () => selectedLevel)
  const table = persisted('sudoku-table-MB', sudoku.generator.generate(get(selectedLevel)))
  const solution = sudoku.solver.solve(get(table))
  const solvedTable = persisted('solvedTable', solution)

  function resetGame(){
    table.set(sudoku.generator.generate((get(selectedLevel))))
  }
 return {
    table,
    solvedTable,
    resetGame
    }

}
