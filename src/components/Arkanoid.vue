<template>
  <canvas id="arkanoid"></canvas>
</template>

<script>
export default {
  props: {
    lives: {
      type: Number,
      default: 3
    }
  },
  mounted() {
    console.log("mounted");
  }
};
</script>

<style></style>
