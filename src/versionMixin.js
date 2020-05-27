import { mapState } from "vuex"
export const versionMixin = {
  computed: mapState(["theme", "user"]),
  watch: {
    theme(value) {
      this.$refs.iframe.contentWindow.postMessage(
        { type: "theme", value: value },
        "*"
      )
    },
    user(value) {
      this.$refs.iframe.contentWindow.postMessage(
        { type: "user", value: value },
        "*"
      )
    }
  }
}
