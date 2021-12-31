<template>
  <div class="videos">
    <h1>{{ videos.title }}</h1>
    <div class="container">
      <div class="videos-list">
        <img
          v-for="(hub, i) in videos.videos"
          :key="i"
          :src="hub"
          alt=""
          class="video-image"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { VideoData } from "@/core";
import { defineComponent, reactive } from "@vue/runtime-core";

export default defineComponent({
  name: "Hubs",
  setup() {
    const videos = reactive(VideoData);
    return { videos };
  },
});
</script>

<style lang="scss" scoped>
@import "../../assets/style.scss";
h1 {
  color: white;
  font-size: 50px;
}
.container {
  overflow: hidden;
}
.videos {
  padding: 30px 0 80px 0;
  background-color: var(--primary);
  &-list {
    display: flex;
    overflow-x: hidden;
    text-align: start;
    width: auto;
    position: relative;
    animation: slide 5s ease infinite;
    .video-image {
      width: 300px;
      margin-right: 10px;
    }
  }
}

@keyframes slide {
  20% {
    margin-left: 0px;
  }
  30% {
    margin-left: -728px;
  }
  50% {
    margin-left: -728px;
  }
  60% {
    margin-left: -1456px;
  }
  80% {
    margin-left: -1456px;
  }
}
</style>
