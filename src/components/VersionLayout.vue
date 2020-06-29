<template>
  <section
    class="versions-container col-start-2 col-span-10 grid grid-cols-9 gap-4"
  >
  <div class="flex items-baseline col-span-9">
<h1 class="mr-3"><slot name="title"></slot></h1>
    (<slot name="source"></slot>)
  </div>
    
    <section class="col-span-9 md:col-span-5">
      <slot name="webshop">Loading...</slot>
    </section>
    <section class="col-span-9 md:col-span-4 ">
      
      <h2 class="">About this pattern</h2>
      <slot name="about"></slot>
      <h2 class="mt-6">Useful links</h2>
      <slot name="links"></slot>
    </section>
    <section class="mt-10 col-span-9 flex justify-between flex-col md:flex-row">
      <section class="flex-1 mr-6">
        <h2>Advantages</h2>
        <slot name="advantages"></slot>
      </section>
      <section class="flex-1">
        <h2>Disadvantages</h2>
        <slot name="disadvantages"></slot>
      </section>
    </section>
  </section>
</template>

<style>
.versions-container {
  grid-template-rows: max-content;
}
</style>
