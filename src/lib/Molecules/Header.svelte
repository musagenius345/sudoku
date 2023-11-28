<script>
  const levels = ['easy', 'medium', 'hard', 'very-hard', 'insane', 'inhumane']

  function formatLevelString(str){
    if(str.includes('-')){
      return str = str.split('-').map(el => el.slice(0, 1).toUpperCase() + el.slice(1)).join(' ')
    }
    return str.slice(0, 1).toUpperCase() + str.slice(1)
  }
</script>

<header>
  <h1>Sudoku 9X9</h1>
  <select name="level" id="level">
    {#each levels as level}
       <option value={level}>{formatLevelString(level)}</option>
    {/each}
  </select>
</header>

  <style>

/*Remove the inheritance of text transform in Edge, Firefox, and IE*/
select {
  background-color: inherit;
  text-transform: none;
  max-width: 100%;
  width: 100%;
  appearance: none;
  line-height: 1.7;
  font-family: inherit;
  padding: .75rem 1rem;
  margin-block: 1rem 1.5rem;
  border-radius: 8px;
}


  select:focus,
textarea:focus {
  box-shadow: 0 0 0 2px var(--text);
}
select:after {
    --icon-chevron: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='#ff0000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  /* position: absolute; */
    content: var(--icon-chevron);
   
}

select:is(:active, :focus) {
    background-color: var(--text);
    border-color: var(--ttt);
}
</style>
