<template lang="pug">
  a(:href="url" target="_blank" rel="noopener")
    img(:src="require('@/assets/images/' + iconImage)" :alt="alt" width="30")
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class SocialIcon extends Vue {
  /** props */
  @Prop()
  urlProp!: string;
  @Prop()
  iconImageProp!: string;
  @Prop()
  altProp!: string;

  /** data */
  url: string = this.urlProp;
  iconImage: string = this.iconImageProp;
  alt: string = this.altProp;
}
</script>

<style lang="scss" scoped>
img {
  margin: 0 5px;
}
</style>
