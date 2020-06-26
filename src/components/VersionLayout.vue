<template>
  <section
    class="versions-container col-start-2 col-span-10 grid grid-cols-9 gap-4"
  >
    <h1 class="block col-span-9"><slot name="title"></slot></h1>
    <section class="col-span-9 md:col-span-5 border border-gray-400">
      <slot name="webshop">Loading...</slot>
    </section>
    <section class="col-span-9 md:col-span-4 ">
      <h2>About this pattern</h2>
      <slot name="about"></slot>
    </section>
    <section class="col-span-9 ">
      <h2>Advantages</h2>
      <slot name="advantages"></slot>
      <h2>Disadvantages</h2>
      <slot name="disadvantages"></slot>
      <h2>Useful links</h2>
      <slot name="links"></slot>
    </section>
  </section>
</template>

<style>
.versions-container {
  grid-template-rows: max-content;
}
</style>
