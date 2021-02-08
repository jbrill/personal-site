<template>
  <v-container>
    <v-btn to="/" elevation="1" icon><v-icon dark>mdi-arrow-left-bold</v-icon></v-btn>
    <v-layout flex>
      <v-container>
        <v-container>
          <h2 class="display-2">Disrupted Entry</h2>
          <h2 class="display-1">Passport Index Strength Visualization</h2>
        </v-container>
        <v-container>
          <h5 class="overline">Design for this Century</h5>
          <h5 class="font-weight-light">Mapping Project</h5>
        </v-container>
      </v-container>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "DisruptedEntry",
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
