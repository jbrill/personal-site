<template>
  <div>
    <Base>
      <h2 style="color: #505050;">PORTFOLIO</h2>
      <!--<router-link to="/portfolio/neptune" tag="div" class="portfolio__contain">
          NEPTUNE
          <h6 class="portfolio__medium">FULL-STACK DEVELOPMENT + DESIGN</h6>
          <p>Present</p>
      </router-link>-->
      <!--<router-link to="/portfolio/dreamgigs" tag="div" class="portfolio__contain">
           CLINC
	    <h6 class="portfolio__medium">FULL-STACK ENGINEERING</h6>
        <p>Present</p>
      </router-link>-->
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
          <img @click.stop style="margin-top:-125px"src="@/assets/images/portfolio/disruption/final/iphone.jpg"/>
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
          <img style="margin-top: -125px" @click.stop src="@/assets/images/portfolio/musicandculture/snippet.png"/>
        </div>
        <div class="portfolio__contain-text">
          <h4>MUSIC + CULTURE</h4>
  	      <h6 class="portfolio__medium">DOCUMENTARY</h6>
          <p>Spring 2014</p>
        </div>
      </router-link>
    </Base>
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
    blockClick(event) {
      if (event.target.tagName === 'IMG') {
        console.log("YO");
      }
    }
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
  height: 25vw;
  -webkit-box-shadow: 7px 17px 25px -25px rgba(0,0,0,0.39);
  -moz-box-shadow: 7px 17px 25px -25px rgba(0,0,0,0.39);
  box-shadow: 7px 17px 25px -25px rgba(0,0,0,0.39);
}
.portfolio__contain-img img {
  width: 100%;
}
.portfolio__contain-img{
  border-bottom: 2px solid coral;
  height: 50%;
  overflow: hidden;
}
.portfolio__contain-text {
  padding-top: 2vw;
  padding-left: 2vw;
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
