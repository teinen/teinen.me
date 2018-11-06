<template>
  <h1>{{ content }}</h1>
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
  font-size: 3em;
  padding: 10px;

  &::after {
    border-bottom: 4px solid #28385e;
    content: "";
    display: block;
    width: 100%;
  }
}
</style>
