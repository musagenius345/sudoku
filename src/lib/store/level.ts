
import { persisted } from "svelte-persisted-store";

// Define the levels array
export const levels = ['easy', 'medium', 'hard', 'very-hard', 'insane', 'inhumane'] as const;

// Create a type for the union of level strings
export type Level = typeof levels[number];

// Use the level type in the persisted store
export const selectedLevel = persisted<Level>('selectedLevel', 'easy');

