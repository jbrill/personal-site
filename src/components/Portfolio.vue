<template>
  <div>
    <Base>
      <h2 style="color: #505050;">PORTFOLIO</h2>
      <!--<router-link to="/portfolio/neptune" tag="div" class="portfolio__contain">
          NEPTUNE
          <h6 class="portfolio__medium">FULL-STACK DEVELOPMENT + DESIGN</h6>
          <p>Present</p>
      </router-link>-->
      <router-link to="/portfolio/music_and_culture" tag="div" class="portfolio__contain">
        <div class="portfolio__contain-img">
          <img style="" @click.stop src="@/assets/images/portfolio/musicandculture/snippet.png"/>
        </div>
        <div class="portfolio__contain-text">
          <h4>7 in 7</h4>
  	      <h6 class="portfolio__medium">VARIOUS MEDIUMS</h6>
          <p>Fall 2020</p>
        </div>
      </router-link>
      <router-link to="/portfolio/clinc" tag="div" class="portfolio__contain">
        <div class="portfolio__contain-img">
<!--          <svg style="background-color: black;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 192">
          <defs>
          </defs>
          <path style="fill: silver" d="M565.88,154.21A75.94,75.94,0,0,0,593.55,149V132.81a60.59,60.59,0,0,1-26.2,6,42.66,42.66,0,0,1-10.44-1.11,23.65,23.65,0,0,1-8.64-4.43q-4.27-3.32-6.43-10.2a58.56,58.56,0,0,1-2.16-17.31q0-19.67,7.35-26.36t20.32-6.7h.37a58.75,58.75,0,0,1,25.84,6.19V62.53a75.2,75.2,0,0,0-27.67-5.23q-21.42,0-32.61,12.41t-11.18,36q0,23.64,11.18,36T565.88,154.21ZM439.2,152.76V76.4A72,72,0,0,1,461.33,73q12.82,0,17.07,4.79t4.24,13.08v61.9h17.58V92.18q0-16.46-10.14-25.74t-28-9.29a89.5,89.5,0,0,0-40,9.65v86Zm-47.89,0v-94H374.17v94Zm.55-108.54V26.06H373.61V44.22ZM342.61,152.76V23H325.47V152.76Zm-69.4,1.45A76,76,0,0,0,300.89,149V132.81a60.57,60.57,0,0,1-26.2,6,42.7,42.7,0,0,1-10.44-1.11,23.65,23.65,0,0,1-8.64-4.43q-4.28-3.32-6.44-10.2A58.75,58.75,0,0,1,247,105.76q0-19.67,7.36-26.36t20.32-6.7h.37a58.75,58.75,0,0,1,25.84,6.19V62.53a75.22,75.22,0,0,0-27.68-5.23q-21.42,0-32.6,12.41t-11.18,36q0,23.64,11.18,36T273.21,154.21Z"/>
          <path style="fill: silver;" class="cls-1" d="M190.28,82.56l-9.21-15.92c-1.78-3.08-2.51-5.59-2-7.67a9,9,0,0,1,4.51-5.39l5-2.93-7.37-12.73-5.05,2.92a9,9,0,0,1-6.91,1.22c-2.09-.55-3.9-2.43-5.68-5.51l-9.21-15.92c-2.87-4.94-6.65-8.17-11.67-9.52-4.17-1.11-8.94-.25-14.65,3.06l-11.2,6.48,7.44,12.84,5.81-3.37c3.3-1.91,5.24-2.59,7.15-2.08s3.67,2.28,5.84,6l8.58,14.82c4.57,7.9,10.43,7.15,13.92,6.6-2.22,2.75-5.8,7.45-1.21,15.36L173,85.66c2.16,3.74,2.76,6,2.32,8S173.25,97,170,98.86l-5.82,3.38,7.44,12.84,11.2-6.48c5.7-3.3,8.84-7,9.94-11.18C194.07,92.39,193.14,87.5,190.28,82.56Z"/>
          <path style="fill: silver;" class="cls-1" d="M62.6,91.77A37.76,37.76,0,1,0,73.84,65.14,37.66,37.66,0,0,0,62.6,91.77ZM85.52,77a21.14,21.14,0,1,1-6.29,14.91A21,21,0,0,1,85.52,77Z"/><polygon style="fill: silver" class="cls-1" points="60.34 26.56 74.27 34.62 81.64 21.91 53.46 5.58 2.05 94.3 30.23 110.63 37.6 97.91 23.68 89.84 60.34 26.56"/>
          <path style="fill: silver;" class="cls-1" d="M126.54,171.65c5.34,0,10.8-.35,15.65-3.13s8.5-6.66,12.5-10.65L144,147.2c-2.91,2.89-4.49,4.71-8,6.77q-3.29,1.82-10.19,1.8H74.46q-6.91,0-10.19-1.8c-3.52-2.06-5.1-3.87-8-6.77L45.62,157.87c4,4,7.77,7.87,12.5,10.65s10.31,3.14,15.64,3.13Z"/>
</svg> -->
          <img style="background-color:black" @clinc.stop src="@/assets/images/portfolio/clinc/clinc_intro.png" />
        </div>
        <div class="portfolio__contain-text">
          <h4>CLINC</h4>
  	      <h6 class="portfolio__medium">PRODUCT + INFRASTRUCTURE ENGINEERING</h6>
          <p>Present</p>
        </div>
      </router-link>
      <router-link to="/portfolio/dreamgigs" tag="div" class="portfolio__contain">
        <div class="portfolio__contain-img">
          <img @click.stop src="@/assets/images/portfolio/dreamgigs/architecture.jpg"/>
        </div>
        <div class="portfolio__contain-text">
          <h4>DREAMGIGS</h4>
  	      <h6 class="portfolio__medium">USER RESEARCH + RAPID APPLICATION DEVELOPMENT</h6>
          <p>Summer, Fall 2018</p>
        </div>
      </router-link>
      <router-link to="/portfolio/disruption" tag="div" class="portfolio__contain">
        <div class="portfolio__contain-img">
          <img @click.stop style="" src="@/assets/images/portfolio/disruption/final/iphone.jpg"/>
        </div>
        <div class="portfolio__contain-text">
          <h4>DISRUPTION</h4>
  	      <h6 class="portfolio__medium">PHOTOJOURNALISM</h6>
          <p>Fall 2017</p>
        </div>
      </router-link>
      <router-link to="/portfolio/genre_mixer" tag="div" class="portfolio__contain">
        <div class="portfolio__contain-img">
          <img @click.stop src="@/assets/images/portfolio/genremixer/project.png"/>
        </div>
        <div class="portfolio__contain-text">
          <h4>GENRE MIXER</h4>
  	      <h6 class="portfolio__medium">ALGORITHMIC COMPOSITION + PERFORMANCE</h6>
          <p>Fall 2016</p>
        </div>
      </router-link>
      <router-link to="/portfolio/music_and_culture" tag="div" class="portfolio__contain">
        <div class="portfolio__contain-img">
          <img style="" @click.stop src="@/assets/images/portfolio/musicandculture/snippet.png"/>
        </div>
        <div class="portfolio__contain-text">
          <h4>MUSIC + CULTURE</h4>
  	      <h6 class="portfolio__medium">DOCUMENTARY</h6>
          <p>Spring 2014</p>
        </div>
      </router-link>
  </div>
</template>

<script>
import Base from "./Base.vue";

export default {
  name: "Portfolio",
  components: {
    Base
  },
  methods: {
  },
  mounted() {
    document.addEventListener('click', this.blockClick);
  }
};
</script>

<style>
* {
  text-align: left;
}
h2 {
  margin-top: 0;
  margin-bottom: 8vh;
}
.portfolio__contain {
  margin-bottom: 8vh;
  border: 1px solid #F1F1F1;
  border-left: 2px solid navy;
  -webkit-box-shadow: 7px 17px 25px -25px rgba(0,0,0,0.39);
  -moz-box-shadow: 7px 17px 25px -25px rgba(0,0,0,0.39);
  box-shadow: 7px 17px 25px -25px rgba(0,0,0,0.39);
}
.portfolio__contain-img img:hover {
  opacity: 1;
  cursor: default;
}
.portfolio__contain-img img {
  width: 100%;
  border-bottom: 2px solid coral;
}
.portfolio__contain-img{
  height: 50%;
  overflow: hidden;
}
.portfolio__contain-text {
  padding-top: 2vw;
  padding-left: 2vw;
  padding-bottom: 2vw;
}
.portfolio__contain-text h4 {
  margin: 0;
}
.portfolio__medium {
  margin: 0;
  color: navy;
}
.portfolio__contain:hover {
  cursor: pointer;
  margin-left: 5px;
}
.portfolio__contain p {
  font-size: smaller;
  margin-bottom: 0;
}
</style>
