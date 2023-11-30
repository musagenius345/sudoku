<script lang='ts'>
  import {blur} from 'svelte/transition'
  import Cell from '$atom/Cell.svelte'
  import  {createTable, selectedLevel} from '$store/table'
  import SudokuToolCollection from '../../sudokujs/src/main'

  const sudoku = SudokuToolCollection()


  let {table, solveGame, resetGame, solved} = createTable()
  const removeDot = (str) => str === '.' ? '' : str


  function solveSudoku(){
    $table = solveGame()
  }

  function resetSudoku(){
    $solved = !$solved
    $table = ''
    resetGame()
  }
  
  function handleControls(e){
    const control = e.currentTarget.dataset
    console.log(control)
    const controlFunctions = new Map()
    controlFunctions
    .set('delete', handleDelete)
    .set('undo', handleUndo)
    .set('check', handleCheckSolution)
    .set('edit', handleEdit);
      if(controlFunctions.has(control)){
      controlFunctions.get(control)
    } else{
      return
    }
  }

  function handleDelete(){ console.log('delete')}
  function handleUndo(){ console.log('undo')}
  function handleCheckSolution(){ console.log('check')}
  function handleEdit(){ console.log('edit')}



</script>
  <!-- <button>{$selectedLevel}</button> -->
  <div class="flex">
  <button class='solve' on:click={solveSudoku}>Solve</button>
  <button class='reset' on:click={resetSudoku}>Reset</button>
  </div>
{#key $solved}
<div class="game grid">
{#each $table as grid}
   <Cell value={removeDot(grid)}>{removeDot(grid)}</Cell>
{/each}
</div>
{/key}


<div class="choices">
  {#each Array.from({length: 9}, (v, i) => i + 1) as number}
    <button class='number'>{number}</button>
  {/each}
</div>

<div class="controls choices">
  <!-- x delete -->
  <button on:click={handleControls} data-control='delete' class="control delete">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
  </button>
    <!-- Undo (repeat ccw) -->
  <button on:click={handleControls} data-control='undo' class="control undo">
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>
  </button>

    <!-- check mark-->
  <button on:click={handleControls} data-control='check' class="control checkProgress">
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
  </button>

  <button on:click={handleControls} data-control='edit' class="control edit">
    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg>
  </button>
  <!-- <div class="control"></div> -->
</div>

  <style>
  button{all: unset;}
.choices{
  margin: var(--space-3xs-2xs) auto;
  display: grid;
  gap: var(--space-2xs-xs);
  grid-auto-flow: column;
}


.number, .control{
  
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
.control{
    --size: 2.8rem;
    margin: var(--space-s-m) 0;
    gap: var(--space-l-xl);
  }
.number:is(:hover, :focus), .control:is(:hover, :focus){
   background-color: var(--choice-focus-bg);
   color: var(--choice-focus-clr);
   outline-offset: 2px;
   outline: 2px solid var(--choice-focus-bg);
  transition: all 200ms ease-in-out;
  }

.grid {
  max-width: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(9,  minmax(0, 1fr));
  grid-template-rows: repeat(9,  minmax(0, 1fr));
  overflow: hidden;
  gap: var(--outer-grid-gap);

  margin-block: var(--space-l-xl);
}
button:is(.solve, .reset){
  max-width: 100%;
  border-radius: 12px;
 outline: 0;
  border: 2px solid lightblue;
  background-color: var(--txt);
  color: var(--bg);
  padding: var(--space-xs-s) var(--space-m-l);
  margin: var(--space-2xs-xs) auto;
}

.flex{
  display: flex;
}
</style>
