<template>
  <h1>
    <span>{{ content }}</span>
  </h1>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class PageHeading extends Vue {
  /** props */
  @Prop()
  contentProp!: string;

  /** data */
  content: string = this.contentProp;
}
</script>

<style lang="scss" scoped>
h1 {
  color: #28385e;
  display: flex;
  font-size: 2.5em;
  justify-content: center;
  padding: 10px;

  span {
    display: inline-block;
    text-align: center;
    width: 100%;

    &::after {
      border-bottom: 3px solid #28385e;
      content: "";
      display: block;
      width: 100%;
    }
  }
}
</style>
