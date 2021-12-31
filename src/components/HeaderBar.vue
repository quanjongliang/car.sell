<template>
  <div class="header">
    <div class="container">
      <div class="header-logo"><router-link to="/">LOGO</router-link></div>
      <div class="header-router">
        <div>
          <router-link to="/buy">Buy a car</router-link>
        </div>
        <div>
          <router-link to="/sell">Sell Car</router-link>
        </div>
        <div>
          <router-link to="/app">Kavak App</router-link>
        </div>
        <div class="header-router__about">
          <div class="header-router__about-left" @click="setOpenModal('about')">
            <p>About</p>
            <v-icon
              name="fa-angle-down"
              :class="openModal.about && 'active-icon'"
            />
          </div>
          <div class="header__modal" v-if="openModal.about">
            <div>Where are we</div>
            <div>Where are we</div>
            <div>Where are we</div>
          </div>
        </div>
        <div class="header-router__user">
          <div class="header-router__user-left" @click="setOpenModal('user')">
            <v-icon name="la-user-circle-solid" scale="1.5" />
            <p>My Account</p>
          </div>
          <div class="header__modal" v-if="openModal.user">
            <div>Where are we</div>
            <div>Where are we</div>
            <div>Where are we</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { tplotOptions } from "@/interfaces";
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "HeaderBar",
  setup() {
    const openModal: tplotOptions = reactive({
      about: false,
      user: false,
    });

    const setOpenModal = (modal: string) => {
      for (const property in openModal) {
        openModal[property] = property === modal ? !openModal[property] : false;
      }
    };

    return { openModal, setOpenModal };
  },
});
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: #2c3e50;
}
.header {
  border-bottom: #2c3e5081 3px solid;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  &-logo {
    font-size: 3rem;
  }
  &-router {
    display: flex;
    justify-content: space-between;
    > div {
      cursor: pointer;
      margin-left: 20px;
    }
    &__about {
      position: relative;
      &-left {
        display: flex;
        align-items: center;
        > p {
          margin: 0;
        }
      }
    }
    &__user {
      position: relative;
      &-left {
        display: flex;
        align-items: flex-start;
        > p {
          margin: 0;
        }
        > svg {
          margin-top: -5px;
        }
      }
    }
  }
}
.header__modal {
  width: max-content;
  height: fit-content;
  right: 0;
  position: absolute;
  background-color: #e6e6e6;
  display: block;
  padding: 20px;
  border-radius: 10px;
  z-index: 2;
}

.active-icon {
  transform: rotate(180deg);
}
</style>
