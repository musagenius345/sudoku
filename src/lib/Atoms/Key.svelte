<script lang='ts'>
  import {GAME_MODE} from '$store/mode'
  import { createStack } from '$store/stack'
  const {stack, resetStack,  currentKey, undoStack, prevKey} = createStack()
  export let value;
  let keyRef
  
  function handleClick(){
     $currentKey = keyRef.textContent
     $stack = [...$stack, $currentKey]
     console.log($stack)
  }

</script>
<button class='number' bind:this={keyRef} on:click={handleClick} data-value={value}>
  <slot />
</button>

<style>

  button{all: unset}
  .number{
  
  --size: 2.2rem;
 text-align: center;
  font-size: var(--step-2);
  width: var(--size);
  height: var(--size);
  padding: var(--space-3xs-2xs);
  border: 1px solid var(--original-clr);
  color: var(--original-clr);
  border-radius: 50%;

  cursor: pointer;
}

.number:is(:hover, :focus){
    --transition-time: 200ms;
   background-color: var(--choice-focus-bg);
   color: var(--choice-focus-clr);
   outline-offset: 2px;
   outline: 2px solid var(--choice-focus-bg);
  transition: all var(--transition-time) ease-in;
  }

</style>
