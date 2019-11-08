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
        console.log(event);
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
html {
  font-family: "Montserrat", sans-serif !important;
  font-weight: 300;
}
p, h1, h2, h3, h4, h5, h6, li {
  color: #505050;
}
p {
  font-size: 1rem;
}
img:hover {
  cursor: pointer;
  opacity: 0.75;
}
.content__contain__right {
  text-align: center;
  margin: 0 auto;
}
a {
  color: navy;
}
a:hover {
  background-color: coral;
}
</style>
