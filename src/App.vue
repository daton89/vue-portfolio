<template>
  <div id="app">
    <carousel :perPage="1" :autoplay="true" :autoplayTimeout="10000" :autoplayHoverPause="true">
      <slide>
        <daton msg="I'm daton89" />
      </slide>
      <slide>
        <bio />
      </slide>
      <slide>
        <project
          name="m-mongo"
          description="A simple MongoDB migration CLI tool written in Typescript, dump and restore your dbs or collections."
          url="https://github.com/daton89/m-mongo"
        />
      </slide>
    </carousel>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import { Carousel, Slide } from 'vue-carousel'
import Daton from './components/Daton.vue'
import Bio from '@/components/Bio.vue'
import Project from '@/components/Project.vue'

export default Vue.extend({
  components: {
    Carousel,
    Slide,
    Daton,
    Bio,
    Project
  }
})
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Fira+Code&display=swap');
@import url('./assets/css/main.css');
</style>
