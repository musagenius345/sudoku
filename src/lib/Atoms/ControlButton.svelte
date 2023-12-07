<script lang='ts'>

  import {GAME_MODE} from '$store/mode' 
  import type {Mode} from '$store/mode'
  $: currentMode = false

  function currentModeAction(node: HTMLElement, mode: Mode){
    const control = (node.dataset.control).toUpperCase()
    node.addEventListener('click', highlight(mode))
    function highlight(mode){
      if(control === mode){
        currentMode = !currentMode
        console.log(currentMode)
      } else {
        currentMode = false
      }
    }

    return {
      update(mode)  {
         node.addEventListener('click', highlight(mode))
      }
    }

  }


  function handleControls(e){
    const control = e.currentTarget.dataset.control
    switch (control) {
    case 'delete':
      $GAME_MODE = 'DELETE'
      break;
    case 'undo':
      $GAME_MODE = 'UNDO'
      break;
    case 'check':
      $GAME_MODE = 'CHECK'
      break;
    case 'edit':
      $GAME_MODE = 'EDIT'
      break;
    default:
      $GAME_MODE = null
      break;
   } 
  }

  export let control = null
</script>
  <button use:currentModeAction={$GAME_MODE} class:currentMode on:click={handleControls} class="control" data-control={control}>
 <slot />
</button>


  <style>
    button{
      all:unset;
    }
.control{
    --size: 2.8rem;
    margin: var(--space-s-m) 0;
    gap: var(--space-l-xl);
  }

 .control{
  
  --size: 2.8rem;
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



  .currentMode{
   background-color: var(--choice-focus-bg);
   color: var(--choice-focus-clr);
   outline-offset: 2px;
   outline: 2px solid var(--choice-focus-bg);
  transition: all 200ms ease-in-out;
  }


  </style>

