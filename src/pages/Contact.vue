<template>
  <section id="about">
    <div class="card">
      <!-- Page title -->
      <PageHeadingComponent contentProp="Contact" />

    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PageHeading from "@/components/atomic/PageHeading.vue";

@Component({
  components: {
    PageHeadingComponent: PageHeading
  }
})
export default class Contact extends Vue {}
</script>

<style lang="scss" scoped>
</style>
