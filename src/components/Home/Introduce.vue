<template>
  <div class="banner">
    <img
      class="image-banner"
      :class="introduce[index].classText"
      :src="introduce[index].image"
      alt=""
    />
    <div class="container" :class="introduce[index].classText">
      <div class="introduce">
        <h1>{{ introduce[index].title }}</h1>
        <h4>{{ introduce[index].description }}</h4>
        <button>
          <p>{{ introduce[index].button }}</p>
        </button>
        <div>
          <h4>{{ introduce[index].direct }}</h4>
          <div>
            <v-icon name="fa-chevron-right" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { IntroduceData } from "@/core";
import { defineComponent } from "@vue/runtime-core";
import { reactive, ref } from "vue";

export default defineComponent({
  name: "Introduce",
  setup() {
    const introduce = reactive(IntroduceData);
    const index = ref<number>(0);
    setInterval(() => {
      index.value++;
      console.log(index.value);

      if (index.value > introduce.length - 1) {
        index.value = 0;
      }
    }, 5000);
    return { introduce, index };
  },
});
</script>

<style lang="scss">
@import "../../assets/style.scss";
.banner {
  height: 500px;
  position: relative;
  .image-banner {
    height: 500px;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    object-fit: cover;
    object-position: right;
  }
  .white {
    button {
      @include button-custom(var(--white), var(--black));
    }
    h1,
    h4,
    svg {
      color: var(--white);
    }
  }
  .normal {
    animation: appear-image 3s normal;
  }
  .introduce {
    text-align: start;
    width: 40%;
    margin: 50px 0 auto;
    > button {
      @include button-custom(var(--black), var(--white));
    }
    > div {
      display: flex;
      align-items: center;
      color: var(--primary);
      &:hover {
        cursor: pointer;
        > div {
          margin-left: 10px;
        }
      }
    }

    h4 {
      font-weight: 600;
    }
  }
}
</style>
