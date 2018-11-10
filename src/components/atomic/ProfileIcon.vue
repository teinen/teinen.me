<template>
  <div class="main">
    <div class="profile-image">
      <img class="icon" src="@/assets/images/profile.png" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ProfileIcon extends Vue {}
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  height: 90%;
  justify-content: center;
  padding-top: 20px;
}

.icon {
  border: 6px solid #516c8d;
  border-radius: 50%;
  width: 250px;
  height: 250px;

  @media screen and (max-width: 320px) {
    width: 150px;
    height: 150px;
  }
}
</style>
