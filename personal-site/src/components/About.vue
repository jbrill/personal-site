<template>
  <div>
    <Base>
      <div class="content__contain__right">
        <p class="about__contain about__contain__header">👋</p>
        <p class="about__contain">
          I am an artist and engineer looking to redefine the way in which
          people interact with their environments
        </p>
        <p class="about__contain">I specialize in full stack web development</p>
        <p class="about__contain">
          Currently bringing conversational AI to the world with
          <a target="_blank" href="https://clinc.com/">Clinc</a>
        </p>
        <p class="about__contain">
          I plan on obtaining a graduate degree in Human-Computer Interaction in
          the near future
        </p>
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

<style></style>
