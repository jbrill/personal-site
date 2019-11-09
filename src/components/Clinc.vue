<template>
  <div>
    <Base>
      <h2 style="margin: 0;">CLINC</h2>
      <p style="font-style: italic;">Redefining Conversation AI for Enterprise.</p>
      <h4>ABOUT</h4>
      <p><a href="https://clinc.com" target="_blank">Clinc</a> is a state-based conversational AI platform, fueled by deep-learning techniques and a contextual, top down approach to dialog management.</p>
      <h4>PAST WORK</h4>
      <p>Upon graduation, I began working at Clinc as a Platform Engineer. For several months, I worked on the core platform, where our core users -- typically developers and conversational designers from a variety of companies (Financial / Automotive / Gaming / Healthcare) -- build and tweak their Artificial Intelligence projects.</p>
      <img width="70%" src="@/assets/images/portfolio/clinc/clinc.png" />
      <p> As our UI is browser-based, I began working on our responsive web application, consisting of a toolset of Vue for the front-end, Express for serving our routes, Selenium for our test suites, and Django for our backend API.</p>
      <p>Fast-forward one year, and our stack has changed significantly, as well as my responsibilites at Clinc. I transitioned to an Infrastructure Engineer, where I'd combine my platform development expertise with the dev-ops skills needed to develop self-sufficient microservices. Soon after, I helped to deploy our stack on customer environments, eventually helping to form a new internal team, Customer Success Engineering. This team is focused on providing continuous delivery to customer environments, as well as implementing the internal tooling required for repeatable success.</p>
      <h5>DEMOS CONTAINER</h5>
      <h6>PROBLEM</h6>
      <p>Our team addressed a need at the company. We needed to bridge sales, engineers, and marketing. There was no centralization of the different verticals where Clinc deployed conversational assistants.</p>
      <h6>PROCESS</h6>
      <p>We defined the work into two sprint cycles: one for the initial development and design, the second to address user feedback from the initial impelementation.</p>
      <h6>RESULT</h6>
      <div>
          <img width="70%" src="@/assets/images/portfolio/clinc/1.png" /><br>
          <img @click.stop width="50vw" src="@/assets/arrow_downward-24px.svg" /><br>
          <img width="70%" src="@/assets/images/portfolio/clinc/2.png" /><br>
          <img @click.stop width="50vw" src="@/assets/arrow_downward-24px.svg" /><br>
          <img width="70%" src="@/assets/images/portfolio/clinc/3.png" /><br>
      </div>
      <h4>PRESENT WORK</h4>
      <h5>INSTITUTION API</h5>
      <p>When I joined Clinc, we were loading our Institutions (highly abstracted users) via statically lived Json <a href="https://code.djangoproject.com/wiki/Fixtures" target="_blank">fixture files</a>. One of the imperative Infrastructure goals was to modify our stack to be more nimble and easily deployable. To do this, we needed to transition our Institution Deployment model to be more dynamic.</p>
      <h6>PROCESS</h6>
      <p>My development approach was fairly bottom-up, beginning with the database model schema changes and migrations.</p>
      <p>I then built out our REST API endpoints, following proper serialization and error handling patterns.</p>
      <p>I'm now building out the front-end to consume the API. I had to migrate static pages to our Single-Page Application. We followed a strict pattern of using Vue for our front-end framework, in conjunction with Typescript, LESS, and BEM standards. Our end-to-end testing infrastructure has also pivoted from Selenium to now use Cypress.</p>
      <h6>RESULT</h6>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/MT7NfmbBMg0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <h4>REFLECTIONS AND FUTURE WORK</h4>
      <p>As I'm currently training to become a Solutions Architect, I'm hoping to incorporate design principles into our product development workflow.</p>
      <p>I will have the unique opportunity to interact with our clients throughout the deployment and development lifecycles. The UX space surrounding building conversational agents is essentailly untouched. I hope to help contribute and build frameworks for evaluating conversations, as well as the technology that empowers them.</p>
    </Base>
  </div>
</template>

<script>
import Base from "./Base.vue";

export default {
  name: "MusicAndCulture",
  components: {
    Base
  }
};
</script>

<style scoped>
* {
  text-align: center;
}
p {
  font-size: smaller;
}
.about__contain__footnote {
  font-size: 30%;
  margin-top: -5px;
}
.about__contain__footnote:hover {
  background-color: coral;
}
img:hover {
  cursor: pointer;
  opacity: 0.7;
}
</style>
