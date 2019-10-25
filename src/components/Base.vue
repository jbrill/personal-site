<template>
  <div>
    <div class="content__contain">
      <div class="content__contain__left">
        <div class="profile__contain">
          <router-link to="/"
            ><div id="orangeContain">
              <img :src="`${publicPath}avatar.png`" /></div
          ></router-link>
          <router-link to="/"
            ><h1 class="title__contain">JASON BRILL</h1></router-link
          >
        </div>
        <ul class="menu__contain">
          <router-link to="/about" tag="li">WHO AM I</router-link>
          <router-link to="/portfolio" tag="li">PORTFOLIO</router-link>
          <li><a href="mailto:jbrill95@gmail.com">EMAIL</a></li>

          <!-- <router-link to="/photography" tag="li">PHOTOGRAPHY</router-link> -->
          <!-- <router-link to="/music" tag="li">MUSIC</router-link> -->
        </ul>
      </div>
      <div class="content__contain__right">
        <slot></slot>
        <div class="bottom__feed__contain">
          <div class="outbound__contain">
            //
            <span class="outbound__contain__contact"
              ><a
                href="https://flickr.com/photos/jlbrill"
                target="_blank"
                >PHOTOS</a
              ></span
            >
            //
            <span class="outbound__contain__contact"
              ><a href="https://www.soundcloud.com/brillay/" target="_blank"
                >MUSIC</a
              ></span
            >
            //
            <span class="outbound__contain__contact"
              ><a href="https://www.github.com/jbrill/" target="_blank"
                >CODE</a
              ></span
            >
            //
          </div>
          <div class="lower__copyright">
            COPYRIGHT © JASON BRILL
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Base",
  data() {
    return {
      publicPath: process.env.BASE_URL
    };
  }
};
</script>

<style>
html {
  font-family: "Proxima Nova";
  width: 100%;
  height: 100%;
}

body {
  background-color: white;
  width: 80%;
  height: 100%;
  margin: auto;
  margin-top: 4%;
  animation-name: fadeInOpacity;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 1s;
}

a {
  text-decoration: none;
  color: black;
}

#orangeContain {
  top: 0;
  right: 0;
  width: 40%;
  height: auto;
  background-color: #ffa531;
}

#orangeContain img {
  width: 100%;
}

#orangeContain:hover {
  cursor: alias;
}

.content__contain {
  width: 100%;
  animation-name: fadeInOpacity;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 1s;
  transition: opacity 0.3s ease-out;
  -moz-transition: opacity 0.3s ease-out;
  -webkit-transition: opacity 0.3s ease-out;
  -o-transition: opacity 0.3s ease-out;
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

.content__contain__left {
  float: left;
  width: 25%;
}

.content__contain__right {
  width: 75%;
  float: right;
  font-size: 1.5rem;
  margin-top: 3rem;
}

.menu__contain {
  list-style: none;
  margin-top: 4rem;
  width: 100%;
  margin-bottom: 0;
  padding-left: 1.2rem;
}

.menu__contain li {
  margin-bottom: 2em;
  color: navy;
  font-weight: 500;
}

.menu__contain li:hover {
  cursor: pointer;
  text-decoration: line-through;
}

.menu__contain li a {
  color: navy;
}

.about__contain {
  width: 80%;
  font-weight: 300;
  margin-bottom: 2rem;
}

.about__contain__header {
  font-style: normal;
}

.outbound__contain {
  bottom: 0;
  right: 2rem;
  font-size: 0.8rem;
  padding-bottom: 10px;
  font-style: oblique;
  text-align: right;
  color: purple;
}

.outbound__contain__contact:hover {
  cursor: pointer;
  background-color: coral;
}

.outbound__contain a {
  text-decoration: none;
  color: black;
}
.bottom__feed__contain {
  position: fixed;
  right: 20px;
  bottom: 0;
  min-width: 20%;
  margin-top: 10vh;
  /* z-index: -10; */
}

.lower__copyright {
  bottom: 0;
  margin: 0 auto;
  width: 100%;
  padding-bottom: 10px;
  text-align: right;
  left: 2rem; /* approx */
  opacity: 0.6;
  font-size: 0.3rem;
  font-weight: 100;
  z-index: -10;
}

@keyframes fadeInOpacity {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

::selection {
  background: #ffa531;
}

#orangeContain {
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

  -webkit-animation: rainbow 60s ease infinite;
  -z-animation: rainbow 60s ease infinite;
  -o-animation: rainbow 60s ease infinite;
  animation: rainbow 60s ease infinite;
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

@media only screen and (max-width: 800px) {
  .content__contain__left {
    width: 100%;
    margin-top: 1rem;
  }
  .profile__contain {
    float: left;
    width: 30%;
  }
  .menu__contain {
    margin-top: 0;
    padding-left: 0;
    text-align: right;
  }
  .content__contain__right {
    width: 100%;
    height: 100%;
    overflow: auto;
    margin-top: 0;
  }
  .bottom__feed__contain {
    position: relative;
  }
}
</style>
