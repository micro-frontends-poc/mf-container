<template>
  <VersionLayout>
    <template v-slot:webshop>
      <iframe
        src="http://localhost:3000"
        frameBorder="0"
        scrolling="no"
        title="MF Web Components demo"
        width="100%"
        height="100%"
        style="min-height: 48rem"
        ref="js"
      ></iframe>
    </template>
    <template v-slot:about>
      <p>There are existing tools to make client-side micro-frontend composition possible (see in the links below). 
        For this demonstration, the most popular one, Single-SPA was chosen. 
        In case of Single-SPA, the micro-frontends cannot be examined in their own URLs, as it was the case with iframes. 
      Without the container application context, it is not even possible to render an app for development.</p>

      
      <h3>Alternatives to Single-SPA</h3>
      <ul>
        <li>
          <a
            class="link-highlight"
            href="https://opencomponents.github.io/"
            >Open Components</a
          >
        </li>
        <li>
          <a
            class="link-highlight"
            href="https://frint.js.org/"
            >Frint</a
          >
        </li>
        <li>
          <a
            class="link-highlight"
            href="https://piral.io/"
            >Piral</a
          >
        </li>
      </ul>
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
      url: process.env.VUE_APP_JS
    }
  }
}
</script>

<style></style>
