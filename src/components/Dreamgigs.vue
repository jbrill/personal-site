<template>
  <div>
    <Base>
      <h2 style="margin: 0;">DREAMGIGS</h2>
      <p style="font-style: italic;">Helping Job Seekers Obtain the Career Skills to Reach their Dream Job</p>
      <h4>Introduction</h4>
      <p>DreamGigs was the primary project I worked on during my work with Social Innovations Group (<a href="http://socialinnovations.us/" target="_blank">SIG</a>). My work with the group spanned from June 2017 to December 2018.</p>
      <p>Upon initially meeting with Dr. Tawanna Dillahunt, we discussed her prior work surrounding technological barriers in developing social and cultural capital, particularly in economically distressed areas. Previous research  "Analyzing Employment Technologies for Economically Distressed Individuals" <a href="http://www.tawannadillahunt.com/wp-content/uploads/2014/03/wip0476-jenSC.pdf" target="_blank" class="about__contain__footnote"> [1]</a> and "Designing for Disadvantaged Job Seekers: Insights from Early Investigations" <a href="http://www.tawannadillahunt.com/wp-content/uploads/2016/04/DesigningforJobSeekersv9-final.pdf" target="_blank" class="about__contain__footnote"> [2]</a> touch on how popular job-seeker platforms like LinkedIn, TaskRabbit, and Indeed benefit users with an already existing and strong network, rather than job-seekers without a strong network looking to build career-related skills.</p> 
      <p>Moreover, underserved populations lack the ability to transition to new career paths, having no indication of what skills they need to build to change paths. DreamGigs aims to provide a gig-services platform, in which a user’s intended career path corresponds to nearby gigs, which all build skills needed for that ideal career.</p>
      <h4>Motivation</h4>
      <p>Our motivation in DreamGigs is to be the first application to successfully bridge the gap between gigs and career paths.
      If successful, DreamGigs could change the way in which our economy functions within low-SES communities. </p>
      <p>The goal is to alleviate the large gap between low-SES populations versus those with more resources, particularly in job-searches.</p>
      <h4>Problem Statement</h4>
      <p>Low SES-populations, specifically in the Detroit Metro Area, lack social capital in finding a job. Citizens of Detroit often feel frustrated due to a perceived lack of self-efficacy.</p>
      <p>Our scope is specific to Detroit-Metro area for now, but our technology scope should be applicable to any area.
      </p>
      <h3>PHASE I: PROTOTYPE DESIGN AND IMPLEMENTATION</h3>

      <h4>Designing the Tool</h4>
      <p>Sketching the user flow</p>
      <p>During the early design phase of DreamGigs, I set out out to create an initial <a href="https://projects.invisionapp.com/d/main#/projects/prototypes/11735762" target="_blank">prototype hosted on InVision</a> [using Sketch as well].</p>
      <p>After conducting some pilot testing with the prototype, I iterated on some <a href="https://projects.invisionapp.com/d/main#/projects/prototypes/11735762" target="_blank">medium-fidelity mockups</a> before continuing onto the development of an MVP.</p>
      <h4>Developing the Tool</h4>
      <img width="100%" src="@/assets/images/portfolio/dreamgigs/architecture.jpg"/>
      <h5>Development of Skillscraper</h5>
      <p>Skillscraper was a tool used to map what skills a job-seeker would need to transition from their current job to a new job.</p>
      <h5>Development of Classifier (Craigslist Postings -> O-NET Categories)</h5>
      <p>Our initial choice of a job-posting site was Craigslist. In order to classify these job-postings, we needed to obtain training data. We found O-NET, a publically accessible database, supplied tons of data correlating job titles with related skills. By leveraging this data with Sklearn's Cross Validation module, I was able to create a model with roughly an 80% prediction success rate. We could now feed the model any job-related text, and get back the relevant job title.</p>
      <h5>Development of Gig-Retriever (Skills -> Craigslist Postings)</h5>
      <p>The next step in my development workflow was to create the gig-retriever. After obtaining the subset of skills needed to obtain a dream job, as well as a classifier to map Craigslist gigs to jop titles, we were almost ready for the full user flow.</p>
      <img src="@/assets/images/portfolio/dreamgigs/skillscraper.png" />
      <h5>Development of Front-End</h5>
      <p>The front-end was relatively simple. The project was a multi-page app, populating our pages with data from our Flask backend, and handling User Interaction with Jquery. We served the templates with our Flask routing, and used material design for UI elements and icons.</p>
      <h5>Infrastructure</h5>
      <p>Our product was hosted on a Linux machine on Digital Ocean. We were running Flask atop of Gunicorn HTTP server with Continuous Integration and Deployment linked to our Github repository.</p>
      <p></p>
      <h3>PHASE II: EARLY EVALUATION</h3>
      <h4>Obtaining Feedback from our Prototype</h4>
      <h5>Usability Evalutions</h5>
      <h5>Focus Groups</h5>
      <img width="100%" src="@/assets/images/portfolio/dreamgigs/sketch1.jpg" />
      <img width="100%" src="@/assets/images/portfolio/dreamgigs/sketch2.jpg" />
      <h4>Writeup - Late-Breaking Work</h4>
      <p>The final paper can be seen <a href="http://socialinnovations.us/assets/papers/Dillahunt_CHI19b.pdf" target="_blank">here</a>.</p>
      <h4>Video Demo</h4>
      <iframe 
          frameborder="0"
          allowfullscreen 
          style="width:100%;height:100%;margin-bottom:5vh;"
          src="https://youtube.com/embed/pti87SpLpWg?controls=0"></iframe>
      <h4>Reflections</h4>
      <p>Unfortunately, the Late-Breaking Work was not accepted to CHI 2018.</p>
      <p>As a more experienced software engineer, I would've liked to pursue a microservice architecture for our infrastructure. I would've also forgone a Multi-Page App for a Single-Page App.</p>
    </Base>
  </div>
</template>

<script>
import Base from "./Base.vue";

export default {
  name: "Dreamgigs",
  components: {
    Base
  }
};
</script>

<style scoped>
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
