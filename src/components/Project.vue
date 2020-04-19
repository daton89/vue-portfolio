<template>
  <div class="project">
    <h1>{{ name }}</h1>
    <img class="img-responsive" src="../assets/images/m-mongo.gif" alt="m-mongo project" />
    <p class="description">
      {{ description }}
    </p>
    <a :href="url" target="_blank" rel="noopener noreferrer">
      <svg-icon class="social-icon" name="github" color="github" size="normal" />
    </a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SvgIcon from './SvgIcon.vue'

export default Vue.extend({
  name: 'project',
  props: {
    name: { type: String },
    description: { type: String },
    url: { type: String }
  },
  components: {
    SvgIcon
  }
})
</script>

<style>
.project {
  margin: 32px 24px;
  text-align: center;
}

.project .description {
  margin: 32px 0;
}
</style>
