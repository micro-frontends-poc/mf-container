<template>
  <div id="app" class="bg-inverse flex flex-col h-full">
    <Navigation msg="Welcome to Your Vue.js App" />
    <main class="grid grid-cols-10 flex-1 ">
      <router-view />
    </main>

    <footer>
      <p class=" text-sm italic text-center">Made by Emese @Accenture, 2020.</p>
    </footer>
  </div>
</template>
<script>
import Navigation from "@/components/Navigation.vue"
export default {
  components: {
    Navigation
  },
  methods: {}
}
</script>
<style lang="scss"></style>
