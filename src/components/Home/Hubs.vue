<template>
  <div class="hubs">
    <div class="container">
      <div>
        <h1>{{ hubs.title }}</h1>
        <div class="hubs-list">
          <div v-for="(hub, i) in hubs.hubs" :key="i" class="hub-item">
            <div>
              <div class="hub-item-image">
                <img :src="hub.image" alt="" />
              </div>
              <div class="hub-item-first">
                <h2>{{ hub.name }}</h2>
                <p>{{ hub.address }}</p>
              </div>
              <div class="hub-item-second">
                <div>
                  <p>{{ hubs.inventory }}</p>
                  <h4>{{ hub.inventory }}</h4>
                </div>
                <div>
                  <button>
                    <router-link to="/"
                      ><p>{{ hubs.buttonChild }}</p></router-link
                    >
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button>
          <p>{{ hubs.button }}</p>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { HubData } from "@/core";
import { defineComponent, reactive } from "@vue/runtime-core";

export default defineComponent({
  name: "Hubs",
  setup() {
    const hubs = reactive(HubData);
    return { hubs };
  },
});
</script>

<style lang="scss">
@import "../../assets/style.scss";
a {
  text-decoration: none;
}
.hubs {
  > div {
    > div {
      width: 100%;
      .hubs-list {
        display: flex;
        flex-wrap: wrap;
        margin-right: -1rem;
        margin-left: -1rem;
        margin-bottom: 40px;
        justify-content: space-between;
        .hub-item {
          width: 23%;
          height: 400px;
          text-align: start;
          border-radius: 10px;
          border: var(--primary) 1px solid;
          > div {
            height: 100%;
          }
          &-image {
            > img {
              width: 100%;
            }
          }
          &-first {
            padding: 10px;
            > p {
              height: 60px;
            }
          }
          &-second {
            display: flex;
            align-items: center;
            padding: 10px;
            justify-content: space-between;
            > div {
              button {
                @include button-custom(var(--white), var(--black));
                border: var(--black) 1px solid;
                margin: 0;
              }
              > p,
              h4 {
                margin: 0;
              }
            }
          }
        }
      }
    }
  }
}
</style>
