<template>
  <div>
    <Base>
      <div class="content__contain__right">
        <p>🎵</p>
        <iframe
          width="100%"
          height="300"
          scrolling="no"
          frameborder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/68654277&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=true&show_teaser=true&visual=true"
        ></iframe>
      </div>
    </Base>
  </div>
</template>

<script>
import Base from "./Base.vue";
import VueRssFeed from "vue-rss-feed";

export default {
  name: "About",
  components: {
    Base,
    VueRssFeed
  }
};
</script>

<style></style>
