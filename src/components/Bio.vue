<template>
  <div class="container bio">
    <p>I'm an Italian living in Munich, Germany</p>
    <p>Computer is my passion since I was 13 years old</p>
    <p>I developed my first website with plain html and css and a my first js lines around 2008</p>
    <p>I work as professional web developer from 7 years</p>
    <p>Discover more in the next slide</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Bio'
})
</script>

<style>
.bio {
  flex-direction: column;
}

.bio p {
  margin: 0;
  padding: 24px 32px;
  text-align: center;
}
</style>
