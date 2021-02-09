<template>
  <!-- Based off https://codepen.io/franky/pen/LGMWPK -->
  <v-container>
    <v-layout flex justify-space-between>
      <v-container class="content__contain__left">
        <v-container>
          <router-link tag="h1" to="/" class="title__contain">JASON BRILL</router-link>
          <span class="overline">Creative Engineer</span>
        </v-container>
        <v-container>
          <span class="body-2">
            I’m a software engineer, user interface designer, and artist currently pursuing an MFA in <a href="https://www.newschool.edu/parsons/mfa-design-technology/" target="_blank">Design & Technology</a> at Parsons School of Design.  My undergraduate background is in <a href="https://lsa.umich.edu/lsa/academics/majors-minors/computer-science-major.html" target="_blank">Computer Science</a> from the University of Michigan.
          </span>
        </v-container>
        <v-container>
          <span class="body-2">
            Previously, I wore several hats at <a href="https://clinc.com" target="_blank">Clinc</a>, where I worked as a Platform Engineer, Infrastructure Engineer, and Client Success Engineer.
          </span>
        </v-container>
        <v-container>
          <span class="body-2">
            My interests lie in the <strong>exploration between the physical world and the digital</strong>. My recent projects explore how community-driven information affects values and perception, how interfaces can influence music listening and curation techniques, and ultimately how to cultivate healthier relationships between people and the tools that they use.
          </span>
        </v-container>
        <v-container>
          <span class="body-2">
            Find me on <a href="https://github.com/jbrill" target="_blank">Github</a>, <a href="https://gitlab.com/jbrill" target="_blank">Gitlab</a>, <a href="https://linkedin.com/in/jlbrill" target="_blank">LinkedIn</a>, <a href="https://soundcloud.com/brillay" target="_blank">Soundcloud</a>, or <a href="https://twitter.com/jbrill_" target="_blank">Twitter</a>.
            Check out my resume <a href="https://drive.google.com/file/d/1hLJvyhbiLcL-jB-BnPVV6Rey2ECQ2LHr/view?usp=sharing" target="_blank">here</a>.
          </span>
        </v-container>
        <v-container>
          <span class="body-2">
            Let's connect! Reach out to me at brilj112[at]newschool[dot]edu.
          </span>
        </v-container>
      </v-container>
      <v-divider vertical></v-divider>
      <v-container class="right-contain">
        <Canvas />
        <v-row justify-content>
          <v-col class="flex align-center" md="6" v-for="(card, index) in cards" :key="index" >
            <router-link :to="card.to" tag="a" style="text-decoration: none;" class="portfolio__contain">
                <v-card hover>
                  <v-card-title
                    class="
                      title
                      font-weight-light
                      headerClass
                    "
                  >
                  <v-row align="center">
                    <v-tooltip top>
                      <template v-slot:activator="{ on, attrs }">
                        
                        <svg v-on="on" v-bind="attrs" height="10" width="10">
                          <circle cx="5" cy="5" r="3" stroke="grey" stroke-width="0.5" :fill="card.live ? 'lime' : 'red'" />
                        </svg>
                      </template>
                      <span v-if="card.live">Site is live</span>
                      <span v-else>Site is not live</span>
                    </v-tooltip>
                    <span style="padding-left: 5px">{{ card.title.toUpperCase() }}</span>
                    </v-row>
                  </v-card-title>
                  <v-card-subtitle class="pb-0">
                    {{ card.description }}
                  </v-card-subtitle>
              
                  <v-card-text class="text--primary">
                    <v-chip-group column>
                      <v-chip x-small label outlined v-for="(skill, skillIdx) in card.skills" :key="'skill' + skillIdx">{{ skill }}</v-chip>
                    </v-chip-group>
                    <v-layout justify-space-between flex>
                      <span class="overline">{{ card.date }}</span>
                      <a @click.prevent="" v-if="card.live" class="overline" :href="card.external" target="_blank">link</a>
                    </v-layout>
                  </v-card-text>
                </v-card>
            </router-link>
          </v-col>
        </v-row>
      </v-container>
    </v-layout>
  </v-container>
</template>

<script>
import Canvas from '../components/Canvas.vue';

export default {
  name: "Home",
  components: {
    Canvas,
  },
  data () {
    return {
      cards: [
        // {
        //   'title': 'DRUMROSE',
        //   'skills': ['Product', 'Full-Stack', 'Microservice Architecture', 'Continuous Integration'],
        //   'to': 'drumrose',
        //   'description': 'Building an inclusive and immersive music facilitation platform.',
        //   'date': '04/2020 - Present',
        //   'live': true,
        //   'external': 'https://drumrose.com'
        // },
        {
          'title': 'SUBWAY GUIDE',
          'skills': ['DataVis', 'D3js', 'Illustrator', 'Vue'],
          'to': 'subway-guide',
          'description': 'A data visualization of the \'State of the Subways\' Report Card',
          'date': '02/2021',
          'live': true,
          'external': 'https://subway.guide'
        },
        {
          'title': 'NEWS FEELING',
          'skills': ['DataVis', 'VueJS', 'NYT API', 'Sentiment Analysis'],
          'to': 'news-feeling',
          'description': 'A Sentiment Analysis Visualization Tool for The New York Times',
          'date': '01/2021',
          'live': true,
          'external': 'https://newsfeeling.com'
        },
        {
          'title': '7-in-7',
          'skills': ['RAPID PROTOTYPING', 'FULL-STACK ENGINEERING', 'P5js', 'Figma', 'FILM PHOTOGRAPHY', 'After Effects'],
          'to': '7-in-7',
          'description': 'Creating 7 projects in 7 days for Major Studio 1 at Parsons.',
          'date': 'Fall 2020',
          'live': false,
        },
        {
          'title': 'Disrupted Entry',
          'skills': ['Front-end', 'DataVis', 'GeoChart'],
          'to': 'disrupted-entry',
          'description': 'Expressing passport-entry implications before and after the COVID pandemic.',
          'date': '10/2020',
          'live': true,
          'external': 'https://disruptedentry.com/'
        },
        {
          'title': 'Clinc',
          'skills': ['Platform', 'Infrastructure', 'Client Deployment'],
          'to': 'clinc',
          'description': 'Selected projects from my work as an engineer at Clinc, a conversational AI startup.',
          'date': '08/2018 - 04/2020',
          'live': true,
          'external': 'https://api.clinc.ai'
        },
        {
          'title': 'Dreamgigs',
          'skills': ['USER RESEARCH', 'RAPID APPLICATION DEVELOPMENT'],
          'to': 'dreamgigs',
          'description': 'Prototyping and engineering work for the HCI department at the University of Michigan.',
          'date': 'Summer, Fall 2017',
          'live': false,
        },
        {
          'title': 'Photojournalism',
          'skills': ['35mm Film'],
          'to': 'disruption',
          'description': 'Photojournalist exploration of the relationship between man and machine, 35mm.',
          'date': 'Fall 2017',
          'live': false,
        },
        {
          'title': 'Genre Mixer',
          'skills': ['ALGORITHMIC COMPOSITION'],
          'to': 'genre-mixer',
          'description': 'Experimental max/msp patch and web application.',
          'date': 'Fall 2016',
          'live': false,
        },
      ]
    }
  },
};
</script>

<style>
.canvas__contain {
  width: 100%;
  border-radius: 2px;
  background: linear-gradient(
    124deg,
    #ff2400,
    #e81d1d,
    #e8b71d,
    #e3e81d,
    #1de840,
    #1ddde8,
    #2b1de8,
    #dd00f3,
    #dd00f3
  );
  background-size: 1800% 1800%;
  background-color: #ffa531;
  -webkit-animation: rainbow 60s ease infinite;
  -z-animation: rainbow 60s ease infinite;
  -o-animation: rainbow 60s ease infinite;
  animation: rainbow 60s ease infinite;
  transition: opacity 0.3s ease-out;
  -moz-transition: opacity 0.3s ease-out;
  -webkit-transition: opacity 0.3s ease-out;
  -o-transition: opacity 0.3s ease-out;
}

@-webkit-keyframes rainbow {
  0% {
    background-position: 0% 82%;
  }
  50% {
    background-position: 100% 19%;
  }
  100% {
    background-position: 0% 82%;
  }
}
@-moz-keyframes rainbow {
  0% {
    background-position: 0% 82%;
  }
  50% {
    background-position: 100% 19%;
  }
  100% {
    background-position: 0% 82%;
  }
}
@-o-keyframes rainbow {
  0% {
    background-position: 0% 82%;
  }
  50% {
    background-position: 100% 19%;
  }
  100% {
    background-position: 0% 82%;
  }
}
@keyframes rainbow {
  0% {
    background-position: 0% 82%;
  }
  50% {
    background-position: 100% 19%;
  }
  100% {
    background-position: 0% 82%;
  }
}

.canvas__contain:hover {
  opacity: 0.7;
  cursor: pointer;
  transition: opacity 0.3s ease-out;
  -moz-transition: opacity 0.3s ease-out;
  -webkit-transition: opacity 0.3s ease-out;
  -o-transition: opacity 0.3s ease-out;
}
</style>
