<template>
  <VersionLayout>
    <template v-slot:title>Iframe</template>
    <template v-slot:webshop>
      <iframe
        :src="url"
        frameBorder="0"
        scrolling="no"
        title="MF Iframes demo"
        width="100%"
        height="100%"
        style="min-height: 48rem"
        ref="iframe"
      ></iframe>
    </template>
    <template v-slot:about>
      If we compose the UI from iframes, the projects can be developed independently. 
      The webshop modules seen on the left are available in their domains: 
      <ul>
        <li><a class="link-highlight"
            href="https://iframe-container.now.sh/">Frame/Navigation: React</a></li>
        <li><a class="link-highlight"
            href="https://iframe-product.now.sh/">Product list: Vue</a></li>
        <li><a class="link-highlight"
            href="https://iframe-cart.now.sh/">Cart: Angular</a></li>
      </ul>
      <p>
        Assembling the parts with iframes is the oldest method of creating a UI
        out of several projects. Iframes provide high level of isolation. They
        all have their own window object and a completely separate DOM. The only
        way data can be passed between them on client side is to use the Window
        object's postMessage method.
      </p>
      <code>window.addEventListener("message", function(event) { })</code>
    </template>
    <template v-slot:advantages>
      <ul>
        <li>There is full independence</li>
      </ul>
    </template>
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
