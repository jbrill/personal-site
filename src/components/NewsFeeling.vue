<template>
  <v-container>
    <v-btn to="/" elevation="1" icon><v-icon dark>mdi-arrow-left-bold</v-icon></v-btn>
    <v-layout flex>
      <v-container>
        <v-container>
          <h2 class="display-2">NewsFeeling</h2>
          <h2 class="display-1">A Sentiment Analysis Visualization Tool for The New York Times</h2>
        </v-container>
        <v-container>
          <h5 class="overline">Critical Computation</h5>
          <h5 class="font-weight-light">Following the 7 feminist data principles, create a translation device in p5 that translates external JSON datasets into feminist data.</h5>
        </v-container>
        <p class="font-weight-light">View the live site <a href="https://newsfeeling.com" target="_blank">here</a>.</p>
      </v-container>
    </v-layout>
    <v-container>
      <h2 class="header-1">Tools</h2>
      <ul><li class="body-2">P5js</li><li class="body-2">AFINN</li><li class="body-2">New York Times API</li><li class="body-2">Vue</li><li class="body-2">Vuetify</li></ul>
    </v-container>
    <v-container>
      <h2 class="header-1">Audience</h2>
      <p class="body-2">NewsFeeling is a tool for:</p>
      <ul>
        <li class="body-2">Journalists gauging the landscape surrounding a particular topic.</li>
        <li class="body-2">Curious humans seeking visualizaation insights into historical topics on the NYT.</li>
      </ul>
    </v-container>
    <v-container>
      <h2 class="header-1">Questions</h2>
      <p class="body-2">People feel certain ways towards the news, but can we quantify the sentiment of the news?</p>
    </v-container>
    <v-container>
      <h2 class="header-1">Process</h2>
      <p class="body-2">My design process began with an hour of searching through API's from <a href="https://apilist.fun" target="_blank">apilist.fun</a>. My criteria for choosing an api included the following constraints:</p>
      <ul>
        <li class="body-2">Free</li>
        <li class="body-2">Easy-to-use</li>
        <li class="body-2">Related to current events</li>
      </ul>
      <p class="body-2">I ended up going with the <a href="https://developer.nytimes.com/apis" target="_blank">New York Times API</a>, influenced by my history with the prior relationship with the newspaper company.</p>
      <p class="body-2">From there, I wanted to form some dialog around the information provided by the Times. In today's world, there's a trust issue between the public and the media.</p>
      <h2 class="header-2">Sketching in p5</h2>
      <iframe width="600" height="600" src="https://editor.p5js.org/jbrill/embed/9-omNI7yE"></iframe>
      <p class="caption">Check out the p5 code <a href="https://editor.p5js.org/jbrill/sketches/9-omNI7yE" target="_blank">here</a>.</p>
    </v-container>
    <v-container>
      <h2 class="header-1">Moving to a Web-Based Platform</h2>
      <p class="body-2">To create a more immersive, interactive, and accessible experience, I decided to move my p5 sketch to a web-based application.</p>
      <p class="body-2">I utilized a combination of Vue, Vueitfy, as well as the same API and Sentiment Tools needed for my p5 sketch. Eventually, I deployed my application to my custom domain via Vercel.</p>
      <h2 class="overline">Limitations</h2>
      <p class="body-2">The NYT API tethers my API requests, allowing only 10 articles every 6 seconds. Multiple users are also currently prohibited to access the interface at the same time.</p>
    </v-container>
    <v-container>
      <h2 class="header-1">Sentiment Tool</h2>
      <p class="body-2">For the sketch, I used <a href="https://www.tidytextmining.com/sentiment.html" target="_blank">AFINN sentiment analysis</a>. I based my code heavily off of this functional JS implementation <a href="https://itnext.io/functional-sentiment-analysis-in-javascript-754f58628746" target="_blank">tutorial</a>.</p>
    </v-container>
    <v-container>
      <h2 class="header-1">Reflections</h2>
      <h2 class="overline">Adherence to <a href="https://journals.sagepub.com/doi/10.1177/2053951720942544#:~:text=In%20the%20book%2C%20we%20offer,context%2C%20and%20make%20labor%20visible." target="_blank">Feminist Data Principles</a></h2>
      <h2 class="caption">Principle 1: Examine power</h2>
      <p class="body-2">Media outlets like the New York Times both hold an immense amount of power, while also examining forms of influence and power in society. A sentiment analysis of this examination, and the outlet itself, is another way to examine power.</p>
      <h2 class="caption">Principle 3: Elevate emotion and embodiment</h2>
      <p class="body-2">Sentiment is heavily tied to emotion. Senitment analysis is an expression of knowledge, and provides a technological, and imperfect form of analysis of human emotion.</p>
      <h2 class="caption">Principle 6: Consider context</h2>
      <p class="body-2">More than anything, this project is a tool to provide more context as to specific articles' sentiment, as well as sentiment in articles for a specified topic or context as a whole.</p>

      <h2 class="overline">Recontextualization</h2>
      

      <p class="body-2">This project provides another layer, a sentiment layer, of context over the New York Times api.</p>
    </v-container>
    <v-container>
      <h2 class="header-1">Future Work</h2>
      <p class="body-2">I'd like to implement different sorting capabilities for the news articles. Right now, the application fetches the articles by most recent. It might be interesting to have a sort capability for sentiment score.</p>
      <p class="body-2">As is, the tool currently serves two different audiences. I'd like to conduct user interviews with journalists to see how and why this tool might fit their needs, and iterate on the design based on those insights.</p>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: "NewsFeeling",
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
