<template>
  <div>
    <Base>
      <h2 style="margin: 0; ">GENRE MIXER</h2>
      <p style="font-style: italic;">An interactive dynamic sampling tool for artists.</p>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/Iv-TAOSdByk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
