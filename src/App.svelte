<script lang="ts">
  // import eruda from 'eruda'
  import Counter from "./lib/Counter.svelte";
  import SudokuToolCollection from './sudokujs/src/main.ts'
  const sudoku = SudokuToolCollection()
  // const table = sudoku.generator.generate('easy')
  // eruda.init()
</script>
<svelte:head>
  <title>Sudoku</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap" rel="stylesheet">
</svelte:head>
<div class="content-grid">
  <Counter />
</div>
<style>
  :global(:root){
   --marine-blue: hsl(213, 96%, 18%);
   --purplish-blue: hsl(243, 100%, 62%);
   --pastel-blue: hsl(228, 100%, 84%);
   --light-blue: hsl(206, 94%, 87%);
   --strawberry-red: hsl(354, 84%, 57%);
   --cool-gray: hsl(231, 11%, 63%);
   --light-gray: hsl(229, 24%, 87%);
   --magnolia: hsl(217, 100%, 97%);
   --alabaster: hsl(231, 100%, 99%);
   --white: hsl(0, 0%, 100%);


    /* UTOPIA - https://utopia.fyi/space/calculator/?c=375,16,1.2,1440,29,1.25,5,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l&g=s,l,xl,12*/
    --space-3xs: clamp(0.25rem, 0.184rem + 0.2817vw, 0.4375rem);
  --space-2xs: clamp(0.5rem, 0.346rem + 0.6573vw, 0.9375rem);
  --space-xs: clamp(0.75rem, 0.5299rem + 0.939vw, 1.375rem);
  --space-s: clamp(1rem, 0.7139rem + 1.2207vw, 1.8125rem);
  --space-m: clamp(1.5rem, 1.0599rem + 1.8779vw, 2.75rem);
  --space-l: clamp(2rem, 1.4278rem + 2.4413vw, 3.625rem);
  --space-xl: clamp(3rem, 2.1417rem + 3.662vw, 5.4375rem);
  --space-2xl: clamp(4rem, 2.8556rem + 4.8826vw, 7.25rem);
  --space-3xl: clamp(6rem, 4.2835rem + 7.3239vw, 10.875rem);

  /* One-up pairs */
  --space-3xs-2xs: clamp(0.25rem, 0.0079rem + 1.0329vw, 0.9375rem);
  --space-2xs-xs: clamp(0.5rem, 0.1919rem + 1.3146vw, 1.375rem);
  --space-xs-s: clamp(0.75rem, 0.3759rem + 1.5962vw, 1.8125rem);
  --space-s-m: clamp(1rem, 0.3838rem + 2.6291vw, 2.75rem);
  --space-m-l: clamp(1.5rem, 0.7518rem + 3.1925vw, 3.625rem);
  --space-l-xl: clamp(2rem, 0.7896rem + 5.1643vw, 5.4375rem);
  --space-xl-2xl: clamp(3rem, 1.5035rem + 6.385vw, 7.25rem);
  --space-2xl-3xl: clamp(4rem, 1.5792rem + 10.3286vw, 10.875rem);

  /* Custom pairs */
  --space-s-l: clamp(1rem, 0.0757rem + 3.9437vw, 3.625rem);
}
  

</style>
