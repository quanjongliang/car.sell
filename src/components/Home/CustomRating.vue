!
<template>
  <div class="custom-rating">
    <div class="custom-rating__rating">
      <div class="custom-rating__rating--title">
        <h1>{{ reviews.data.title }}</h1>
      </div>
      <div>
        <span>{{ reviews.rating }}</span>
        <div class="custom-rating__rating--rating">
          <div v-for="i in 5" :key="i" :class="~reviews.split[0]">
            <v-icon
              name="bi-star-fill"
              scale="2"
              fill="orange"
              v-if="i < reviews.split[0] + 1"
            />
            <v-icon
              name="bi-star-half"
              scale="2"
              fill="orange"
              v-else-if="i == reviews.split[0] + 1 && reviews.split[1]"
            />
            <v-icon
              name="bi-star"
              scale="2"
              fill="orange"
              v-else-if="i > reviews.split[0] + 1"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="rating-video">
        <img :src="reviews.data.image" alt="" />
      </div>
      <img :src="reviews.data.background" alt="" class="img-background" />
    </div>
    <button>
      <p>{{ reviews.data.button }}</p>
    </button>
  </div>
</template>

<script lang="ts">
import { RatingData } from "@/core";
import { Review } from "@/interfaces";
import { defineComponent } from "@vue/runtime-core";
import { reactive } from "vue";

export default defineComponent({
  name: "CustomRating",
  setup() {
    const reviews = reactive({
      data: RatingData,
      rating: 0,
      split: [0],
    });
    calAverage(reviews.data.reviews);
    function calAverage(reviewList: Review[]) {
      const result = {
        rating: 0,
        split: [0],
      };

      reviewList.forEach((r) => {
        result.rating += r.rating;
      });
      result.rating = result.rating / reviewList.length;
      result.split = result.rating.toString().split(".").map(Number) || [
        result.rating,
      ];
      reviews.rating = result.rating;
      reviews.split = result.split;
    }
    console.log(reviews.split[0]);

    return { reviews };
  },
});
</script>

<style lang="scss">
@import "../../assets/style.scss";

.custom-rating {
  text-align: center;
  &__rating {
    h1 {
      font-size: 50px;
      width: 80%;
    }
    > div {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &--rating {
      display: flex;
    }
  }
}
.rating-video {
  width: 100%;
  position: relative;
}

.img-background {
  position: absolute;
  width: 30%;
  z-index: -1;
}
</style>
