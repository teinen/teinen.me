<template lang="pug">
  section(id="skill")
    .card
      PageHeadingComponent(contentProp="Skill")
    .sorry
      | Oops!! Sorry, this page is developing now!
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
