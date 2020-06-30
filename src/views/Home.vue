<template>
  <section class="home col-start-2 xl:col-start-4 col-span-10 xl:col-span-6">
    <img
      class="w-full mx-auto"
      src="@/assets/art-1-freepik.jpg"
      alt="Micro-frontends art"
    />
    <p class="text-xs ml-auto text-right text-secondary -mt-5">
      Designed by <a href="https://www.freepik.com/">Freepik</a>
    </p>

    <article class="mt-16">
      <h1>Micro-frontends</h1>
      <i>Microservices concept for the frontend</i>
      <section class="p-6 mt-6 bg-default-soft">
        <p>
          This is an informative site about micro-frontend architecture. Read
          about the general concept here and check out how it can be applied
          with the help of the demo webshops built with
          <router-link to="iframes" class="link-highlight">iframes</router-link
          >,
          <router-link to="web-components" class="link-highlight"
            >Web Components</router-link
          >
          and a JavaScript meta-framework,
          <router-link
            to="javascript"
            class="link-highlight"
            >Single-SPA</router-link
          >.
        </p>
      </section>
      <p class="my-6">
        When several developers work on a frontend project, problems can arise:
      </p>
      <ul class="mb-6">
        <li>
          The project grows so big that there is no one who understands every
          part
        </li>
        <li>
          Developers can feel they can't use the technology stack they would be
          most effective with, possibly stuck with something outdated
        </li>
        <li>
          The deployment happens at a point which is too early for one team and
          too late for the other one
        </li>
      </ul>
      <p>
        Micro-frontend architecture aims to solve these problems by separating
        the project (the Frontend Monolith) to multiple ones (to
        micro-frontends), while keeping the unified user interface. This can
        happen per feature ('horizontal split') or per page ('vertical split',
        see Luca Mezzalira's article below).
      </p>
      <p>
        More and more companies apply micro-frontends, e.g. IKEA, Microsoft,
        Spotify, Zalando.
      </p>
      <p>
        There are more ways how the concept can be applied to a project. This
        website aims to introduce the common and community-embraced patterns,
        with eveluation of them to make the decision easier for your team.
      </p>
      <img
        class="mt-6 mx-auto"
        src="@/assets/mf-scheme.drawio.svg"
        alt="Micro-frontend scheme"
      />
      <figcaption class="table mx-auto mb-6">
        Horizontally split frontend
      </figcaption>
      <h2 class="mt-10">Advantages:</h2>
      <ul class="my-6">
        <li>
          <b>Agile teams:</b> Ideally, teams have a one-to-one relationship with
          micro-frontend projects. If the microservices are organized based on
          the same separation, an agile team can be fully responsible to a
          certain feature, from database to frontend.
        </li>
        <li>
          <b>Smaller projects:</b> Individual projects can be a lot smaller in
          size and complexity.
        </li>
        <li>
          <b>Gradual upgrades:</b> A smaller project also means less
          dependencies, it is easier to upgrade them to newer versions.
          Architectural changes can also be introduced project by project.
        </li>
        <li>
          <b>Faster moving teams:</b> Aside from the common rules that needed to
          be laid down, it is possible to upgrade a project to a different JS
          framework or change a library without affecting the other parts.
        </li>
        <li>
          <b>Independent deployment:</b> Teams can deploy wehenever they want,
          their bugs can remain local and don't render the application
          unreachable (probably a versioning system is needed)
        </li>
        <li>
          <b>Reusability:</b> Components created by a team can be reused in the
          web app, mobile app, TV app, ...
        </li>
      </ul>

      <h2 class="mt-10">Caveats/Challenges:</h2>
      There are many aspects to consider before switching to micro-frontends. It
      has to be a conscious decision, as it fundamentally defines the frontend
      architecture. What is important to note is that micro-frontends is about
      <span class="font-bold italic"
        >developer experience and team management</span
      >
      rather than user experience.
      <ul class="my-6">
        <li>
          <b>Complexity:</b>
          No matter what integration method we choose, it adds quite an
          operational overhead. The architecture can be hard to understand and
          the integration and optimization can make it increasingly complex.
        </li>
        <li>
          <b>Increased download size:</b> More apps mean more code to download
          for the client browser. There can be consensus between the teams on
          what libraries to use and then share it, but it works against the goal
          of this architecture. Project members have to find the tradeoff
          between size and independence.
        </li>
        <li>
          <b>CSS and JS conflicts:</b> There can be naming conflicts of JS
          variables and CSS props, that can cause obscure bugs. This is the
          easiest problem to solve: some methods naturally offer isolation (see
          iframes), while in some cases, the teams can agree on namespaces and
          prefix their variables.
        </li>
        <li>
          <b>SEO:</b> Since the parts live in isolation (especially iframes),
          web crawlers can only see the container's content. If it is important
          in your project, a server-side template composition method is the
          best.
        </li>
        <li>
          <b>Cross-app communication:</b> Ideally the separation of the
          micro-frontends happen in a way that the parts don't or only minimally
          communicate. But if it is necessary, it can happen through the Window
          object or through some publish/subscribe pattern implementation.
        </li>
      </ul>
    </article>
    <section class="mt-6">
      <h2>Useful links:</h2>
      <ul>
        <li>
          <a
            class="link-highlight"
            href="https://martinfowler.com/articles/micro-frontends.html"
            >Cam Jackson: Micro Frontends</a
          >: A very comprehensive article, if you read only one, choose this!
        </li>
        <li>
          <a class="link-highlight" href="https://micro-frontends.org/"
            >Michael Geers: Micro Frontends</a
          >: Focuses more on the team management aspect
        </li>
        <li>
          <a
            class="link-highlight"
            href="https://medium.com/@lucamezzalira/micro-frontends-decisions-framework-ebcd22256513"
            >Luca Mezzalira: Micro-frontends decisions framework</a
          >: A detailed article about the decisions a team has to make before
          switching to micro-frontends
        </li>
      </ul>
    </section>
  </section>
</template>

<script>
export default {
  name: "Home"
}
</script>
