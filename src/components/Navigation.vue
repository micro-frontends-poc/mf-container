<template>
  <nav
    class="flex items-center justify-between flex-wrap light-mode:bg-black p-6"
  >
    <router-link to="/">
      <span class="title text-3xl font-black hover:text-default-soft">
        mifro
      </span>
    </router-link>

    <button
      class="flex md:hidden items-center px-3 py-2 ml-auto border rounded text-black border-black hover:text-white hover:border-purple-700"
      @click="isMenuOpen = !isMenuOpen"
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
    <div class="md:flex-grow flex md:items-center md:w-auto">
      <div
        class="text-sm flex-column justify-end w-full absolute md:static md:flex-grow md:flex top-0 left-0 p-8 mt-16 md:m-0 md:p-0"
        :class="{ hidden: !isMenuOpen }"
      >
        <router-link
          to="iframes"
          class="block mt-4 md:mt-0 mr-4 md:inline-block font-bold hover:text-default-soft"
          >Iframes</router-link
        >
        <router-link
          to="javascript"
          class="block mt-4 md:mt-0 mr-4 md:inline-block font-bold hover:text-default-soft"
          >JavaScript</router-link
        >
        <router-link
          to="web-components"
          class="block mt-4 md:mt-0 mr-4 md:inline-block  font-bold hover:text-default-soft"
          >WebComponents</router-link
        >
        <router-link
          :to="{ name: 'About' }"
          class="block mt-4 md:mt-0 md:inline-block  font-bold hover:text-default-soft"
          >Other Methods</router-link
        >
      </div>
      <div>
        <button
          @click="showModal = true"
          class="text-sm px-4 py-2 mx-5 leading-none border rounded-btn bg-primary hover:bg-soft text-primary hover:text-secondary"
        >
          Login
        </button>
        <LoginModal v-if="showModal" @close="showModal = false"></LoginModal>
      </div>
      <ThemeToggle></ThemeToggle>
    </div>
  </nav>
</template>

<script>
import ThemeToggle from "@/components/ThemeToggle.vue"
import LoginModal from "@/components/LoginModal.vue"
export default {
  components: {
    ThemeToggle,
    LoginModal
  },
  data() {
    return {
      isMenuOpen: false,
      showModal: false
    }
  }
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Molle:400i&display=swap");
.title {
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
