<template>
  <svg viewBox="0 0 24 24" class="icon" :class="styleClasses">
    <path :d="path" />
  </svg>
</template>

<script>
import Vue from 'vue'
import icons from './icons.json'

export default Vue.extend({
  name: 'SvgIcon',
  props: {
    name: String,
    size: String,
    color: String
  },
  computed: {
    path() {
      return icons[this.name]
    },
    styleClasses() {
      return [this.size, this.color].map(val => val && `is-${val}`)
    }
  }
})
</script>

<style>
/* default */
.icon {
  width: 32px;
  height: 1.2em;
  fill: currentColor;
}

/* sizes */
.icon.is-large {
  width: 64px;
  height: 64px;
}
.icon.is-medium {
  width: 48px;
  height: 48px;
}
.icon.is-normal {
  width: 32px;
  height: 32px;
}
.icon.is-small {
  width: 24px;
  height: 24px;
}
.icon.is-tiny {
  width: 16px;
  height: 16px;
}

/* colors */
.icon.is-twitter {
  fill: #1da1f2;
}
.icon.is-linkedin {
  fill: #0077b5;
}
.icon.is-github {
  fill: #181717;
}
.icon.is-xing {
  fill: #006567;
}
.icon.is-primary,
.icon.is-blue {
  fill: #2196f3;
}
.icon.is-success,
.icon.is-green {
  fill: #4caf50;
}
.icon.is-danger,
.icon.is-red {
  fill: #f44336;
}
.icon.is-warning,
.icon.is-orange {
  fill: #ff9800;
}
</style>
