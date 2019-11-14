<template>
  <div>
    <Base>
      <h2 style="margin: 0;">CLINC</h2>
      <p style="font-style: italic;">Redefining Conversation AI for Enterprise.</p>
      <h4>ABOUT</h4>
      <p><a href="https://clinc.com" target="_blank">Clinc</a> is a state-based conversational AI platform, fueled by deep-learning techniques and a contextual, top down approach to dialog management.</p>
      <img width="70%" src="@/assets/images/portfolio/clinc/clinc.png" />
      <p style="font-size: small; font-weight: 100">Clinc's State Graph builder page.</p>
      <h4>PAST WORK</h4>
      <p>Upon graduation, I began working at Clinc as a Platform Engineer. For several months, I worked on the core platform, where our core users -- typically developers and conversational designers from a variety of verticals (Financial / Automotive / Gaming / Healthcare) -- build and tweak their Artificial Intelligence projects.</p>
      <p> As our UI is browser-based, I began working on our responsive web application, comprised of a set of open-source frameworks including Vue for the front-end, Express for serving our routes, Selenium for our test suites, and Django for our backend API.</p>
      <p>Fast-forward one year, and our stack has changed significantly, as well as my responsibilites at Clinc. I transitioned to an Infrastructure Engineer, where I'd broaded my platform development expertise to include the dev-ops skills needed to develop self-sufficient microservices. Soon after, deployed our stack in customer environments, eventually helping to form a new internal team, Infrastructure Customer Solutions Engineering (CSE). This team is focused on working with customers to architect end-to-end solutions, integrate backend features, and deploy the platform into customer environments, as well as implementing the internal tooling required for repeatable success.</p>
      <p>Our team tackles projects that are inherently customer-facing, yet bring our company internal benefit.</p>
      <h5>DEMOS CONTAINER</h5>
      <h6>PROBLEM</h6>
      <p>Another key responsibility as a CSE is to bridge the gap between  sales, engineering, and marketing. At the time, there was no centralization of demoware for Clinc’s conversational assistants across verticals.</p>
      <h6>PROCESS</h6>
      <p>We defined the work into two sprint cycles: one for the initial development and design, the second to address user feedback from the initial impelementation.</p>
      <h6>RESULT</h6>
      <h6 style="font-weight: 100">SPRINT #2</h6>
      <div>
          <img width="70%" src="@/assets/images/portfolio/clinc/1.png" /><br>
          <img @click.stop width="50vw" src="@/assets/arrow_downward-24px.svg" /><br>
          <img width="70%" src="@/assets/images/portfolio/clinc/2.png" /><br>
          <img @click.stop width="50vw" src="@/assets/arrow_downward-24px.svg" /><br>
          <img width="70%" src="@/assets/images/portfolio/clinc/3.png" /><br>
      </div>
      <h4>PRESENT WORK</h4>
      <h5>INSTITUTION API</h5>
      <h6>PROBLEM</h6>
      <p>In Clinc’s legacy code, Institutions’ metadata (highly abstracted users) was being loaded via statically lived Json fixture files. In Clinc’s legacy code, Institutions’ metadata (highly abstracted users) was being loaded via statically lived <a href="https://code.djangoproject.com/wiki/Fixtures" target="_blank">json fixture files</a>. One of the imperative Infrastructure goals was to modify our stack to be more nimble and easily deployable. To do this, we needed to transition our Institution Deployment model to be more dynamic.</p>
      <h6>PROCESS</h6>
      <p>My development approach was fairly bottom-up, beginning with the database model schema changes and migrations.</p>
      <p>I then built out our REST API endpoints, following proper serialization and error handling patterns.</p>
      <p>I’m now implementing the front-end in the platform to consume the API which will allow our core users to be shipped a "clean" software stack, and customize their experience with on-premise institution creation. In doing this, I enhanced and migrated static pages to a Single-Page Application utilizing Vue, in conjunction with Typescript, LESS, and BEM standards. For validation of the application, I’m creating end-to-end test cases using our recently integrated Cypress testing framework.</p>
      <h6>RESULT</h6>
      <img width="100%" src="@/assets/images/portfolio/clinc/before.png" />
      <p style="font-size: small; font-weight: 100">User Management page before.</p>
      <h6 style="font-weight: 100">SPRINT #1</h6>
      <img style="font-size: small" width="100%" src="@/assets/images/portfolio/clinc/gif2.gif" /><p style="font-size: small">Revamped User Management page.</p>
      <img width="100%" src="@/assets/images/portfolio/clinc/gif1.gif" /><p style="font-size: small">Institution Management page.</p>
      <p>View the feature in its entirety <a href="https://www.youtube.com/embed/MT7NfmbBMg0" target="_blank">here</a>.</p>
      <h4>REFLECTIONS AND FUTURE WORK</h4>
      <p>As I'm currently training to become a Solutions Architect, I'm hoping to incorporate design principles into our product development workflow.</p>
      <p>I will have the unique opportunity to interact with our clients throughout the deployment and development lifecycles. The UX space surrounding building conversational agents is essentailly untouched. I hope to help contribute and build frameworks for evaluating conversations, as well as the technology that empowers them.</p>
      <p>I'm hoping to pursue a graduate program in design and HCI next year in order to further my design skill set, and gain the appropriate knowledge to fulfill my dream of bringing UX to clients.</p>
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
