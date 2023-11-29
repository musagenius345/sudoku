<script lang='ts'>
  import Cell from '$atom/Cell.svelte'
  import  {createTable} from '$store/table'

  const {table} = createTable()
  const removeDot = (str) => str === '.' ? '' : str
</script>

<div class="game grid">
{#each $table as grid}
   <Cell value={removeDot(grid)}>{removeDot(grid)}</Cell>
{/each}
</div>

  <style>


.grid {
  max-width: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(9,  minmax(0, 1fr));
  grid-template-rows: repeat(9,  minmax(0, 1fr));
  overflow: hidden;
  gap: var(--outer-grid-gap);
}

</style>
