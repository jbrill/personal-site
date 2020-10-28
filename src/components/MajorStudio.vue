<template>
  <div>
    <Base>
      <v-card>
        <v-card-text>test</v-card-text>
      </v-card>
    </Base>
  </div>
</template>

<script>
import Base from "./Base.vue";

export default {
  name: "Dreamgigs",
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
  font-size: 1rem;
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
