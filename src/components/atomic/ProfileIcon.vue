<template lang="pug">
  .profile-image
    img.icon(src="@/assets/images/profile.png")
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ProfileIcon extends Vue {}
</script>

<style lang="scss" scoped>
.profile-image {
  display: flex;
  justify-content: center;
}

.icon {
  border: 6px solid #516c8d;
  border-radius: 50%;
  width: 230px;
  height: 230px;
  margin: 0 0 20px 0;

  @media screen and (max-width: 320px) {
    width: 170px;
    height: 170px;
  }
}
</style>
