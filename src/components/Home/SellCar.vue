<template>
  <div class="sell-car">
    <div class="container">
      <div class="sell-car__left">
        <h1>{{ sellCarPage.title }}</h1>
        <div v-for="(desc, i) in sellCarPage.description" :key="i">
          <p>{{ desc }}</p>
          <hr />
        </div>
        <button>
          <p>{{ sellCarPage.button }}</p>
        </button>
      </div>
      <div class="sell-car__right">
        <img :src="sellCarPage.image" alt="" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { reactive } from "vue";

export default defineComponent({
  name: "SellCar",
  setup() {
    const sellCarPage = reactive({
      image:
        "https://images.kavak.services/br/assets/images/home/jpg/jumbotron-change-sell-sm.jpg",
      title: "Change or sell your car in 1 day",
      description: [
        "Schedule an inspection at home or at our nearest store",
        "Sell ​​your car at competitive prices in the market",
        "Exchange your car at Kavak and get exclusive after-sales benefits",
      ],
      button: "I want to sell",
    });
    return { sellCarPage };
  },
});
</script>

<style lang="scss" scoped>
@import "../../assets/style.scss";
.sell-car {
  background-color: var(--primary);
  display: flex;
  .container {
    > div {
      width: 50%;
    }
    .container {
      width: 80%;
      margin: 0 auto;
      padding: 25px 0;
      height: 100%;
      display: flex;
    }
  }
  &__left {
    text-align: start;
    color: var(--white);
    width: 50%;
    margin: 50px auto;
    > button {
      @include button-custom(var(--white), var(--black));
    }
    hr {
      color: var(--white);
      margin-bottom: 24px;
    }
  }
  &__right {
    width: 50%;
    display: flex;
    > img {
      width: 100%;
    }
  }
}
</style>
