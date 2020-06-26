<template>
  <nav
    class="flex light-mode:bg-black"
  >
  <section class="flex items-center justify-between flex-wrap  p-6 flex-1">
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
        class="text-sm bg-default flex-column justify-end w-full absolute md:static md:flex-grow md:flex top-0 left-0 p-8 mt-16 md:m-0 md:p-0"
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
          :to="{ name: 'OtherMethods' }"
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
      </section>
       <a
        href="https://github.com/micro-frontends-poc"
        class="github-corner"
        aria-label="View source on GitHub"
      >
        <svg
          width="80"
          height="80"
          viewBox="0 0 250 250"
          style="fill:#3e5164; color:#fff;"
          aria-hidden="true"
        >
          <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
          <path
            d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
            fill="currentColor"
            style="transform-origin: 130px 106px;"
            class="octo-arm"
          ></path>
          <path
            d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
            fill="currentColor"
            class="octo-body"
          ></path></svg
      ></a>
  
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
.github-corner:hover .octo-arm {
  animation: octocat-wave 560ms ease-in-out;
}
@keyframes octocat-wave {
  0%,
  100% {
    transform: rotate(0);
  }
  20%,
  60% {
    transform: rotate(-25deg);
  }
  40%,
  80% {
    transform: rotate(10deg);
  }
}
@media (max-width: 500px) {
  .github-corner:hover .octo-arm {
    animation: none;
  }
  .github-corner .octo-arm {
    animation: octocat-wave 560ms ease-in-out;
  }
}
</style>
