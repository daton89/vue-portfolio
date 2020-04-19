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
          img="m-mongo.gif"
          description="A simple MongoDB migration CLI tool written in Typescript, dump and restore your dbs or collections"
          url="https://github.com/daton89/m-mongo"
        />
      </slide>
      <slide>
        <project
          name="warehouse"
          img="warehouse.gif"
          description="A simple warehouse service built with MEAN stack with Angular 7 that works as desktop app thanks to Electron"
          url="https://github.com/daton89/warehouse"
        />
      </slide>
      <slide>
        <project
          name="mongoose-transactions"
          img="mongoose-transactions.png"
          description="A Node.js package to club many MongoDB queries into a group and execute all of them together as part of a transaction"
          url="https://github.com/daton89-topperblues/mongoose-transactions"
        />
      </slide>
      <slide>
        <project
          name="nodejs-cluter-socket.io"
          img="nodejs-cluster-socket.io.png"
          description="Leverage scaling Node.js application with Socket.io load balancing connections with Redis"
          url="https://github.com/daton89/nodejs-cluster-socket.io"
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
