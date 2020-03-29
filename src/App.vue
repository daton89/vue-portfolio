<template>
  <div id="app">
    <Daton msg="I'm daton89" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Daton from "./components/Daton.vue";

export default Vue.extend({
  data() {
    return {
      sliderValue: [50, 100]
    };
  },
  components: {
    Daton
  }
});
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Fira+Code&display=swap");

html,
body {
  font-family: "Fira Code", monospace;
  height: 100%;
  margin: 0;
  padding: 0;
}

#app {
  height: 100%;
  background-size: 140vw 140vh;
  background-color: #fff;
  background-image: linear-gradient(225deg, #ff0000, #cc00cc, #1800dd);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.slider {
}
</style>
