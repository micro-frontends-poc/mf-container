<template>
  <section
    class="versions-container md:col-start-2 xl:col-start-3 col-span-10 md:col-span-8 xl:col-span-6 grid grid-cols-9 gap-4"
  >
    <section class="col-span-9 ">
      <h2>{{ this.$route.params.version }}</h2>
    </section>
    <section class="col-span-9 md:col-span-6 bg-inverse-soft">
      <p>Version as custom component here</p>
    </section>
    <section class="col-span-9 md:col-span-3 bg-inverse-soft">
      <h3>Advantages</h3>
      <h3>Disadvantages</h3>
    </section>
  </section>
</template>

<script>
export default {}
</script>

<style>
.versions-container {
  grid-template-rows: max-content;
}
</style>
