<template>
  <div>
    <Base>
      <h2>PORTFOLIO</h2>
      <div class="portfolio__contain">
          NEPTUNE
            <h6 class="portfolio__medium">CODE + DESIGN</h6>
      </div>
      <div class="portfolio__contain">
           MACHINIST
	    <h6 class="portfolio__medium">PHOTOGRAPHY</h6>
      </div>
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
  margin-bottom: 10vh;
}
.portfolio__contain {
  margin-bottom: 8vh;
  padding: 2vh;
  border: 1px solid #F1F1F1;
  border-left: 2px solid coral;
  -webkit-box-shadow: 7px 17px 25px -25px rgba(0,0,0,0.39);
  -moz-box-shadow: 7px 17px 25px -25px rgba(0,0,0,0.39);
  box-shadow: 7px 17px 25px -25px rgba(0,0,0,0.39);
}
.portfolio__medium {
  margin: 0;
  color: darkgrey;
}
.portfolio__contain:hover {
  cursor: pointer;
  margin-left: 5px;
}
</style>
