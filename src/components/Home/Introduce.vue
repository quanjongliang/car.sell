<template>
  <div class="banner">
    <img
      class="image-banner"
      src="https://images.kavak.services/br/assets/images/home/webp/main-hero-lg.webp"
      alt=""
    />
    <div class="introduce">
      <h1>More than 5,000 used cars at Kavak with free property tax</h1>
      <p>Amazing used cars with a 2 year warranty and quality certificates</p>
      <button><p>See the catalog</p></button>
      <div>
        <p>sell or exchange your car</p>
        <div>
          <v-icon name="fa-chevron-right" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "Introduce",
});
</script>

<style lang="scss">
@import "../../assets/style.scss";
.banner {
  position: relative;
  .image-banner {
    width: 100%;
  }
  .introduce {
    position: absolute;
    top: 15%;
    text-align: start;
    padding: 50px;
    width: 40%;
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

    p {
      font-weight: 600;
    }
  }
}
</style>
