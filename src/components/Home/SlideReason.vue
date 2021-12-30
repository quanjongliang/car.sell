<template>
  <div class="container-reason">
    <h1>7 reasons to buy a car at Kavak</h1>
    <div class="slide-reason">
      <button class="button button-left">
        <v-icon name="fa-chevron-left" />
      </button>
      <div class="list-image">
        <div v-for="(car, i) in carReason" :key="i">
          <img :src="car.image" alt="" />
          <h1>{{ car.title }}</h1>
          <div>
            <p v-for="(desc, i) in car.description" :key="i">
              {{ desc }}
            </p>
          </div>
        </div>
      </div>
      <button class="button button-right">
        <v-icon name="fa-chevron-right" />
      </button>
    </div>
  </div>
  <button class="button-check-out"><p>Check out our catalog</p></button>
</template>

<script lang="ts">
import { reasonCarData } from "@/core";
import { ReasonCar } from "@/interfaces";
import { defineComponent } from "@vue/runtime-core";
import { ref } from "vue";

export default defineComponent({
  name: "SlideReason",
  setup() {
    const carReason = ref<ReasonCar[]>(reasonCarData);
    return { carReason };
  },
});
</script>

<style lang="scss" scoped>
@import "../../assets/style.scss";
.slide-reason {
  display: flex;
  padding: 0 3%;
  text-align: start;
  width: auto;
  position: relative;
  .list-image {
    width: 90vw;
    display: flex;
    overflow: hidden;
    overflow-x: hidden;
    overflow-x: auto;
    > div {
      margin: 5px;
      border-radius: 10px;
      box-shadow: 0 0.063rem 0.313rem 0 rgb(70 70 70 / 15%),
        0 0.125rem 0.125rem 0 rgb(70 70 70 / 15%),
        0 0.188rem 0.125rem -0.125rem rgb(70 70 70 / 15%);
      > img {
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
      }
    }
  }
  .button {
    background-color: rgba(0, 0, 0, 0.178);
    &-left {
      position: absolute;
      height: 100%;
    }
    &-right {
      position: absolute;
      height: 100%;
      right: inherit;
    }
  }
}
.button-check-out {
  @include button-custom(var(--black), var(--white));
  margin-top: 30px;
}
</style>
