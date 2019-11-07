<template>
  <div id="app">
    <!-- Got more soul than a sock with a hole -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  methods: {
    photoClick(event) {
      if (event.target.tagName === 'IMG') {
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
html {
  font-family: "Montserrat", sans-serif !important;
  font-weight: 300;
}

img:hover {
  cursor: pointer;
  opacity: 0.75;
}
</style>
