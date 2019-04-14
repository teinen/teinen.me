<template lang="pug">
  section(id="about")
    .card
      PageHeadingComponent(contentProp="About")

      ProfileIconComponent

      PageSecHeadingComponent(contentProp="Name")
      PageSecItemComponent(itemProp="諦念(teinen)")

      PageSecHeadingComponent(contentProp="Age")
      PageSecItemComponent(:itemProp="age")

      PageSecHeadingComponent(contentProp="Job")
      PageSecItemComponent(itemProp="Front-end developer")
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
export default class About extends Vue {
  public get age(): string {
    const age = new Date().getFullYear() - 1993;
    return `${age} years old`;
  }
}
</script>
