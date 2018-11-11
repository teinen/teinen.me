<template>
  <div class="profile-image">
    <img class="icon" src="@/assets/images/profile.png" />
  </div>
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
  margin: 20px 0;

  @media screen and (max-width: 320px) {
    width: 150px;
    height: 150px;
    margin: 10px 0;
  }
}
</style>
