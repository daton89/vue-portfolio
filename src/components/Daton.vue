<template>
  <div class="container">
    <div class="daton-container">
      <img alt="daton avatar" class="avatar" src="../assets/my-avatar-transparent.svg" />
      <h1 class="name">{{ msg }}</h1>
      <a href="http://github.com/daton89" target="_blank" rel="noopener noreferrer">
        <svg-icon class="social-icon" name="github" color="github" size="normal" />
      </a>
      <a href="https://twitter.com/daton89" target="_blank" rel="noopener noreferrer">
        <svg-icon class="social-icon" name="twitter" color="twitter" size="normal" />
      </a>
      <a href="https://www.linkedin.com/in/tony-d-angelo-0b6b72a6/" target="_blank" rel="noopener noreferrer">
        <svg-icon class="social-icon" name="linkedin" color="linkedin" size="normal" />
      </a>
      <a href="https://www.xing.com/profile/Antonio_DAngelo9/cv" target="_blank" rel="noopener noreferrer">
        <svg-icon class="social-icon" name="xing" color="xing" size="normal" />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SvgIcon from './SvgIcon.vue'

export default Vue.extend({
  name: 'daton',
  props: {
    msg: {
      type: String,
      default: ''
    }
  },
  components: {
    SvgIcon
  }
})
</script>

<style>
.daton-container {
  width: 320px;
  padding: 32px 0;
}
.avatar {
  width: 320px;
  text-align: center;
}
.name {
  color: white;
  text-align: center;
}
.social-icon {
  padding: 8px 24px;
}
</style>
