<script lang='ts'>
  import {blur} from 'svelte/transition'
  import Cell from '$atom/Cell.svelte'
  import  {createTable} from '$store/table'

  let {table, solvedTable, resetGame} = createTable()
  const removeDot = (str) => str === '.' ? '' : str


  function solveSudoku(){
    $table = $solvedTable
  }

  function resetSudoku(){
    $table = ''
    resetGame()
  }
  
</script>
  <div class="flex">
  <button on:click={solveSudoku}>Solve</button>
  <button on:click={resetSudoku}>Reset</button>
  </div>
{#key table}
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
  background-color: var(--text);
  color: var(--ttt);
  padding: var(--space-xs-s) var(--space-m-l);
  margin: var(--space-s-m) auto;
}

.flex{
  display: flex;
}
</style>
