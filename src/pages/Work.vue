<template>
  <section id="work">
    <div class="card">
      <!-- Page title -->
      <PageHeadingComponent contentProp="Work" />

      <div class="sorry">
        Oops!! Sorry, this page is developing now!
      </div>
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
export default class Work extends Vue {}
</script>

<style lang="scss" scoped>
</style>
