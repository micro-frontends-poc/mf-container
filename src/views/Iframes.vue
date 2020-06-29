<template>
  <VersionLayout>
    <template v-slot:title>Iframes</template>
    <template v-slot:source>
      <a class="link-highlight" href="https://iframe-container.now.sh/"
        >This webshop</a
      >
      /
      <a
        class="link-highlight"
        href="https://github.com/micro-frontends-poc/mf-iframe"
        >Source</a
      >
    </template>
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
      <p>
        Assembling the parts with iframes is the oldest method of creating a UI
        out of several projects on the client side. Iframes provide high level
        of isolation, as they have a completely separate DOM and are inherently
        secure. The only way data can be passed between the container and the
        iframe is to use the Window object's postMessage method and listen to it
        on the other side.
      </p>
      <img
        class="my-6"
        src="@/assets/iframe-example.svg"
        alt="Micro-frontends example with iframes"
      />
      <p>
        In the above snippet, we see a container with 2 micro-frontends (product
        and cart). The iframe container listens to the 'message' event and in
        the case it comes from the product iframe, it posts it further to the
        other micro-frontend, cart.
      </p>
      <p>
        If we compose the UI with iframes, the projects can be developed
        independently. The webshop modules seen on the left are available in
        their domains:
      </p>
      <ul>
        <li>
          <a class="link-highlight" href="https://iframe-product.now.sh/"
            >Product list: Vue</a
          >
        </li>
        <li>
          <a class="link-highlight" href="https://iframe-cart.now.sh/"
            >Cart: Angular</a
          >
        </li>
      </ul>
    </template>
    <template v-slot:advantages>
      <ul>
        <li>Minimal dependency on other micro-frontends</li>
        <li>No need for special build process</li>
        <li>Easy template composition</li>
        <li>No clashing of JS and CSS namespaces</li>
      </ul>
    </template>
    <template v-slot:disadvantages>
      <ul>
        <li>Full SEO coverage of the site is basically impossible</li>
        <li>Limited styling capabilities</li>
        <li>One project can expose one micro-frontend</li>
      </ul>
    </template>
    <template v-slot:links>
      <ul>
        <li>
          <a
            class="link-highlight"
            href="https://javascript.info/cross-window-communication"
            >JavaScript.info:</a
          >
          Everything that needs to be known about iframe-parent communication
        </li>
        <li>
          <a
            class="link-highlight"
            href="https://www.toptal.com/front-end/micro-frontends-strengths-benefits"
            >The Strengths and Benefits of Micro Frontends:</a
          >
          A hybrid approach with iframes and Web Components
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
      url: process.env.VUE_APP_IFRAME
    }
  }
}
</script>
