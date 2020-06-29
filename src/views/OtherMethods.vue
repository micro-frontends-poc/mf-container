<template>
  <div class="about col-start-2 xl:col-start-4 col-span-10 xl:col-span-6">
    <h1>Other methods</h1>
    <p>
      The three demonstrated methods in this website integrate the parts run-time and on client-side. 
      There are other ways to achieve the goal (the unified user interface), some of these are complementary:  </p>
      <h2>Server-side composition</h2>
      <p>The old school method is to compose the layout on the server. 
        This method gained traction again with the new advent of SSR. 
        One way to construct the pages on the server is with Server Side Includes.</p>
       <ul>
        <li>
          <a
            class="link-highlight"
            href="https://github.com/puzzle-js/puzzle-js"
            >PuzzleJS</a
          >
        </li>
        <li>
          <a
            class="link-highlight"
            href="https://itnext.io/prototyping-micro-frontends-d03397c5f770"
            >Tailor</a
          >: Zalando's layout service - there are more tools to provide a
          comprehensive solution as part of
          <a class="link-highlight" href="https://www.mosaic9.org/"
            >Project Mosaic.</a
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
      <h2>Edge-side composition</h2>
      <p>It means the micro-frontends sit in the CDN and they are served in an optimized way. 
        A markup language, Edge Side Includes can help compose the fragments.</p>
      <h2>Build-time integration</h2>
      <h3>Module Federation</h3> 
      <p>It is an exciting new feature of Webpack 5.</p>
      <h3>npm packages</h3> 
  
  </div>
</template>
