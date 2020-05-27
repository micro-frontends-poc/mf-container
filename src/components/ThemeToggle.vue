<template>
  <button @click="toggleTheme" class=" focus:outline-none">
    {{ dark ? "&#127772;" : "&#127774;" }}
  </button>
</template>

<script>
export default {
  data() {
    return {
      dark: localStorage.getItem("theme")
    }
  },

  methods: {
    toggleTheme() {
      this.dark = !this.dark
      this.dark
        ? localStorage.setItem("theme", "dark")
        : localStorage.removeItem("theme")

      const value = this.dark ? "dark" : "light"
      this.$store.dispatch("changeTheme", value)
    }
  }
}
</script>

<style></style>
