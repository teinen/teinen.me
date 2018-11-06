<template>
  <section id="about">
    <div class="card">
      <!-- Page title -->
      <PageHeadingComponent contentProp="About" />

      <!-- ProfileIcon -->
      <ProfileIconComponent />
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PageHeading from "@/components/atomic/PageHeading.vue";
import ProfileIcon from "@/components/atomic/ProfileIcon.vue";

@Component({
  components: {
    PageHeadingComponent: PageHeading,
    ProfileIconComponent: ProfileIcon
  }
})
export default class About extends Vue {}
</script>

<style lang="scss" scoped>
</style>
