<template>
  <v-app id="app">
     <v-main>
      <v-container>
        <transition
          name="fade"
          mode="out-in"
        >
          <router-view/>
        </transition>
      </v-container>
      <v-footer fixed elevation="10">
        <v-layout justify-space-between flex>
          <span class="caption">Made in NY 🗽</span>
          <span class="caption"><a style="color: steelblue" href="https://github.com/jbrill/personal-site" target="_blank">Code</a></span>
        </v-layout>
      </v-footer>
    </v-main>
    <!-- Got more soul than a sock with a hole -->
  </v-app>
</template>

<script>
export default {
  name: "App",
  methods: {
    photoClick(event) {
      if (event.target.tagName === 'IMG') {
        if (event.target.currentSrc.includes('avatar')) {
          return;
        }
        window.open(event.srcElement.currentSrc, '_blank');
      }
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
.headerClass{
    white-space: nowrap ;
    word-break: normal;
    overflow: hidden ;
    text-overflow: ellipsis;
}
</style>
