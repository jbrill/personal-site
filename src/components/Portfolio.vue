<template>
  <div>
    <Base>
      <h2 style="color: navy;">PORTFOLIO</h2>
      <!--<router-link to="/portfolio/neptune" tag="div" class="portfolio__contain">
          NEPTUNE
          <h6 class="portfolio__medium">FULL-STACK DEVELOPMENT + DESIGN</h6>
          <p>Present</p>
      </router-link>-->
      <router-link to="/portfolio/disruption" tag="div" class="portfolio__contain">
           DISRUPTION
	    <h6 class="portfolio__medium">PHOTOJOURNALISM</h6>
        <p>Fall 2017</p>
      </router-link>
      <router-link to="/portfolio/dreamgigs" tag="div" class="portfolio__contain">
           DREAMGIGS
	    <h6 class="portfolio__medium">USER RESEARCH + RAPID APPLICATION DEVELOPMENT</h6>
        <p>Summer, Fall 2018</p>
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
  }
};
</script>

<style>
h2 {
  margin-top: 0;
  margin-bottom: 8vh;
}
.portfolio__contain {
  margin-bottom: 8vh;
  padding: 2vh;
  border: 1px solid #F1F1F1;
  border-left: 2px solid navy;
  -webkit-box-shadow: 7px 17px 25px -25px rgba(0,0,0,0.39);
  -moz-box-shadow: 7px 17px 25px -25px rgba(0,0,0,0.39);
  box-shadow: 7px 17px 25px -25px rgba(0,0,0,0.39);
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
