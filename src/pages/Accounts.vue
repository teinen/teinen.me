<template lang="pug">
  section(id="about")
    .card
      PageHeadingComponent(contentProp="Accounts")

      PageSecHeadingComponent(contentProp="Email")
      PageSecItemComponent(itemProp="teinen.github[at]gmail.com")

      PageSecHeadingComponent(contentProp="Twitter")
      PageSecHrefItemComponent(itemProp="https://twitter.com/tei_nen")

      PageSecHeadingComponent(contentProp="GitHub")
      PageSecHrefItemComponent(itemProp="https://github.com/teinen")

      PageSecHeadingComponent(contentProp="Qiita")
      PageSecHrefItemComponent(itemProp="https://qiita.com/teinen_qiita")
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PageHeading from "@/components/atomic/PageHeading.vue";
import PageSecHeading from "@/components/atomic/PageSecHeading.vue";
import PageSecItem from "@/components/atomic/PageSecItem.vue";
import PageSecHrefItem from "@/components/atomic/PageSecHrefItem.vue";

@Component({
  components: {
    PageHeadingComponent: PageHeading,
    PageSecHeadingComponent: PageSecHeading,
    PageSecItemComponent: PageSecItem,
    PageSecHrefItemComponent: PageSecHrefItem
  }
})
export default class Accounts extends Vue {}
</script>
