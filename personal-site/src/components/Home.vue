<template>
  <div>
    <Base>
      <canvas class="canvas__contain"></canvas>
    </Base>
  </div>
</template>

<script>
import Base from "./Base.vue";

export default {
  name: "Home",
  components: {
    Base
  },
  data() {
    return {
      canvasValues: [
        { val: 24, color: "red" },
        { val: 32, color: "#0f0" },
        { val: 66, color: "rebeccapurple" },
        { val: 1, color: "green" },
        { val: 28, color: "blue" },
        { val: 60, color: "rgba(150, 100, 0, 0.2)" }
      ]
    };
  },
  mounted() {
    // let dir = 1;
    // let selectedVal = Math.floor(Math.random() * this.canvasValues.length);
    //
    // setInterval(() => {
    //   if (Math.random() > 0.995) dir *= -1;
    //   if (Math.random() > 0.99)
    //     selectedVal = Math.floor(Math.random() * this.canvasValues.length);
    //
    //   this.canvasValues[selectedVal].val = Math.min(
    //     Math.max(this.canvasValues[selectedVal].val + dir * 0.5, 0),
    //     100
    //   );
    //   console.log(this.canvasValues);
    // }, 100);
  }
};
</script>

<style>
.canvas__contain {
  width: 70%;
  height: 10rem;
  background-color: black;
  margin-top: 2rem;
}
</style>
