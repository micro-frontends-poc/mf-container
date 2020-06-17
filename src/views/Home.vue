<template>
  <section class="home col-start-2 xl:col-start-4 col-span-10 xl:col-span-6">
    <img
      class="w-full mx-auto"
      src="@/assets/art-1-freepik.jpg"
      alt="Micro-frontends art"
    />
    <article class="mt-16">
      <h1>Micro-frontends</h1>
      <i>Microservices concept for the frontend</i>
      <p class="my-6">
        When several developers work on a frontend project, things can get
        messy:
      </p>
      <ul>
        <li></li>
      </ul>

      <p>
        There are several ways how the concept can be applied to a project. This
        website aims to introduce the common and community-embraced patterns,
        with eveluation of them to make the decision easier for your team.
      </p>
    </article>
    <section>
      <a href="https://martinfowler.com/articles/micro-frontends.html"
        >Cam Jackson: Micro Frontends</a
      >
      A very comprehensive article, if you read only one, choose this!
    </section>
  </section>
</template>

<script>
export default {
  name: "Home"
}
</script>
