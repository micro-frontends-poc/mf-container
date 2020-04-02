<template>
  <div id="app">
    <Navigation msg="Welcome to Your Vue.js App" />
    <router-view />
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
