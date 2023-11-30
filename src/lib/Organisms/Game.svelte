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
  <style>
  button{all: unset;}
.choices{
  margin: var(--space-2xs-xs) auto;
  display: grid;
  gap: var(--space-s-m);
  grid-auto-flow: column;
}
.number{
  
  --size: 1.6rem;
 text-align: center;
  font-size: var(--step-2);
  width: var(--size);
  height: var(--size);
  padding: var(--space-3xs-2xs);
  border: 1px solid var(--original-clr);
  color: var(--original-clr);
  border-radius: 50%;

  /*cursor: pointer;*/
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
