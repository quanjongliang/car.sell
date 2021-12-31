<template>
  <header-bar />
  <router-view />
  <footer-bar />
  <help-fav-vue />
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import FooterBar from "./components/FooterBar.vue";
import HeaderBar from "./components/HeaderBar.vue";
import HelpFavVue from "./components/HelpFav.vue";
export default defineComponent({
  components: { HeaderBar, FooterBar, HelpFavVue },
  name: "App",
});
</script>
<style lang="scss">
@import "./assets/style.scss";
body {
  margin: 0;
}
#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
