<template>
  <section id="about">
    <div class="card">
      <!-- Page title -->
      <PageHeadingComponent contentProp="About" />

      <!-- ProfileIcon -->
      <ProfileIconComponent />

      <!-- Name section -->
      <PageSecHeadingComponent contentProp="Name" />
      <PageSecItemComponent itemProp="??(teinen)" />

      <!-- Age section -->
      <PageSecHeadingComponent contentProp="Age" />
      <PageSecItemComponent itemProp="25 years old" />

      <!-- Job section -->
      <PageSecHeadingComponent contentProp="Job" />
      <PageSecItemComponent itemProp="Front-end developer" />
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PageHeading from "@/components/atomic/PageHeading.vue";
import ProfileIcon from "@/components/atomic/ProfileIcon.vue";
import PageSecHeading from "@/components/atomic/PageSecHeading.vue";
import PageSecItem from "@/components/atomic/PageSecItem.vue";

@Component({
  components: {
    PageHeadingComponent: PageHeading,
    ProfileIconComponent: ProfileIcon,
    PageSecHeadingComponent: PageSecHeading,
    PageSecItemComponent: PageSecItem
  }
})
export default class About extends Vue {}
</script>

<style lang="scss" scoped>
</style>
