<template lang="pug">
  .sec-item {{ item }}
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class PageSecItem extends Vue {
  /** props */
  @Prop()
  itemProp!: string;

  /** data */
  item: string = this.itemProp;
}
</script>

<style lang="scss" scoped>
.sec-item {
  text-align: center;
  font-size: 1.5em;
  margin-bottom: 30px;
  word-wrap: break-word;
}
</style>
