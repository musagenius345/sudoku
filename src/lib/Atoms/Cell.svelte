<div class="cell">
<slot></slot>
</div>
  <style>
  .cell {
  width: 2.5rem;
  height: 2.5rem;
  font-size: 1rem;
  background-color: var(--bg);
  cursor: pointer;
  font-family: 'Varela', 'Permanent Marker', serif;
  transition: all 200ms ease-in-out;
}

:is(.cell) {
  display: grid;
  place-items: center;
}
.cell:is(:hover, :active, :focus){
  color: var(--bg);
  background-color: var(--txt);
  outline: 3px solid var(--bg);
  outline-offset: -5px;
  border-radius: 50%;
}



</style>
