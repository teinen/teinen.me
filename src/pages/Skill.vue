<template>
  <section id="skill">
    <div class="card">
      <!-- Page title -->
      <PageHeadingComponent contentProp="Skill" />

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
export default class Skill extends Vue {}
</script>

<style lang="scss" scoped>
</style>
