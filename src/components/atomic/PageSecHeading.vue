<template>
  <div class="sec-title">
    <h2>{{ content }}</h2>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class PageSecHeading extends Vue {
  /** props */
  @Prop()
  contentProp!: string;

  /** data */
  content: string = this.contentProp;
}
</script>

<style lang="scss" scoped>
.sec-title {
  text-align: center;
}

h2 {
  color: #28385e;
  display: inline-block;

  font-size: 1.8em;

  @media screen and (min-width: 960px) {
    font-size: 2em;
  }

  margin: 15px 0;
  padding: 0 40px;
  position: relative;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    display: inline-block;
    width: 30px;
    height: 3px;
    background-color: #ff9800;
    border-radius: 3px;
  }

  &::before {
    left: 0;
  }

  &::after {
    right: 0;
  }
}
</style>
