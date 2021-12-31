<template>
  <div class="help"></div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "HelpFav",
});
</script>

<style lang="scss">
.help {
  position: absolute;
  width: 300px;
  height: 50px;
  background-color: blue;
}
</style>
