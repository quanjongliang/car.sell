<template>
  <div class="videos">
    <h1>{{ videos.listVideos.title }}</h1>
    <div class="container">
      <div class="videos-list">
        <div v-for="(hub, i) in func222(videos.step)" :key="i" :class="i">
          <transition
            name="video"
            enter-active-class="video-enter-active"
            leave-active-class="video-leave-active"
          >
            <img :src="hub" alt="" class="video-image" />
          </transition>
        </div>
        <button @click="setIndexVideos" class="button-next">
          <v-icon name="fa-chevron-right" scale="2.5" />
        </button>
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
    const videos = reactive({
      listVideos: VideoData,
      step: 2,
    });
    return { videos };
  },
  methods: {
    setIndexVideos() {
      this.videos.step++;
      if (
        this.videos.step * 2 + 2 >=
        this.videos.listVideos.videos.length - 1
      ) {
        this.videos.step = 0;
      }
    },
    func222(step: number): string[] {
      return this.videos.listVideos.videos.slice(step * 2, step * 2 + 4);
    },
  },
});
</script>

<style lang="scss" scoped>
@import "../../assets/style.scss";
h1 {
  color: white;
  font-size: 50px;
}

.videos {
  padding: 30px 0 80px 0;
  background-color: var(--primary);
  &-list {
    display: flex;
    text-align: start;
    width: auto;
    position: relative;
    overflow: hidden;
    .video-image {
      width: 300px;
      margin-right: 10px;
    }
    .button-next {
      position: absolute;
      right: 0;
      top: -2px;
      height: 100%;
      width: 20px;
      > svg {
        margin-left: -15px;
      }
      background-color: #00000096;
      &:hover {
        background-color: #000000d0;
        color: white;
      }
    }
  }
}

.video-enter-active {
  animation: video-in 0.5s;
}
.video-leave-active {
  animation: video-in 0.5s reverse;
}
@keyframes video-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
