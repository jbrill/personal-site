<template>
  <div>
    <Base>
      <div class="top__contain">
        <h2 class="experience__title">EXPERIENCE</h2>
        <a class="resume__link" href="#">resume</a>
      </div>
      <div class="work__contain">
        <div class="work__company">
          <svg
            data-v-14ea3c94=""
            role="presentation"
            viewBox="0 0 234.57 203.64"
            class="clinc__img work__img"
          >
            <path
              d="M419.53,129.33,408.24,109.8c-2.19-3.77-3.08-6.85-2.46-9.4a11,11,0,0,1,5.53-6.61l6.13-3.59-9-15.61-6.19,3.58a11.07,11.07,0,0,1-8.48,1.49c-2.56-.67-4.78-3-7-6.75l-11.3-19.53c-3.52-6.05-8.15-10-14.31-11.67-5.11-1.36-11-.31-18,3.75l-13.74,7.95,9.13,15.74L345.72,65c4-2.34,6.43-3.17,8.77-2.55s4.5,2.8,7.16,7.36L372.17,88c5.61,9.69,12.79,8.77,17.07,8.09-2.72,3.38-7.11,9.14-1.48,18.84l10.58,18.2c2.65,4.58,3.38,7.35,2.85,9.81s-2.54,4.09-6.53,6.37l-7.14,4.15,9.13,15.74,13.73-7.94c7-4,10.84-8.59,12.19-13.71C424.18,141.38,423,135.38,419.53,129.33Z"
              transform="translate(-188.71 -34.93)"
            ></path>
            <path
              d="M263,140.62A46.31,46.31,0,1,0,276.75,108,46.31,46.31,0,0,0,263,140.62Zm28.11-18.11a25.93,25.93,0,1,1-7.71,18.28A25.92,25.92,0,0,1,291.07,122.51Z"
              transform="translate(-188.71 -34.93)"
            ></path>
            <polygon
              points="71.48 25.73 88.56 35.61 97.6 20.02 63.04 0 0 108.79 34.55 128.82 43.59 113.22 26.52 103.32 71.48 25.73"
            ></polygon>
            <path
              d="M341.37,238.57c6.55,0,13.24-.43,19.19-3.84s10.42-8.16,15.33-13.06l-13.11-13.08c-3.57,3.54-5.51,5.77-9.81,8.3q-4,2.24-12.5,2.21h-63q-8.47,0-12.5-2.21c-4.31-2.53-6.25-4.74-9.81-8.3l-13.06,13.08c4.91,4.91,9.53,9.65,15.33,13.06s12.64,3.85,19.18,3.84Z"
              transform="translate(-188.71 -34.93)"
            ></path>
          </svg>
          <p class="work__title clinc__title">
            <a href="https://www.clinc.com/" target="_blank">
              Clinc
            </a>
          </p>
        </div>
      </div>
      <div class="work__contain">
        <div class="work__company">
          <img class="work__img" src="@/assets/work/michigan.png" />

          <p class="work__title">
            <a href="https://www.eecs.umich.edu/" target="_blank">
              University of Michigan, EECS Department</a
            >
          </p>
        </div>
      </div>
      <div class="work__contain">
        <div class="work__company">
          <img class="work__img" src="@/assets/work/michigan2.png" />

          <p class="work__title">
            <a href="https://www.si.umich.edu/" target="_blank">
              University of Michigan, School of Information
            </a>
          </p>
        </div>
      </div>
      <div class="work__contain">
        <div class="work__company">
          <img class="work__img liquid__img" src="@/assets/work/liquid.png" />

          <p class="work__title liquid__title">
            <a href="https://www.liquidthought.co.za/" target="_blank">
              Liquid Thought
            </a>
          </p>
        </div>
      </div>
      <div class="work__contain">
        <div class="work__company">
          <img class="work__img" src="@/assets/work/duckduckgo.png" />

          <p class="work__title duckduckgo__title">
            <a href="https://www.duckduckgo.com/" target="_blank">
              DuckDuckGo
            </a>
          </p>
        </div>
      </div>
      <h2>PROJECTS</h2>
      <div class="projects__contain">
        <div class="projects__project">
          <div class="projects__project__content">
            Neptune
          </div>
        </div>
        <div class="projects__project">
          <div class="projects__project__content">
            Drawing
          </div>
        </div>
      </div>
    </Base>
  </div>
</template>

<script>
import Base from "./Base.vue";

export default {
  name: "Work",
  components: {
    Base
  }
};
</script>

<style>
.work__contain {
  display: table-row;
  margin-bottom: 10%;
}
.work__dates {
  text-align: right;
  font-style: oblique;
  font-weight: lighter;
  font-size: 1rem;
  margin-top: 10px;
}
.work__company a:hover {
  color: coral;
  font-weight: bold;
  cursor: pointer;
}
.work__company {
  display: grid;
  grid-template-columns: 15% 85%;
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
  flex-basis: calc(30%);
  margin-right: 10%;
  margin-left: 10%;
  margin-bottom: 10%;
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
.projects__project .content {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  color: white;
}
.work__img {
  height: auto;
  width: 50%;
  margin: 0 auto;
  padding-top: 10px;
  padding-bottom: 10px;
}
.work__img p {
  padding-top: 0;
}
.work__title {
  padding-left: 2rem;
  margin: 0;
  font-size: 1.3rem;
  display: table-cell;
  vertical-align: middle;
}
.liquid__img {
  filter: invert(100%);
}
.projects__project__content {
  background-image: url(/assets/work/neptune.svg);
}
/* .resume__link {

} */
.resume__link {
  text-align: center;
  vertical-align: middle;
  font-weight: bolder;
  color: coral;
  font-size: 1rem;
  text-align: center;
}
.resume__link:hover {
  cursor: pointer;
}
.experience__title {
  /* margin-top: 0; */
  margin-bottom: 0.5rem;
}
.top__contain {
  margin-bottom: 5%;
}
</style>
