<template>
  <VersionLayout>
    <template v-slot:title>Web Components</template>
     <template v-slot:source>
      <a class="link-highlight"
            href="https://mf-wc-container.now.sh/">This webshop</a> / 
      <a class="link-highlight"
            href="https://github.com/micro-frontends-poc/mf-web-components">Source</a>
    </template>
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
      <p>Web Components is a set of relatively new web standards that aims to enable component-based structures natively.
        This comes from the realization that most modern web frameworks are component based (React, Angular, Vue). </p>
        <ul>
<li>The most important standard is Custom Element, with which we can create our own HTML tag.</li>
<li>Shadow DOM can be attached to it have its own scope. </li>
<li>HTML templates with the <code>&lt;template&gt;</code> and <code>&lt;slot&gt;</code> makes reusability much easier.</li>
        </ul>
        <img
        class="my-6"
        src="@/assets/wc-example.svg"
        alt="Micro-frontends example with Web Components"
      />
       <p>Web Components can fire Custom Events and data can be passed to them thorough attibutes. 
         These features make them a viable option to wrap our micro-frontends into Web Components. On the above example, 
         the 'product' Web Component fired an event (item was added to cart). The container app listens to this event and 
         updates the 'cart-items' attribute of the cart Web Component.</p>
    </template>
    <template v-slot:advantages> 
      <ul>
      <li>Some frameworks can be easily transformed to Web Components (e.g. Vue CLI and Angular Elements). 
        If we know that the parent container will have the same framework, even the framework-specific 
        parent-child component communication can stay the same, otherwise Custom Events should be dispatched.</li>
      <li>One project can expose multiple Web Components</li>
      <li>Components can be distributed as npm packages as well</li>
      </ul>
    </template>
    <template v-slot:disadvantages> 
      <ul>
        <li>The framework's build process has to be changed</li>
        <li>Passing complex or bigger data through Custom Element attributes can feel hacky</li>
        <li>New and still changing standard</li>
        <li>React is not fully compatible with the standard due to its synthetic event system</li>
      </ul>
    </template>
    <template v-slot:links>
       <ul>
        <li>
          <a
            class="link-highlight"
            href="https://itnext.io/prototyping-micro-frontends-d03397c5f770"
            >Kjartan Rekdal Müller: Easy Micro-Frontends</a
          >
        </li>
          <li>
          <a
            class="link-highlight"
            href="https://developer.mozilla.org/en-US/docs/Web/Web_Components"
            >MDN web docs about Web Components</a
          >
        </li>
          <li>
          <a
            class="link-highlight"
            href="https://itnext.io/prototyping-micro-frontends-d03397c5f770"
            >Kjartan Rekdal Müller: Easy Micro-Frontends:</a
          > An interesting and comprehensive article and example of using several frameworks with Web Components
        </li>
    
          <li>
          <a
            class="link-highlight"
            href="https://custom-elements-everywhere.com/"
            >Custom Elements Everywhere:</a
          > A nice summary of custom elements and a list of frameworks describing thier compatibility
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
