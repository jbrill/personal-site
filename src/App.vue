<template>
  <v-app id="app">
     <v-main>

      <!-- Provides the application the proper gutter -->
      <v-container>
        <v-layout flex justify-space-between>
          <v-container class="content__contain__left">
            <v-container>
              <router-link tag="h1" to="/" class="title__contain">JASON BRILL</router-link>
              <span class="overline">Creative Engineer</span>
            </v-container>
            <v-container>
              <span class="body-2">
                I’m a software engineer and product designer currently pursuing an MFA in <a href="https://www.newschool.edu/parsons/mfa-design-technology/" target="_blank">Design & Technology</a> at the Parsons School of Design.
              </span>
            </v-container>
            <v-container>
              <span class="body-2">
                My interests lie in the exploration between the physical world and the digital. My recent projects explore how community-driven information affects values and perception, how interfaces can influence music listening habits, and how to cultivate healthier relationships between people and the tools that they use.
              </span>
            </v-container>
            <v-container>
              <span class="body-2">
                Elsewhere, you can catch me on <a href="https://github.com/jbrill" target="_blank">Github</a>, <a href="https://linkedin.com/in/jlbrill" target="_blank">LinkedIn</a>, <a href="https://soundcloud.com/brillay" target="_blank">Soundcloud</a>, or <a href="https://twitter.com/jbrill_" target="_blank">Twitter</a>.
                Check out my resume <a href="https://drive.google.com/file/d/1hLJvyhbiLcL-jB-BnPVV6Rey2ECQ2LHr/view?usp=sharing" target="_blank">here</a>.
              </span>
            </v-container>
            <v-container>
              <span class="body-2">
                Let's connect! Reach out to me at [jbrill95 at gmail dot com].
              </span>
            </v-container>
          </v-container>
          <v-container class="right-contain">
            <Canvas />
            <v-row>
              <v-col md="4" v-for="(card, index) in cards" :key="index" >
                <router-link :to="card.to" tag="a" style="text-decoration: none;" class="portfolio__contain">
                    <v-card hover>
                      <v-card-title
                        class="
                          headline
                        "
                      >
                        {{ card.title.toUpperCase() }}
                      </v-card-title>
                      <v-card-subtitle class="pb-0">
                        {{ card.description }}
                      </v-card-subtitle>
                  
                      <v-card-text class="text--primary">
                        <v-chip-group column>
                          <v-chip x-small label outlined v-for="(skill, skillIdx) in card.skills" :key="'skill' + skillIdx">{{ skill }}</v-chip>
                        </v-chip-group>
                        <span class="overline">{{ card.date }}</span>
                      </v-card-text>
                    </v-card>
                </router-link>
              </v-col>
            </v-row>
          </v-container>
        </v-layout>
        <v-container>
          <transition
            name="fade"
            mode="out-in"
            @beforeLeave="beforeLeave"
            @enter="enter"
            @afterEnter="afterEnter"
          >
            <router-view/>
          </transition>
        </v-container>
      </v-container>
    </v-main>


    <!-- Got more soul than a sock with a hole -->
    <!-- <router-view></router-view> -->
  </v-app>
</template>

<script>
import Canvas from './components/Canvas.vue'

export default {
  name: "canvas",
  components: {
    Canvas,
  },
  data () {
    return {
      prevHeight: 0,
      cards: [
        {
          'title': '7-in-7',
          'skills': ['PROTOTYPING', 'FULL-STACK ENGINEERING', 'PHOTOGRAPHY'],
          'to': '7-in-7',
          'src': '@/assets/images/portfolio/clinc/clinc_intro.png',
          'description': 'Creating 7 projects in 7 days for Major Studio 1 at Parsons.',
          'date': 'Fall 2020',
        },
        {
          'title': 'Clinc',
          'skills': ['PRODUCT DESIGN', 'BACK-END DEVELOPMENT', 'FRONT-END DEVELOPMENT'],
          'to': 'clinc',
          'src': '@/assets/images/portfolio/clinc/clinc_intro.png',
          'description': 'Selected projects from my work as an engineer at Clinc, a conversational AI startup.',
          'date': '2018 - 2020'
        },
        {
          'title': 'Dreamgigs',
          'skills': ['USER RESEARCH', 'RAPID APPLICATION DEVELOPMENT'],
          'to': 'dreamgigs',
          'src': 'images/portfolio/clinc/clinc_intro.png',
          'description': 'Prototyping and engineering work for the HCI department at the University of Michigan.',
          'date': 'Summer, Fall 2018'
        },
        {
          'title': 'Disruption',
          'skills': ['PHOTOJOURNALISM'],
          'to': 'disruption',
          'src': 'images/portfolio/clinc/clinc_intro.png',
          'description': 'Photojournalist exploration of the relationship between man and machine, 35mm.',
          'date': 'Fall 2017'
        },
        {
          'title': 'Genre Mixer',
          'skills': ['ALGORITHMIC COMPOSITION'],
          'to': 'genre-mixer',
          'src': 'images/portfolio/clinc/clinc_intro.png',
          'description': 'Experimental max/msp patch and web application.',
          'date': 'Fall 2016'
        },
      ]
    }
  },
  methods: {
    photoClick(event) {
      if (event.target.tagName === 'IMG') {
        if (event.target.currentSrc.includes('avatar')) {
          return;
        }
        window.open(event.srcElement.currentSrc, '_blank');
      }
    },
    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height;
    },
    enter(element) {
      const { height } = getComputedStyle(element);

      element.style.height = this.prevHeight;

      setTimeout(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      element.style.height = 'auto';
    },
  },
  mounted() {
    document.addEventListener('click', this.photoClick);
  },
  beforeDestroy() {
    document.removeEventListener('click', this.photoClick);
  },
};
</script>

<style>
body {
  font-family: Suisse Intl,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;
    -webkit-font-smoothing: antialiased;
}
::selection {
  background: #ffa531;
}
.title__contain {
  font-weight: 400;
  font-size: 100%;
  letter-spacing: 0.3rem;
  width: 40%;
  animation-name: fadeInOpacity;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 1s;
  transition: opacity 0.3s ease-out;
  -moz-transition: opacity 0.3s ease-out;
  -webkit-transition: opacity 0.3s ease-out;
  -o-transition: opacity 0.3s ease-out;
}

.title__contain:hover {
  cursor: pointer;
  opacity: 0.5;
  transition: opacity 0.3s ease-out;
  -moz-transition: opacity 0.3s ease-out;
  -webkit-transition: opacity 0.3s ease-out;
  -o-transition: opacity 0.3s ease-out;
}
a {
  color: orangered !important;
}
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: height, opacity;
  transition-timing-function: ease;
  overflow: hidden;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>
