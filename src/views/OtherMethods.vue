<template>
  <div class="about col-start-2 xl:col-start-4 col-span-10 xl:col-span-6">
    <h1>Other methods</h1>
    <p>
      The three demonstrated methods in this website integrate the parts
      run-time and on client-side. There are other ways to achieve the goal (the
      unified user interface), some of these are complementary:
    </p>
    <h2 class="mt-6">Server-side composition</h2>
    <p>
      The old school method is to compose the layout on the server. This method
      gained traction again with the new advent of SSR. One way to construct the
      pages on the server is with Server Side Includes.
    </p>
    <ul>
      <li>
        <a class="link-highlight" href="https://github.com/puzzle-js/puzzle-js"
          >PuzzleJS</a
        >: Promises SEO friendliness
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
        <a class="link-highlight" href="https://piral.io/">Piral</a>: Specialized in portal solutions.
      </li>
    </ul>
    <h2 class="mt-6">Edge-side composition</h2>
    <p>
      It means the micro-frontends sit in the CDN and they are served in an
      optimized way. A markup language, Edge Side Includes can help compose the
      fragments. It can be combined with e.g. Web Components, as they can be fragments 
      the template is constructed of. 
    </p>
    <h2 class="mt-6">Build-time integration</h2>
    <h3 class="mt-6">Module Federation</h3>
    <p>
      Webpack 5 – which is in beta – introduces Module Federation, an exciting
      new feature. It “allows a JavaScript application to dynamically run code
      from another bundle/build, on both client and server.” (Jackson Z. , 2020)
      This would essentially mean that the frontends are used in the container
      without having to import them or include them in the build. It can be done
      by specifying the required modules in the host (which imports the module)
      and the exposed modules in the remote. Its advantages are that the two
      projects can share dependencies that are dynamically handled by Webpack
      (e.g. if both frontends utilize React, the browser will only download it
      once) and the projects can have circular dependencies (a project can be a
      host and a remote in the same time).
    </p>
    <h3 class="mt-6">npm packages</h3>
    <p>The frontend projects can also be distributed as npm packages. However, 
      it creates a close coupling between the container and the part and it 
      would mean we lose the independent deployment functionality. If it is 
      acceptable for your project, e.g. you increment with versions and want 
      the container to have full control over when a part can be updated, it 
      can be a good solution.</p>
  </div>
</template>
