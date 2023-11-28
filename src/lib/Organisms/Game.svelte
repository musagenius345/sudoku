<script lang='ts'>
  import Cell from '$atom/Cell.svelte'
  import SudokuToolCollection from '../../sudokujs/src/main.ts'
  const sudoku = SudokuToolCollection()
  const table = sudoku.generator.generate('easy')


  function removeDot(dot){
    if(dot === '.'){
      return ''
      
    }
    return dot
  }
</script>

<div class="game breakout">
{#each table as grid}
   <Cell>{removeDot(grid)}</Cell>
{/each}
</div>
