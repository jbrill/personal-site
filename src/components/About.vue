<template>
  <div>
    <Base>
      <h2 style="color: navy; margin-bottom: 0;">ABOUT</h2>
      <p class="about__contain">
        I am an artist and engineer looking to impact the way in which people
        interact with their environments
      </p>
      <p class="about__contain">
        I specialize in full stack web development, and am currently redefining
        conversational AI for the world with Clinc
        <a
          class="about__contain__footnote"
          target="_blank"
          href="https://clinc.com/"
          >[1]</a
        >
      </p>
      <p class="about__contain">
        I plan on obtaining a graduate degree in Human-Computer Interaction in
        the near future to better understand the
        <span class="about__contain__italic">why</span> rather than the
	<span class="about__contain__italic">how </span> <a href="https://knowledge.wharton.upenn.edu/article/constantly-challenging-assumptions-frog-designs-jan-chipchase-has-a-question-for-companies-how-do-you-know-youre-innovative" target="_blank" class="about__contain__footnote"> [2]</a>
      </p>
      <p class="about__contain">
        Currently living in Los Feliz, Los Angeles
      </p>
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

<style scoped>
.about__contain__outbound-link:hover {
  background-color: coral;
}
.about__contain__footnote {
  font-size: 30%;
  margin-top: -5px;
}
.about__contain__footnote:hover {
  cursor: pointer;
  background-color: coral;
}
.about__contain {
  margin-bottom: 10%;
  font-weight: 300;
  color: navy;
}
.about__contain__italic {
  font-style: italic;
}
.about__contain:hover {
  color: steelblue;
}
</style>
