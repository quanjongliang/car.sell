<template>
  <div class="container-reason">
    <h1>7 reasons to buy a car at Kavak</h1>
    <div class="container">
      <div class="slide-reason">
        <button
          class="button button-left"
          @click="prevSlide"
          v-if="carReason.showLeft"
        >
          <v-icon name="fa-chevron-left" scale="2.5" />
        </button>
        <div class="list-image">
          <div
            v-for="(car, i) in getDataByIndex(carReason.step)"
            :key="i"
            class="list-image-slide"
          >
            <img :src="car.image" alt="" />
            <div>
              <h1>{{ car.title }}</h1>
              <div>
                <p v-for="(desc, i) in car.description" :key="i">
                  {{ desc }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <button class="button button-right" @click="nextSlide">
          <v-icon name="fa-chevron-right" scale="2.5" />
        </button>
      </div>
    </div>
  </div>
  <button class="button-check-out"><p>Check out our catalog</p></button>
</template>

<script lang="ts">
import { reasonCarData } from "@/core";
import { ReasonCar } from "@/interfaces";
import { defineComponent } from "@vue/runtime-core";
import { reactive } from "vue";

export default defineComponent({
  name: "SlideReason",
  setup() {
    const carReason = reactive({
      data: reasonCarData,
      step: 0,
      showLeft: false,
      open: false,
    });

    return { carReason };
  },
  methods: {
    nextSlide() {
      this.carReason.step++;
      if (this.carReason.step * 2 + 2 >= this.carReason.data.length - 1) {
        this.carReason.step = 0;
      }
      this.checkShowButton();
    },
    prevSlide() {
      this.carReason.step--;
      this.checkShowButton();
    },
    checkShowButton() {
      if (this.carReason.step == 0) {
        this.carReason.showLeft = false;
      } else {
        this.carReason.showLeft = true;
      }
      this.carReason.open = true;
      setInterval(() => {
        this.carReason.open = false;
      }, 4000);
    },
    getDataByIndex(step: number): ReasonCar[] {
      return this.carReason.data.slice(step * 2, step * 2 + 4);
    },
  },
});
</script>

<style lang="scss" scoped>
@import "../../assets/style.scss";
.container-reason {
  .slide-reason {
    display: flex;
    text-align: start;
    width: auto;
    position: relative;
    overflow: hidden;
    .list-image {
      display: flex;
      overflow: hidden;
      > div {
        margin: 5px;
        border-radius: 10px;
        box-shadow: 0 0.063rem 0.313rem 0 rgb(70 70 70 / 15%),
          0 0.125rem 0.125rem 0 rgb(70 70 70 / 15%),
          0 0.188rem 0.125rem -0.125rem rgb(70 70 70 / 15%);
        img {
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
          width: 290px;
        }
        > div {
          padding: 10px;
        }
      }
      &-slide {
        float: left;
      }
    }
    .button {
      background-color: rgba(0, 0, 0, 0.521);
      width: 10px;
      > svg {
        margin-left: -20px;
      }
      &:hover {
        border: none;
        background-color: rgba(0, 0, 0, 0.815);
        color: white;
      }
      &-left {
        position: absolute;
        height: 100%;
        text-align: center;
      }
      &-right {
        position: absolute;
        text-align: center;
        height: 100%;
        right: 0;
      }
    }
  }
}
.button-check-out {
  @include button-custom(var(--black), var(--white));
  margin-top: 30px;
}
</style>
