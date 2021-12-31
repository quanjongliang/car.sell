<template>
  <div class="after-sell">
    <div class="container">
      <div class="after-sell-right">
        <h1>{{ creditInfor.title }}</h1>
        <p>{{ creditInfor.description }}</p>
        <div>
          <button>
            <p>{{ creditInfor.button }}</p>
          </button>
        </div>
      </div>
      <div class="after-sell-image">
        <img class="after-sell-image-phone" :src="creditInfor.image" alt="" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { AfterSellData } from "@/core";
import { defineComponent } from "@vue/runtime-core";
import { reactive } from "vue";

export default defineComponent({
  name: "AfterSell",
  setup() {
    const creditInfor = reactive(AfterSellData);
    return { creditInfor };
  },
});
</script>

<style lang="scss">
@import "../../assets/style.scss";

.after-sell {
  background-color: var(--primary);

  &-image {
    width: 50%;
  }
  &-right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: start;
    width: 50%;
    > h1 {
      font-size: 50px;
      color: var(--white);
      width: 80%;
    }
    > p {
      margin-bottom: 4rem;
      color: var(--white);
    }
    > div {
      button {
        @include button-custom(var(--white), var(--black));
        border: none;
      }
    }
  }
}
</style>
