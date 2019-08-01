<template>
  <div>
    <Base>
      <h2>SOUTH AFRICA [2016]</h2>
      <div class="photo__stream">
        <div class="photo__stream__contain">
          <img class="photo__stream__img" src="@/assets/images/cheetah.jpg" />
          <p class="photo__stream__text">
            "Lengau Stare"
          </p>
          <p class="photo__stream__text">
            Kruger National Park, South Africa - 2016
          </p>
        </div>
        <div class="photo__stream__contain">
          <img class="photo__stream__img" src="@/assets/images/elephant.jpg" />
          <p class="photo__stream__text">"Shake ya head"</p>
          <p class="photo__stream__text">South Central South Africa - 2016</p>
        </div>
        <div class="photo__stream__contain">
          <img class="photo__stream__img" src="@/assets/images/branched.jpg" />
          <p class="photo__stream__text">
            "Branched Red-winged Starling"
          </p>
          <p class="photo__stream__text">
            Cape Town, South Africa - 2016
          </p>
        </div>
      </div>
    </Base>
  </div>
</template>

<script>
import Base from "../Base.vue";

export default {
  name: "Photos",
  components: {
    Base
  }
};
</script>

<style>
.photo__stream {
  margin-bottom: 12%;
}
.photo__stream__contain {
  margin-bottom: 10%;
}
.photo__stream__img {
  border: 2px solid #f1f1f1;
  width: 100%;
  height: auto;
  animation-name: fadeInOpacity;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 1s;
  transition: opacity 0.3s ease-out;
  -moz-transition: opacity 0.3s ease-out;
  -webkit-transition: opacity 0.3s ease-out;
  -o-transition: opacity 0.3s ease-out;
}
.photo__stream__img:hover {
  cursor: pointer;
  opacity: 0.5;
  transition: opacity 0.3s ease-out;
  -moz-transition: opacity 0.3s ease-out;
  -webkit-transition: opacity 0.3s ease-out;
  -o-transition: opacity 0.3s ease-out;
}

.photo__stream__text {
  color: grey;
  font-size: 1rem;
  margin-top: 0.2rem;
  text-align: right;
}

.bottom__feed__contain {
  position: relative;
}
.projects__contain {
  display: flex;
  flex-wrap: wrap;
}
.projects__project {
  animation-name: fadeInOpacity;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 1s;
  transition: opacity 0.3s ease-out;
  -moz-transition: opacity 0.3s ease-out;
  -webkit-transition: opacity 0.3s ease-out;
  -o-transition: opacity 0.3s ease-out;

  position: relative;
  flex-basis: calc(90%);
  margin-right: 5%;
  margin-left: 5%;
  margin-bottom: 15%;
  border: 1px solid;
  background-color: black;
  box-sizing: border-box;
}
.projects__project::before {
  content: "";
  display: block;
  padding-top: 100%;
}
.projects__project:hover {
  cursor: pointer;
  opacity: 0.5;
  transition: opacity 0.3s ease-out;
  -moz-transition: opacity 0.3s ease-out;
  -webkit-transition: opacity 0.3s ease-out;
  -o-transition: opacity 0.3s ease-out;
}
.projects__project__content {
  position: absolute;
  text-align: right;
  width: 100%;
  font-size: 1.5rem;
  padding-top: 20px;
  font-weight: bold;
}
</style>
