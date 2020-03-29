<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1 class="name">{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Daton extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.name {
  color: white;
}
</style>
