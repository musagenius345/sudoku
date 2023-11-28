<div class="cell" >
<slot></slot>
</div>
  <style>
  .cell {
    max-width: 100%;
    --size: 2.25rem;
  width: var(--size);
  height: var(--size);
  font-size: clamp(1.35rem, 1.2893rem + 0.3036vw, 1.5625rem);  
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
@media(min-width: 450px){
    .cell{
      --size: 3rem;
    }
  }

@media(min-width: 575px){
    .cell{
      --size: 3.97rem;
    }
  }

@media(min-width: 675px){
    .cell{
      --size: 4.57rem;
    }
  }

@media(min-width: 950px){
    .cell{
      --size: 5.75rem;
    }
  }

</style>
