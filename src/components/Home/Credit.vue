<template>
  <div class="credit">
    <div class="container">
      <div class="credit-image">
        <img class="credit-image-phone" :src="creditInfor.image" alt="" />
        <img
          class="credit-image-back-ground"
          :src="creditInfor.backGround"
          alt=""
        />
      </div>
      <div class="credit-right">
        <h1>{{ creditInfor.title }}</h1>
        <p>{{ creditInfor.description }}</p>
        <div>
          <button>
            <p>{{ creditInfor.button }}</p>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { CreditData } from "@/core";
import { defineComponent } from "@vue/runtime-core";
import { reactive } from "vue";

export default defineComponent({
  name: "Credit",
  setup() {
    const creditInfor = reactive(CreditData);
    return { creditInfor };
  },
});
</script>

<style lang="scss">
@import "../../assets/style.scss";
.credit {
  overflow: hidden;
  &-image {
    width: 50%;
    &-phone {
      width: 80%;
    }
    &-back-ground {
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: -1;
      width: 40%;
    }
  }
  &-right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: start;
    width: 50%;
    > h1 {
      font-size: 50px;
      color: var(--black);
    }
    > p {
      margin-bottom: 4rem;
    }
  }
}
button {
  @include button-custom(var(--black), var(--white));
}
</style>
