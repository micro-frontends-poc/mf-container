<template>
  <button @click="toggleTheme">{{ dark ? "&#127772;" : "&#127774;" }}</button>
</template>

<script>
export default {
  data() {
    return {
      dark:
        window.matchMedia("(prefers-color-scheme: dark)").media.toString() ==
        "(prefers-color-scheme: dark)"
    }
  },
  mounted() {
    if (window.matchMedia("(prefers-color-scheme)").media !== "not all") {
      console.log("🎉 Dark mode is supported")
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
    }
  }
}
</script>

<style></style>
