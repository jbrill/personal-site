<template>
  <div>
    <Base>
      <h2>PROJECTS</h2>
      <div class="projects__contain">
        <router-link
          to="/photography/vietnam"
          tag="div"
          id="vietnam__project"
          class="projects__project"
        >
          <div class="projects__project__content">
            Vietnam [2018]
          </div>
        </router-link>
        <router-link
          to="/photography/china"
          tag="div"
          id="china__project"
          class="projects__project"
        >
          <div class="projects__project__content">
            China // Taiwan [2018]
          </div>
        </router-link>
        <router-link
          to="/photography/technology"
          tag="div"
          id="technology__project"
          class="projects__project"
        >
          <div class="projects__project__content">
            Technology’s Consumption [2017]
          </div>
        </router-link>
        <router-link
          to="/photography/south_africa"
          tag="div"
          id="south_africa__project"
          class="projects__project"
        >
          <div class="projects__project__content">
            South Africa [2016]
          </div>
        </router-link>
        <router-link
          to="/photography/etc"
          tag="div"
          id="etc__project"
          class="projects__project"
        >
          <div class="projects__project__content">
            Etc [?]
          </div>
        </router-link>
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
  color: black;
}
#vietnam__project .projects__project__content {
  background-image: url("~@/assets/images/bikeshop.jpg");
  background-size: cover;
}
</style>
