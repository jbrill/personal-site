<template>
  <div>
    <Base>
      <h2 style="margin: 0;">NEPTUNE</h2>
      <p style="font-style: italic;">A Smart And Social Music Application</p>
      <img id="neptune--intro" style="width: 100%;" src="@/assets/images/portfolio/neptune/intro.png" />
      <h4>Thesis</h4>
      <p>A handful of music applications, Spotify, Apple Music,  Soundcloud, and Pandora, take up 95%+ of digital music consumption; today through the means of streaming. Each product caters to a specific niche of within the market – i.e. Spotify caters to a younger social demographic, Soundcloud as more of an artist-to-artist platform, etc. There’s a limited degree of music ‘real estate’… for this reason making the market incredibly difficult to breach into. 
      </p>
      <p>
      The main platforms today have it’s tradeoffs... Spotify and Apple Music aren’t artist-friendly in terms of payment. Soundcloud has several flaws, stemming from a lack of a clear user base, as well as providing direct payment that artists often seek. Nonetheless, the discovery aspect of Soundcloud is powerful, and arguably the most democratic platform for artists to date.
      </p>
      <p>
      Neptune gathers the pros of each platform, with new technology that has yet to hit the market. The thesis that fuels Neptune: decentralization and artificial intelligence, in tandem with a social and engaging user experience, can bridge the gap between artists and listeners. The goal for Neptune is to provide a space where artist’s assets -- in this case music -- permanently reside in the blockchain. Any user can stream the music, however the real revolutionary aspect of the application is the ability of any user to purchase an artist’s asset. Price and supply are set initially by the artist, and determined by the flux of the market. 
      </p>
      <p>
      Social engagement will be powered purely be deep learning and machine learning. Users on Instagram and Snapchat post screenshots of songs... a strong indication of a willingness and yearning to share music with their friends. Moreover, this sharing shouldn’t be limited to friend-to-friend interactions, but also to artist-listener/listener-artist/influencer-artist/etc.  By having music stored digitally on the blockchain,  so can user interactions with that music, i.e. reposts, likes, and most importantly, purchases. 
      </p>
      <p>
      Rather than organize music by the biggest labels, or promoting playlists from ‘music curators’, the recommended music should be driven by algorithms, deterministically recommending albums/songs/artists by past listens, favorite artists, etc. 
      </p>
      <h4>Research Questions</h4>
      <ul>
          <li>What music discovery techniques effectively guide a music listening experience?</li>
          <li>What do different music applications tackle?</li>
          <li>How might a product address an untapped niche in the market?</li>
      </ul>
      <a href="https://www.statista.com/statistics/798125/most-popular-us-music-streaming-services-ranked-by-audience/" rel="nofollow"><img src="https://www.statista.com/graphic/1/798125/most-popular-us-music-streaming-services-ranked-by-audience.jpg" alt="Statistic: Most popular music streaming services in the United States as of March 2018, by monthly users (in millions) | Statista" style="width: 100%; height: auto !important; max-width:1000px;-ms-interpolation-mode: bicubic;"/></a>
      <h4>Personas</h4>
      <blockquote class="twitter-tweet"><p lang="en" dir="ltr">I’m obsessed <a href="https://t.co/xIR7ed7u6u">pic.twitter.com/xIR7ed7u6u</a></p>&mdash; Andrew Clark (@acdlite) <a href="https://twitter.com/acdlite/status/1190874521558867968?ref_src=twsrc%5Etfw">November 3, 2019</a></blockquote> 
      <h4>Current Stack</h4>
        INSERT DIAGRAM HERE
      <h4>Reflections</h4>
       
      <h4>Future Work</h4>
    </Base>
  </div>
</template>

<script>
import Base from "./Base.vue";

export default {
  name: "Portfolio",
  components: {
    Base
  }
};
</script>

<style scoped>
#neptune--intro:hover {
  cursor: pointer;
  opacity: 0.7;
}
p {
  font-size: smaller;
}
li {
  font-size: smaller;
}
h2 {
  margin-top: 0;
  margin-bottom: 10vh;
}
.portfolio__contain {
  margin-bottom: 8vh;
  padding: 2vh;
  border: 1px solid #F1F1F1;
  border-left: 2px solid coral;
  -webkit-box-shadow: 7px 17px 25px -25px rgba(0,0,0,0.39);
  -moz-box-shadow: 7px 17px 25px -25px rgba(0,0,0,0.39);
  box-shadow: 7px 17px 25px -25px rgba(0,0,0,0.39);
}
.portfolio__medium {
  margin: 0;
  color: darkgrey;
}
.portfolio__contain:hover {
  cursor: pointer;
  margin-left: 5px;
}
</style>
