<template>
  <VersionLayout>
    <template v-slot:title>Iframe</template>
    <template v-slot:webshop>
      <iframe
        :src="url"
        frameBorder="0"
        scrolling="no"
        title="MF Web Components demo"
        width="100%"
        height="100%"
        style="min-height: 48rem"
        ref="iframe"
      ></iframe>
    </template>
    <template v-slot:about>
      <p>about</p>
    </template>
    <template v-slot:advantages> </template>
    <template v-slot:disadvantages> </template>
  </VersionLayout>
</template>

<script>
import VersionLayout from "@/components/VersionLayout.vue"
import { versionMixin } from "@/versionMixin.js"
export default {
  mixins: [versionMixin],
  components: {
    VersionLayout
  },

  data() {
    return {
      url: process.env.VUE_APP_IFRAME
    }
  }
}
</script>
