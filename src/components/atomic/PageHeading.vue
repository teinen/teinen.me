<template>
  <div class="header">
    <h1>{{ content }}</h1>
  </div>
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
.header {
  text-align: center;
}

h1 {
  color: #28385e;
  display: inline-block;
  font-size: 2.5em;
  margin: 0;
  padding: 5px 0;
  position: relative;

  &::after {
    border-bottom: 4px solid #28385e;
    border-radius: 4px;
    bottom: 0;
    content: "";
    left: 0;
    right: 0;
    position: absolute;
  }
}
</style>
