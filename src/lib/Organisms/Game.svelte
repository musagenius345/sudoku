<script lang='ts'>
  import {blur} from 'svelte/transition'
  import Cell from '$atom/Cell.svelte'
  import  {createTable} from '$store/table'
  import SudokuToolCollection from '../../sudokujs/src/main'

  const sudoku = SudokuToolCollection()


  $: currentGame = 'current'
  let {table, solveGame, resetGame} = createTable()
  const removeDot = (str) => str === '.' ? '' : str


  function solveSudoku(){
    $table = solveGame()
  }

  function resetSudoku(){
    $table = ''
    currentGame = 'new'
    resetGame()
    currentGame = 'current'
  }


</script>
  <div class="flex">
  <button on:click={solveSudoku}>Solve</button>
  <button on:click={resetSudoku}>Reset</button>
  </div>
{#key currentGame === 'new' || $table}
<div class="game grid">
{#each $table as grid}
   <Cell value={removeDot(grid)}>{removeDot(grid)}</Cell>
{/each}
</div>
{/key}

  <style>


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
  button{
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
