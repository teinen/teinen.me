<template lang="pug">
  span &copy; {{ copyright }}
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Copyright extends Vue {
  /** props */
  @Prop()
  copyrightProp!: string;

  /** data */
  copyright: string = this.copyrightProp;
}
</script>

<style lang="scss" scoped>
</style>
