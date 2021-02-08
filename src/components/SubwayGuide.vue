<template>
  <v-container>
    <v-btn to="/" elevation="1" icon><v-icon dark>mdi-arrow-left-bold</v-icon></v-btn>
    <v-layout flex>
      <v-container>
        <v-container>
          <h2 class="display-2">Subway Guide</h2>
          <h2 class="display-1">A Data Visualization of the 'State of the Subway' <a href="https://www.straphangers.org/reports/2016/StateoftheSubways2016.pdf" target="_blank">Report Card</a>.</h2>
        </v-container>
        <v-container>
          <h5 class="overline">Data Visualization and Information Aesthetics
            <v-btn x-small icon target="_blank" href="https://courses.newschool.edu/courses/PSAM5010/"><v-icon>mdi-window-restore</v-icon></v-btn>
          </h5>
          <p class="font-weight-light">View the live site <a href="https://subway.guide" target="_blank">here</a>.</p>
        </v-container>
      </v-container>
    </v-layout>
    <v-container>
      <h2 class="header-1">Tools</h2>
      <ul><li class="body-2">Illustrator</li><li class="body-2">VueJS</li><li class="body-2">D3js</li><li class="body-2">Vercel</li></ul>
    </v-container>
    <v-container>
      <h2 class="header-1">Prompt</h2>
      <v-container>
        <p class="body-2">Redesign the subway scorecard from <a href="https://www.straphangers.org/reports/2016/StateoftheSubways2016.pdf" target="_blank">Straphangers</a>.</p>
        <v-img
          max-width="20rem"
          src="@/assets/work/nyt_subwayreport.gif"
          class="grey lighten-2"
        >
          <template v-slot:placeholder>
            <v-row
              class="fill-height ma-0"
              align="center"
              justify="center"
            >
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
    </v-container>
      <h2 class="header-1">Process</h2>
      <p class="body-2">I first glanced at various chart types on <a href="https://data-to-viz.com" target="_blank">data-to-viz</a> to familiarize myself with potential chart types given the train scorecard.</p>
      <p class="body-2">
        After some digging, I felt that the spider, or radar, chart might be most effective at conveying strengths and weaknesses of each train. I was most drawn to the area within each polygon in the radar plots, whereas comparable charts lacked the polygonal structure.
      </p>
      <h2 class="header-2">Sketching</h2>
      <p class="body-2">Using Adobe Illustrator, I conveyed my idea for displaying the subway data in radar-chart form:</p>
      <v-img
        src="@/assets/work/illustrator_subway.png"
        class="grey lighten-2"
      >
        <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
      <v-divider />
      <h2 class="header-2">Choosing Color</h2>
      <p class="body-2">To add character and a visual hierarchy, I wanted to convey this visualization in groups, just as the New York City Subway system does. The following resource helped to clarify the colors and groupings of the subway icons:</p>
      <v-img
        src="@/assets/work/subway_pantone.jpg"
        class="grey lighten-2"
      >
        <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
      <h2 class="header-1">Translating into Data</h2>
      <p class="body-2">Now that I had an idea of the plot and structure of the visualization, I moved to a web-development workflow, using my go-to tool in Vue to create radar charts. One of my first steps was translating the data from the the scorecard to a fitting JSON (type of data) structure. Here’s what a snippet of the data looks like:</p>
      <json-viewer :value="jsonData"></json-viewer>
      <p class="body-2">This data was in a compatible format for a library called <a href="https://github.com/alangrafu/radar-chart-d3" target="_blank">Radar-Chart-D3</a>, which I used as a simple wrapper on d3 to help create my radar charts. I actually needed to slightly tweak the source code to get it to work in Vue, including creating my own pull request.</p>
      <p class="body-2">I was ultimately able to create my visualizations for the subway trains/groups, and finally stylized the charts with Vuetify. From there, I just deployed the Vue application using Vercel, which allows a free and easy way to quickly deploy web applications. Here’s a preview of the live site in action:</p>
    </v-container>
    <v-container>
      <h2 class="header-1">Reflection</h2>
      <p class="body-2">For future work, I’d like to allow the viewer to see all the visualizations without scrolling down. I think it can be tedious and uncomfortable to try to compare graphs on different places on the page.</p>
      <p class="body-2">I also feel that it was interesting to compare trains in the same groups within the same html ‘card’, but I wonder what it would look like if all the trains were either a) side-by-side or b) all stacked together in one radar.</p>
    </v-container>
  </v-container>
</template>

<script>
import JsonViewer from 'vue-json-viewer'

export default {
  name: "SubwayGuide",
  components: {
    JsonViewer,
  },
  data: () => ({
    jsonData: {
      className: '1',
      color: 'E60D2E',
      group: 0,
      axes: [
        {axis: "Frequency of Trains", value: 20},
        {axis: "Reliability of Service", value: 20},
        {axis: "Breakdown Rate", value: 8},
        {axis: "Seat Availability", value: 12},
        {axis: "Interior Cleanliness", value: 21},
        {axis: "Clarity of Announcements", value: 16}
      ]
    }
  }),
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
</style>
