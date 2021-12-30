<template>
  <introduce />
  <slide-reason />
  <sell-car />
</template>

<script lang="ts">
import Introduce from "@/components/Home/Introduce.vue";
import SellCar from "@/components/Home/SellCar.vue";
import SlideReason from "@/components/Home/SlideReason.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  components: { Introduce, SlideReason, SellCar },
});
</script>
