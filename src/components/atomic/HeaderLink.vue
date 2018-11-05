<template>
  <li>
    <router-link :to=url>{{ title }}</router-link>
  </li>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HeaderLink extends Vue {
  /** props */
  @Prop()
  urlProp!: string;
  @Prop()
  titleProp!: string;

  /** data */
  url: string = this.urlProp;
  title: string = this.titleProp;
}
</script>

<style lang="scss" scoped>
@mixin active-link($width: 0) {
  border-bottom: 2px solid #ffffff;
  content: "";
  display: block;
  width: $width;
}

li {
  margin: 0 0 0 20px;

  a {
    color: #ffffff;
    text-decoration: none;

    &::after {
      @include active-link();
      transition: all 0.3s;
    }

    &:hover::after {
      width: 100%;
    }

    /* active link */
    &.router-link-exact-active {
      &::after {
        @include active-link(100%);
      }
    }
  }
}
</style>
