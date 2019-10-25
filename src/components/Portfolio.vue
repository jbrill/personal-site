<template>
  <div>
    <Base>
      <div class="portfolio__contain">
          NEPTUNE
      </div>
      <div class="portfolio__contain">
          TECHNOLOGICAL PHOTOJOURNALISM
      </div>
    </Base>
  </div>
</template>

<script>
import Base from "./Base.vue";

export default {
  name: "About",
  components: {
    Base
  }
};
</script>

<style>
.about__contain__outbound-link:hover {
  background-color: coral;
}
.about__contain__outbound-link {
  margin-bottom: 10%;
  font-weight: bolder;
  color: navy;
}
.about__contain__footnote {
  font-size: 30%;
  margin-top: -5px;
}
.about__contain__footnote:hover {
  cursor: pointer;
}
.about__contain {
  margin-bottom: 10%;
  font-weight: normal;
  color: navy;
}
.about__contain__italic {
  font-style: italic;
}
.about__contain:hover {
  color: steelblue;
}
</style>
