<template>
  <div>
    <h2 class="display-2">Genre Mixer</h2>
    <p class="display-1">An interactive dynamic sampling tool for artists.</p>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/Iv-TAOSdByk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <h4>COURSE</h4>
    <p>University of Michigan, Ann Arbor</p>
    <p><i>Course:</i>&nbsp; PAT 201 - INTRODUCTION TO COMPUTER MUSIC</p>
    <p><i>Instructor:</i>&nbsp; Jeremy Edwards</p>
    <h4>PROMPT</h4>
    <p>In this third cycle we will explore algorithmic composition and begin to learn a new tool for art making, Max/MSP.  We will look at musical works that use generative processes and explore how these processes can be incorporated into your own musical works and installations (stand-alone or interactive).
    </p>
    <p>
    For Cycle 3 you will create a patch in Max to generate a score or some type of musical data.    You may explore chance operations, a mathematical model, experiment with sonifying a data set or something else...  In class we will look at different techniques for creating and manipulating data to help you in this process.
    </p>
    <p>
    Next, you will create an instrument patch to “perform” your composition.  This patch will take the note information from your generative patch and assign it to an instrument that can realize your composition.  Consider what musical parameters you would like to control; how will your patch handle rhythm, dynamics, tempo?  Will these parameters be predetermined or will they be interactive, adjustable in real-time?  What will your instrument sound like?  We will look at various ways to generate sound in Max/MSP and learn how to shape sounds from the ground up.  We will also look at how Max handles MIDI I/O and how you can use max to play an internal or external instrument.
    </p>
    <p>
    As a final step you will create a user interface for your patch.  Take into consideration the amount of interactivity you would like your algorithmic composition to have; one of the strengths of using Max is the ability to add real-time controls and dynamic input into your patches.  By adding dynamic control over your patch you can create a framework that has a unique output  each time it is performed.  The layout of the controls is also important, be sure and design your interface so that others will be able to infer how the patch works; label all controls clearly and use a comment box to indicate how the patch works.</p>      
    <h4>RESEARCH + INSPIRATION</h4>
    <h5>Steve Reich - It’s Gonna Rain (1965)</h5>
<p>
    Prior to his piece “Come Out”, Steve Reich released his experimentation with phase shifting and automation — “It’s Gonna Rain”. This minimal piece uses two tape recordings of the same preacher’s voice, recording in San Fransisco Square. Reich uses phase shifting between the two recorders in order to emphasize different tones and frequencies. Reich originally wanted to have a specific snippet of the tape repeated several times, but instead the two tapes were in sync, and the phase shift emphasized different parts of the recording. This led to what Steve recalls his eureka moment with minimalism and ambient music.</p>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/uUTRS0iW7oE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<p>I knew I wanted to experiment with sampling, and dynamically tweaking those samples in this project. I wanted to also experiment with minimalism and ambience as an aesthetic subject.</p>
  <h4>PROCESS</h4>
      <p>
      I immediately knew I wanted to focus on musicians. I wanted to explore data around artists, through their listeners, their genre, and any other data.</p>
<h5>LAST FM</h5><p> This piece explores related artists to an inputted artist through the musical interpretation of artist’s data through Last FM’s <a href="https://www.last.fm/api/" target="_blank">API</a>. This API specifies, given a particular artist, returns data like the popularity, genre, and more. Here's an example payload:
<json-viewer :value="jsonData"></json-viewer>
</p>
<h5>WEB APPLICATION</h5>
<p>To connect to Last FM's API, I developed a flask application that could serve as a wrapper around the API. The only data I needed from a user was the artist name, so I served a simple html page which prompted for an artist name.</p>
<h5>MAX MSP PATCH</h5><p>My Max program relies on samples that correspond to each particular genre. The goal of this piece is to compose a composition using samples dictated by similar artists, potentially creating unforeseen random compositions. 
</p>
      <p>The artist data API will run till a specified amount of input, say 10000 artists data points, is achieved. The greater the listen count of an artist, the higher the frequency of the sample. I’ll also have a low frequency hum of the original genre from the original artist playing in the background.</p>
  <h4>REFLECTIONS</h4>
  <p>My artistic intent was to form a full musical composition based on a user’s artist query. My compositional form consisted of 2 parts: my synth and my sampler. I used two variables, play count and listener count, with respect to similar artists to affect the FM synth. I used similar genres for these related artists to choose certain samples. I gathered all my data with a python script using Last FM’s api. Although I thought the two parts of my composition were good in their separate ways, I didn’t like how they sounded together. Nonetheless, after class, I felt much better about my composition as a whole.</p>
  <p>I spent a significant time gathering and parsing the data from Last FM, and spent even more time structuring my Max patch and finding the right instruments and patches. I had some problems with Max itself, and got some errors that wouldn’t go away unless I completely rebuilt the patch, specifically for a stack overflow error message. This project was inspiring in that I could finally bring together code and music, which are two huge parts of my education and life. The project built my confidence with synergizing these two topics, and I hope to continue building my Max skill-set.</p>
  </div>
</template>

<script>
import JsonViewer from 'vue-json-viewer'

export default {
  name: "MusicAndCulture",
  components: {
    JsonViewer,
  },
  data() {
    return {
      jsonData: { 'the beatles': {'playcount': '531937175', 'genres': ['classic rock', 'rock', 'british', '60s', 'pop'], 'similar': ['John Lennon', 'Paul McCartney', 'George Harrison', 'Wings', 'Paul McCartney & Wings'], 'listeners': '3754392'}
	} }
  }
};
</script>

<style scoped>
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
