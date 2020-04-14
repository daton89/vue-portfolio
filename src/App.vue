<template>
  <div id="app">
    <carousel perPage="1" navigationEnabled navigationNextLabel=">" navigationPrevLabel="<">
      <slide>
        <Daton msg="I'm daton89" />
      </slide>
      <slide>
        <Bio />
      </slide>
    </carousel>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Carousel, Slide } from 'vue-carousel'
import Bio from '@/components/Bio.vue'

import Daton from './components/Daton.vue'

export default Vue.extend({
  components: {
    Carousel,
    Slide,
    Daton,
    Bio
  }
})
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Fira+Code&display=swap');

html,
body {
  font-family: 'Fira Code', monospace;
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
</style>
