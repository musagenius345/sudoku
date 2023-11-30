<script>
 export let onclick
 export let value
 const max = 9;
 const min = 1
  let cellRef
  let slot
  let solid
 let id = `cell-${crypto.randomUUID()}`

  


 function checkEmpty(node){
   const cell = document.getElementById(id)

   if(cell.textContent !== ''){
      solid = true
    }


 }
</script>
<button class="cell" {id} bind:this={cellRef} data-value={value} on:click={onclick} use:checkEmpty >
<span class="number" class:solid bind:this={slot}><slot><!-- optional fallback --></slot></span>
</button>
  <style>
  /* div { */
    /* margin: var(--space-s-m); */
    /* padding: var(--space-s-l); */
  /* } */
   button{
    all:unset;
  }
  
   .number {
    margin: 0 auto;
    padding: var(--space-xs-s);
      max-width: 100%; 
     --size: 1.28rem; 
   width: var(--size, 52px); 
   height: var(--size); 
   font-size: clamp(1.35rem, 1.2893rem + 0.3036vw, 1.5625rem);   
   background-color: var(--bg); 
   cursor: pointer; 
   text-align:center; 
   font-family: 'Varela', 'Permanent Marker', serif; 
   transition: all 200ms ease-in-out; 
 } 

:is(.number) { 
  display: grid; 
  place-items: center; 
 } 
 .number:is(:hover, :active, :focus){
   color: var(--bg); 
   background-color: var(--txt);
   outline: 3px solid var(--bg);
   outline-offset: -5px;
   border-radius: 50%; 
 } 

.cell {
    /* --size: 8rem; */
    max-width: 100%;
  position: relative;
  width: var(--size);
  height: var(--size);
}

.cell::before,
.cell::after {
  content: '';
  position: absolute;
  background-color: var(--line-color);
  z-index: 1;
}


.cell::after {
  inline-size: 100svw;
  block-size: var(--line-thickness);
  inset-inline-start: 0;
  inset-block-start: calc(var(--line-offset) * -1);
}


.cell::before {
  inline-size: var(--line-thickness);
  block-size: 100dvh;
  inset-block-start: 0;
  inset-inline-start: calc(var(--line-offset) * -1);
}
.solid{
    /* opacity: 0.8; */
  }

</style>
