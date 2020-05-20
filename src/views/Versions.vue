<template>
  <section
    class="versions-container md:col-start-2 col-span-12 md:col-span-10 grid grid-cols-9 gap-4"
  >
    <section class="col-span-9 ">
      <h1>{{ this.$route.params.version }}</h1>
    </section>
    <section class="col-span-9 md:col-span-6 bg-inverse-soft">
      <iframe
        src="http://localhost:3000"
        frameBorder="0"
        scrolling="no"
        title="MF Web Components demo"
        width="100%"
        height="100%"
        style="min-height: 48rem"
        id="wc-iframe"
      ></iframe>
    </section>
    <section class="col-span-9 md:col-span-3 bg-inverse-soft">
      <h2>About this pattern</h2>
      <p></p>
    </section>
    <section class="col-span-9 bg-inverse-soft">
      <h2>Advantages</h2>
      <h2>Disadvantages</h2>
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
