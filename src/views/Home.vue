<template>
  <div class="home">
    <introduce />
    <sell-car />
    <credit />
    <after-sell />
    <hubs />
    <videos-list />
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

export default defineComponent({
  name: "Home",
  components: {
    Introduce,
    SellCar,
    Credit,
    AfterSell,
    Hubs,
    VideosList,
  },
});
</script>

<style lang="scss" scoped>
@import "../assets/style.scss";
.home {
  font-family: "Source Sans Pro", sans-serif;
}
</style>
