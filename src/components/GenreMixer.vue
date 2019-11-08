<template>
  <div>
    <Base>
      <h2 style="margin: 0; ">GENRE MIXER</h2>
      <p style="font-style: italic;">An interactive dynamic sampling tool for artists.</p>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/Iv-TAOSdByk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <h4>Initial Research</h4>
      <p>Steve Reich - It’s Gonna Rain (1965)

      Prior to his piece “Come Out”, Steve Reich released his experimentation with phase shifting and automation — “It’s Gonna Rain”. This minimal piece uses two tape recordings of the same preacher’s voice, recording in San Fransisco Square. Reich uses phase shifting between the two recorders in order to emphasize different tones and frequencies. Reich originally wanted to have a specific snippet of the tape repeated several times, but instead the two tapes were in sync, and the phase shift emphasized different parts of the recording. This led to what Steve recalls his eureka moment with minimalism and ambient music.</p>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/uUTRS0iW7oE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <h4>EXPLANATION</h4>
    <ul class="explanation-list" style="list-style-type: square; padding: 0;">
        <li>
            This piece explores related artists to an inputted artist through the musical interpretation of artist’s data through Last FM’s API. This API specifies, given a particular artist, the popularity, genre, and more. My Max program will rely on samples that correspond to each particular genre. The goal of this piece is to compose a composition using samples dictated by similar artists, potentially creating unforeseen random compositions. 
        </li>
        <li>
            The artist data API will run till a specified amount of input, say 10000 artists data points, is achieved. The greater the listen count of an artist, the higher the frequency of the sample. I’ll also have a low frequency hum of the original genre from the original artist playing in the background.
        <li>
            The artist chosen is inputted by the user, and I will construct my data set either in a separate program or within Max. The timing of the samples played will correspond to when each ends.
      </li>
    </ul>
    <h4>REFLECTIONS</h4>
    <p>My artistic intent was to form a full musical composition based on a user’s artist query. My compositional form consisted of 2 parts: my synth and my sampler. I used two variables, play count and listener count, with respect to similar artists to affect the FM synth. I used similar genres for these related artists to choose certain samples. I gathered all my data with a python script using Last FM’s api. Although I thought the two parts of my composition were good in their separate ways, I didn’t like how they sounded together. Nonetheless, after class, I felt much better about my composition as a whole.</p>
    <p>I spent a significant time gathering and parsing the data from Last FM, and spent even more time structuring my Max patch and finding the right instruments and patches. I had some problems with Max itself, and got some errors that wouldn’t go away unless I completely rebuilt the patch, specifically for a stack overflow error message. This project was inspiring in that I could finally bring together code and music, which are two huge parts of my education and life. The project built my confidence with synergizing these two topics, and I hope to continue building my Max skill-set.</p>
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
* {
  text-align: center;
}
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
.explanation-list li {
  padding-bottom: 2vw;
}
</style>
