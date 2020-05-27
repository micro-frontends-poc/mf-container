<template>
  <transition name="modal">
    <div class="modal-mask fixed top-0 left-0 z-50">
      <div class="modal-wrapper">
        <div class="modal-container p-4 bg-default">
          <h2>Username</h2>

          <input type="text" v-model="username" class="w-full my-4 border" />
          <button
            class="w-full py-2 text-sm leading-none border rounded-btn bg-primary hover:bg-soft text-primary hover:text-secondary"
            @click="handleClick"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      username: this.$store.state.user
    }
  },
  methods: {
    handleClick() {
      this.$store.commit("changeUser", this.username)
      this.$emit("close")
    }
  }
}
</script>

<style>
.modal-mask {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}
</style>
