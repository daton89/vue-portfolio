<template>
  <div>
    <img alt="daton avatar" class="avatar" src="../assets/my-avatar.svg" />
    <h1 class="name">{{ msg }}</h1>
    <a href="http://github.com/daton89" target="_blank" rel="noopener noreferrer">
      <svg-icon class="social-icon" name="github" color="github" size="large" />
    </a>
    <a href="https://twitter.com/daton89" target="_blank" rel="noopener noreferrer">
      <svg-icon class="social-icon" name="twitter" color="twitter" size="large" />
    </a>
    <a href="https://www.linkedin.com/in/tony-d-angelo-0b6b72a6/" target="_blank" rel="noopener noreferrer">
      <svg-icon class="social-icon" name="linkedin" color="linkedin" size="large" />
    </a>
    <a href="https://www.xing.com/profile/Antonio_DAngelo9/cv" target="_blank" rel="noopener noreferrer">
      <svg-icon class="social-icon" name="xing" color="xing" size="large" />
    </a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SvgIcon from './SvgIcon.vue'

export default Vue.extend({
  name: 'Daton',
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
.avatar {
  width: 320px;
}
.name {
  color: white;
  text-align: center;
}
.social-icon {
  padding: 8px 24px;
}
</style>
