<script lang='ts'>
  import Cell from '$atom/Cell.svelte'
  import SudokuToolCollection from '../../sudokujs/src/main.ts'
  import { selectedLevel } from '$store/level'
  const sudoku = SudokuToolCollection()
  const table = sudoku.generator.generate($selectedLevel)


  const removeDot = (str) => str === '.' ? '' : str
</script>

<div class="game">
{#each table as grid}
   <Cell value={removeDot(grid)}>{removeDot(grid)}</Cell>
{/each}
</div>

  <style>
.game {
  display: grid;
  grid-template-columns: repeat(9,1fr);
  grid-template-rows: repeat(9, 1fr);
  gap: 0.18rem 0;
  background-color: var(--ttt);
  margin-block: 0.8rem;
}


</style>
