<template>
  <button @click="toggleTheme" class=" focus:outline-none">
    {{ dark ? "&#127772;" : "&#127774;" }}
  </button>
</template>

<script>
export default {
  data() {
    return {
      dark: localStorage.getItem("theme"),
    }
  },

  methods: {
    toggleTheme() {
      this.dark = !this.dark
      if (this.dark) {
        document.documentElement.classList.add("theme-dark")
        localStorage.setItem("theme", "dark")
      } else {
        document.documentElement.classList.remove("theme-dark")
        localStorage.removeItem("theme")
      }
      const wcIframe = document.getElementById("wc-iframe")
      wcIframe.contentWindow.postMessage(
        this.dark ? "dark" : "light",
        "http://localhost:3000"
      )
    },
  },
}
</script>

<style></style>
