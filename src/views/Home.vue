<template>
  <div class="home">
    <introduce />
    <slide-reason />
    <sell-car />
    <credit />
    <after-sell />
    <hubs />
    <videos-list />
    <custom-rating />
  </div>
</template>

<script lang="ts">
import AfterSell from "@/components/Home/AfterSell.vue";
import Credit from "@/components/Home/Credit.vue";
import Hubs from "@/components/Home/Hubs.vue";
import Introduce from "@/components/Home/Introduce.vue";
import SellCar from "@/components/Home/SellCar.vue";
import VideosList from "@/components/Home/VideosList.vue";
import { defineComponent } from "vue";
import SlideReason from "@/components/Home/SlideReason.vue";
import CustomRating from "@/components/Home/CustomRating.vue";

export default defineComponent({
  name: "Home",
  components: {
    Introduce,
    SellCar,
    Credit,
    AfterSell,
    Hubs,
    VideosList,
    SlideReason,
    CustomRating,
  },
});
</script>

<style lang="scss" scoped>
@import "../assets/style.scss";
.home {
  font-family: "Source Sans Pro", sans-serif;
}
</style>
