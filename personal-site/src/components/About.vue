<template>
  <div>
    <Base>
      <p class="about__contain about__contain__header">👋 🌎</p>
      <p class="about__contain">
        I am an artist and engineer looking to impact the way in which people
        interact with their environments
      </p>
      <p class="about__contain">
        I specialize in full stack web development, and am currently redefining
        conversational AI for the world with
        <a
          class="about__contain__outbound-link"
          target="_blank"
          href="https://clinc.com/"
          >Clinc</a
        >
      </p>
      <p class="about__contain">
        I plan on obtaining a graduate degree in Human-Computer Interaction in
        the near future
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

<style>
.about__contain__outbound-link:hover {
  background-color: coral;
}
.about__contain {
  margin-bottom: 10%;
}
</style>
