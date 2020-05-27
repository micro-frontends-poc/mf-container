<template>
  <div
    id="app"
    class="bg-default flex flex-col min-h-full"
    :class="{ 'theme-dark': theme == 'dark' }"
  >
    <Navigation />
    <main class="grid grid-cols-12 flex-1 mt-16">
      <router-view />
    </main>

    <footer>
      <p class=" text-sm italic text-center">Made by Emese @Accenture, 2020.</p>
    </footer>
  </div>
</template>
<script>
import Navigation from "@/components/Navigation.vue"

import { mapState } from "vuex"
export default {
  components: {
    Navigation
  },

  computed: mapState(["theme"])
}
</script>
<style lang="scss"></style>
