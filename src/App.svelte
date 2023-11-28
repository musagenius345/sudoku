<script lang="ts">
  // import eruda from 'eruda'
  import Counter from "./lib/Counter.svelte";
  import Game from '$org/Game.svelte'
  import Header from '$mol/Header.svelte'
  // eruda.init()
</script>
<svelte:head>
  <title>Sudoku</title>
</svelte:head>
<div class="content-grid">
  <Header /> 
  <Game />
</div>
<style>
  :global(:root){ 

  }

  
  

</style>
