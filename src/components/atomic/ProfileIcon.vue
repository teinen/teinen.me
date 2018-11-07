<template>
  <div class="profile-image">
    <img class="icon" src="@/assets/profile.png" />
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
  padding-top: 20px;
}

.profile-image {
  text-align: center;
  width: 50%;
}

.profile-info {
  width: 50%;
}

.icon {
  border: 6px solid #516c8d;
  border-radius: 50%;
  width: 300px;
  height: 300px;
}
</style>
