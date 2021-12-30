<template>
  <div class="sell-car">
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
      title: "Schedule an inspection at home or at our nearest store",
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
  padding: 50px 200px;
  > div {
    width: 50%;
  }
  &__left {
    text-align: start;
    color: var(--white);
    > button {
      @include button-custom(var(--white), var(--black));
    }
    hr {
      color: var(--white);
      margin-bottom: 24px;
    }
  }
  &__right {
    align-items: center;
    display: flex;
    justify-content: center;
  }
}
</style>
