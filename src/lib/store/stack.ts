
import { persisted } from "svelte-persisted-store";
import { derived, get } from "svelte/store";

type Keys = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
export type Stack = Keys[] | [];

export function createStack() {
  let stack = persisted<Stack>('keystroke-stack-sudoku-MB', []);
  const currentStack = get(stack)
  let currentKey = derived(stack, () => currentStack.at(-1));
  let prevKey = derived(stack, () => currentStack.at(-2));

  const resetStack = () => stack.set([]);
  
  const addToStack = (val: Keys) => stack.update( (currentStack)  => [...currentStack, val]);

  const undoStack = () => currentStack.length > 0 ? stack.update( currentStack =>  [...currentStack.slice(0, -1)]) : console.log('End of stack')
  

  return {
    stack,
    currentKey,
    prevKey,
    resetStack,
    addToStack,
    undoStack
  };
}

