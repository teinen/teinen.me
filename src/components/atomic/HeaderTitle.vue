<template>
  <span class="title">{{ title }}</span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HeaderTitle extends Vue {
  /** props */
  @Prop()
  titleProp!: string;

  /** data */
  title: string = this.titleProp;
}
</script>

<style lang="scss" scoped>
.title {
  color: #ffffff;
  font-size: 2em;

  @media screen and (min-width: 960px) {
    font-size: 2.3em;
  }
}
</style>
