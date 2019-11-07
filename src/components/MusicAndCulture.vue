<template>
  <div>
    <Base>
      <h2 style="margin: 0; color: navy;">MUSIC AND CULTURE</h2>
      <p style="font-style: italic;">A documentary centered on the relationship between music and culture.</p>
      <iframe src="https://player.vimeo.com/video/97366907" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
      <p><a href="https://vimeo.com/97366907">Music and Culture</a> from <a href="https://vimeo.com/fcit">FCS</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
      <p>I worked on this documentary for roughly 6 weeks during my senior year of high school at Friends Central School in Wynnewood, PA. I worked closely with a peer, Sydney Shore, during this time. We interviewed musicheads and professors alike to uncover secrets regarding the relationship between music and culture.</p>
     <p>This documentary was edited with Adobe Premier Pro and After Effects.</p>
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
