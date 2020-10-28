<template>
  <div>
    <h2 style="margin: 0;">DREAMGIGS</h2>
    <p style="font-style: italic;">Helping Job Seekers Obtain the Career Skills to Reach their Dream Job</p>
    <iframe 
        frameborder="0"
        allowfullscreen 
        width="560"
        height="315"
        src="https://youtube.com/embed/pti87SpLpWg?controls=0"></iframe>
    <img style="margin-top: 2vw" width="100%" src="@/assets/images/portfolio/dreamgigs/alex.jpg" />
    <h4>Introduction</h4>
    <p>DreamGigs was the primary project I worked on during my time with Social Innovations Group (<a href="http://socialinnovations.us/" target="_blank">SIG</a>). My work with the group spanned from June 2017 to December 2018.</p>
    <p>Upon initially meeting with Dr. Tawanna Dillahunt, we discussed her prior work surrounding technological barriers in developing social and cultural capital, particularly in economically distressed areas. Her previous research,  "Analyzing Employment Technologies for Economically Distressed Individuals" <a href="http://www.tawannadillahunt.com/wp-content/uploads/2014/03/wip0476-jenSC.pdf" target="_blank" class="about__contain__footnote"> [1]</a> and "Designing for Disadvantaged Job Seekers: Insights from Early Investigations" <a href="http://www.tawannadillahunt.com/wp-content/uploads/2016/04/DesigningforJobSeekersv9-final.pdf" target="_blank" class="about__contain__footnote"> [2]</a>, touch on how popular job-seeker platforms like LinkedIn, TaskRabbit, and Indeed benefit users with an already existing and strong network, rather than job-seekers without a strong network looking to build career-related skills.</p> 
    <p>This was the problem we aimed to solve -- populations without strong social and cultural capital lack the ability to transition to new career paths, having no indication of what skills they need to build to change paths. DreamGigs aims to provide a gig-services platform, in which a user’s intended career path corresponds to nearby gigs, which all build skills needed for that ideal career.</p>
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
    <h6>Sketching a User Flow</h6>
    <p>Our sketching sessions occured during weekly SIG meeting, where the group (consisting of a mesh of undergraduate, graduate, and post-docs) and I would whiteboard and iteratively alter potential user flows:</p>
    <div>
    <img width="50%" src="@/assets/images/portfolio/dreamgigs/sketch1.jpg" />
    <img width="50%" src="@/assets/images/portfolio/dreamgigs/sketch2.jpg" />
    </div>
    <h6>Building an Initial Prototype</h6>
    <p>Based off our user flow sketches, I set out out to create an initial <a href="https://projects.invisionapp.com/d/main#/projects/prototypes/11735762" target="_blank">prototype hosted on InVision</a> [using Sketch for design].</p>
    <h6>Conducting Pilot Testing</h6>
    <p>Duration: 30 minutes</p>
    <p>Materials: Laptop (Screen Recorded)</p>
    <h6>Time Breakdown</h6>
    <ul style="list-style-type: none;font-size: smaller; padding: 0;">
        <li>Setup (3-5 min)</li>
        <li>Warmup (5 min)</li>
        <li>Prototype Walkthrough (5 min)</li>
        <li>Questions (15 min)</li>
        <li>Wrap-up and Reflection (3-5 min)</li>
    </ul>
    <h6>Iterating on High-Fidelity Wireframes</h6>
    <p>After pilot testing the prototype, we iterated to come up with high-fideltiy wireframes before beginning development. You can view the mockups <a href="https://projects.invisionapp.com/d/main#/projects/prototypes/11735762" target="_blank">here</a>.</p>
    <h4>Developing the Tool</h4>
    <p>Before development, I met with Dr. Walter Lasecki to brainstorm the technical architecture and the AI techinques needed:</p>
    <img width="70%" src="@/assets/images/portfolio/dreamgigs/architecture.jpg"/>
    <h5>Development of Skillscraper</h5>
    <p>We needed a tool to map what skills a job-seeker would need to transition from their current job to a new job. We were able to use DataAtWork, a lightweight API, in order to generate the subset of skills needed to move from one job to the next.</p>
    <h5>Development of Classifier (Craigslist Postings -> O-NET Categories)</h5>
    <p>Our initial choice of a job-posting site was Craigslist. In order to classify these job-postings, we needed to obtain training data. We found O-NET, a publically accessible database, supplied tons of data correlating job titles with related skills. By leveraging this data with Sklearn's Cross Validation module, I was able to create a model with roughly an 80% prediction success rate. We could now feed the model any job-related text, and get back the relevant job title.</p>
    <h5>Development of Gig-Retriever (Skills -> Craigslist Postings)</h5>
    <p>The next step in my development workflow was to create the gig-retriever. After obtaining the subset of skills needed to obtain a dream job, as well as a classifier to map Craigslist gigs to jop titles, we were almost ready for the full user flow. However, we needed a reverse-classifier to map our skills to our Craigslist postings:</p>
    <img width="70%" src="@/assets/images/portfolio/dreamgigs/skillscraper.png" />
    <p>Note: The number to the right of the gig was the "significance metric" provided by DataAtWork. We sent DataAtWork our Career Title supplied by our classifier, and got back a significance metric signifying the importance of the specified skill to that career title.</p>
    <h5>Development of Front-End</h5>
    <p>The front-end was relatively straightforward. The project was a multi-page app, populating our pages with data from our Flask backend, and handling User Interaction with JQuery. We served the templates with our Flask routing, and used material design for UI elements and icons.</p>
    <h5>Infrastructure</h5>
    <p>Our product was hosted on a Linux machine on Digital Ocean. We were running Flask atop of Gunicorn HTTP server with Continuous Integration and Deployment linked to our Github repository.</p>
    <h4>Final Product</h4>
    <p>The codebase can be seen <a href="https://github.com/jbrill/Dreamgigs-Skillscraper/" target="_blank">here</a>.</p>
    <h3>PHASE II: EARLY EVALUATION</h3>
    <h4>Obtaining Feedback from our Prototype</h4>
    <h5>Usability Evalutions</h5>
    <p>I worked closely with a graduate student (who would later take over development of the project) during the usability evaluation stage of our product. We conducted evaluation sessions internal to the School of Information, centered around questionnaires after product walkthroguhs. We gained the following feedback from our participants (n=5):</p>
    <ul style="padding: 0; list-style-type: none;font-size: 1rem">
        <li>Alignment of gigs and identified skills:</li> <p>All of our participants (n = 5) expressed that the gigs from Craiglist are unprofessional and irrelevant to their job.</p>
        <li>Variety of gigs:</li> <p>Four out of five participants (n = 4) highlighted that the volunteer opportunities should be included in the gigs.</p>
        <li>Ease of use:</li> <p>In the evaluation sessions, all participants (n = 5) found DreamGigs prototype easy and straightforward to use. Three out of five participants (n = 5) pointed out the prototype should provide more instructions and clarifications to the users.</p>
    </ul>
    <h4>Late-Breaking Work and Reflections</h4>
    <p>I worked closely with Tawanna and a PhD candidate to flesh our the research paper. The final draft of the Late-Breaking Work can be seen <a href="https://drive.google.com/file/d/1e9Pzi6WgDfXhljCpeEEwwVibjyJA4uvw/view?usp=sharing" target="_blank">here</a>.</p>
    <p>Unfortunately, the Late-Breaking Work was not accepted to CHI 2018. Most reviewers felt the work was still too initial for even a work in progress, and that more design thinking would benefit the paper.</p>
    <p>Since then, the Social Innovations Group continued to iterate on the product, and eventually was accepted to CHI 2019. The final paper can be seen <a href="http://socialinnovations.us/assets/papers/Dillahunt_CHI19b.pdf" target="_blank">here</a>.</p>
  </div>
</template>

<script>
export default {
  name: "Dreamgigs",
  components: {
  }
};
</script>

<style scoped>
p {
  font-size: 1rem;
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
