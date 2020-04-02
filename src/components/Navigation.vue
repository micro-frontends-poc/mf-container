<template>
  <nav
    class="flex items-center justify-between flex-wrap bg-red-600 light-mode:bg-black p-6"
  >
    <h1 class="text-3xl font-black text-default hover:text-default-soft">
      mifro
    </h1>

    <div class="block md:hidden">
      <button
        class="flex items-center px-3 py-2 border rounded text-black border-black hover:text-white hover:border-purple-700"
        @click="!isMenuOpen"
      >
        <svg
          class="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <div class="w-full block flex-grow md:flex md:items-center md:w-auto">
      <div class="text-sm md:flex-grow md:flex flex-column justify-end">
        <router-link
          :to="{ name: 'versions', params: { version: 'iframes' } }"
          class="block mt-4 md:mt-0 mr-4 md:inline-block font-bold text-default hover:text-default-soft"
          >Iframes</router-link
        >
        <router-link
          :to="{ name: 'versions', params: { version: 'javascript' } }"
          class="block mt-4 md:mt-0 mr-4 md:inline-block font-bold text-default hover:text-default-soft"
          >JavaScript</router-link
        >
        <router-link
          :to="{ name: 'versions', params: { version: 'web-components' } }"
          class="block mt-4 md:mt-0 md:inline-block  font-bold text-default hover:text-default-soft"
          >WebComponents</router-link
        >
      </div>
      <div>
        <button
          class="text-sm px-4 py-2 mx-5 leading-none border rounded-btn bg-primary hover:bg-soft text-primary hover:text-secondary"
        >
          Login
        </button>
      </div>
      <ThemeToggle></ThemeToggle>
    </div>
  </nav>
</template>

<script>
import ThemeToggle from "@/components/ThemeToggle.vue"
export default {
  components: {
    ThemeToggle
  },
  data() {
    return {
      isMenuOpen: false
    }
  }
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Molle:400i&display=swap");
h1 {
  font-family: "Molle", cursive;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
