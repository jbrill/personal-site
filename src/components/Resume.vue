<template>
  <div class="resume__contain">
    <object
      class="resume"
      :data="`${publicPath}resume.pdf`"
      type="application/pdf"
    >
      <embed :src="`${publicPath}resume.pdf`" type="application/pdf" />
    </object>
  </div>
</template>

<script>
export default {
  name: "Resume",
  data() {
    return {
      publicPath: process.env.BASE_URL
    };
  }
};
</script>

<style>
#app {
  height: 100%;
}
.resume__contain {
  width: 100%;
  height: inherit;
}
.resume {
  width: 100%;
  height: 100%;
}
</style>
