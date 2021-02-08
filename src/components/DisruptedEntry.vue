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
          <h5 class="overline"><a href="https://courses.newschool.edu/courses/PGTE5600/" target="_blank">Design for this Century</a></h5>
          <h5 class="font-weight-light">Mapping Project</h5>
        </v-container>
        <p class="font-weight-light">View the live site <a href="https://disruptedentry.com" target="_blank">here</a>.</p>
        <v-container>
          <h2 class="header-1">Abstract</h2>
          <p class="body-1">My mission was to express the travel limitations and passport-entry implications before and after the COVID pandemic by using a ‘strength of passport’ index.</p>
          <p class="body-1">I was particularly inspired by Theo Deutinger and his representation of borders in “Handbook of Tyranny”. Since COVID, border control has changed vastly, and I felt like I could express similar concepts through the lens of the pandemic.</p>
          <p class="body-1">Last year, while traveling in Japan and Australia, the pandemic began to break out. From the other side of the planet, I felt fear and uncertainty both individually and from the collective population in each respective country. Traveling was one of the most peculiar experiences; while I airline employers asked passengers if they’d traveled to China in the last two weeks, another passenger remarked, “well what about Iran, or Italy, or France?” Travelers like me were forced, either by family or state, to go home. Over the coming months, my own country, the US, as well as most others, placed temporary bans on travel from other nations. Tourism was turned upside down, and my key to crossing into other countries, my passport, lost its value. I wanted to represent this historic change through code and design.</p>
        </v-container>
        <v-container>
          <h2 class="header-1">Research Process</h2>
          <p class="body-1">My research process started by searching for data containing countries and their citizens’ ability to travel and not travel to other countries. Specifically, I was hoping to obtain a n x n matrix, where n is the total number of countries in the world. I stumbled upon the following <a href="https://github.com/ilyankou/passport-index-dataset/blob/master/passport-index-matrix.csv" target="_blank">repository</a> during my search.</p>
          <p class="body-1">I found the project was fairly maintained, and updated their datasets every few months.</p>
          <p class="body-1">I was able to generate a map of each country and its relative strength according to the CSV data. My formula for calculating the passport strength index was based off <a href="https://passportindex.org" target="_blank">Passport Index</a>.</p>
          <p class="body-1">This site contained exactly what I was searching for -- a comprehensive passport index score which took travel bans due to COVID into account. I translated the data from the July 2020 <a href="https://www.passportindex.org/byRank.php?ccode=us" target="_blank">report</a>, and the July 2019 <a href="https://www.passportindex.org/passport-power-rank-2019.php" target="_blank">report</a> into distinct JSON files.</p>
        </v-container>
        <v-container>
          <h2 class="header-1">Design Process</h2>
          <p class="body-1">I decided to use the Google Maps API due to its documentation, ease of use, and support from Google. After a bit of research, I found a relatively new project from Google, <a href="https://developers.google.com/chart/interactive/docs/gallery/geochart" target="_blank">Geochart</a>, which allows for interactive play and visualization techniques built on top of Google Maps.</p>
          <p class="body-1">I found an <a href="https://jsfiddle.net/api/post/library/pure/" target="_blank">example</a> of feeding GeoChart data via a list from the documentation, and transformed the data I gathered into JSON into the corresponding lists it required. I then played a bit with the options to create a more visually appealing look to the map, including tweaking the legend, country color axis, and more. I created a second map for the post COVID dataset, and stylized the code using vanilla CSS.</p>
        </v-container>
      </v-container>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "DisruptedEntry",
  data: () => ({
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
