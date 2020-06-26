<template>
  <VersionLayout>
    <template v-slot:webshop>
      <iframe
        :src="url"
        frameBorder="0"
        scrolling="no"
        title="MF Web Components demo"
        width="100%"
        height="100%"
        style="min-height: 48rem"
        ref="wc"
      ></iframe>
    </template>
    <template v-slot:about>
      <p>about</p>
    </template>
    <template v-slot:advantages> 
      The main frameworks can be transformed to Web Components
      Communication through custom events and attributes
    </template>
    <template v-slot:disadvantages> </template>
    <template v-slot:links>
       <ul>
        <li>
          <a
            class="link-highlight"
            href="https://itnext.io/prototyping-micro-frontends-d03397c5f770"
            >Kjartan Rekdal Müller: Easy Micro-Frontends</a
          >
        </li>
      </ul>
      
    </template>
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
      url: process.env.VUE_APP_WC
    }
  }
}
</script>

<style></style>
