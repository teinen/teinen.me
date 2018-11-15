<template>
  <nav>
    <ul>
      <!-- About page link -->
      <HeaderLinkComponent urlProp="/" titleProp="ABOUT" />
      <!-- Skill page link -->
      <HeaderLinkComponent urlProp="/skill" titleProp="SKILL" />
      <!-- Work link -->
      <HeaderLinkComponent urlProp="/work" titleProp="WORK" />
      <!-- Accounts link -->
      <HeaderLinkComponent urlProp="/accounts" titleProp="ACCOUNTS" />
    </ul>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HeaderLink from "@/components/atomic/HeaderLink.vue";

@Component({
  components: {
    HeaderLinkComponent: HeaderLink
  }
})
export default class HeaderContents extends Vue {}
</script>

<style lang="scss" scoped>
nav {
  font-size: 1.5em;
  position: absolute;
  right: 60px;

  @media screen and (max-width: 960px) {
    display: none;
  }
}

ul {
  align-items: flex-end;
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
