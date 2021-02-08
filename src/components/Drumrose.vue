<template>
  <v-container>
    <v-btn to="/" elevation="1" icon><v-icon dark>mdi-arrow-left-bold</v-icon></v-btn>
    <v-layout flex>
      <v-container>
        <v-container>
          <h2 class="display-2">Drumrose</h2>
          <h2 class="display-1">A full-stack exploration of a new digital music platform</h2>
        </v-container>
        <v-container>
          <h5 class="overline">Social Entrepeneurship Impact Design</h5>
          <h5 class="font-weight-light">An ongoing effort to support listeners that love discovering new music, as well as support up and coming artists.</h5>
        </v-container>
      </v-container>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Drumrose",
  data: () => ({
    days: [
      {
        color: 'cyan',
        day: '1',
      },
      {
        color: 'green',
        day: '2',
      },
      {
        color: 'pink',
        day: '3',
      },
      {
        color: 'amber',
        day: '4',
      },
      {
        color: 'orange',
        day: '5',
      },
    ],
  }),
  components: {
  }
};
</script>

<style scoped>
.about__contain__footnote:hover {
  background-color: coral;
}
img:hover {
  cursor: pointer;
  opacity: 0.7;
}
p {
  padding-top: 2vh;
}
</style>
