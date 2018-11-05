<template>
  <div class="social">
    <!-- Twitter icon -->
    <SocialIconComponent
      urlProp="https://twitter.com/tei_nen"
      iconImageProp="twitter.svg"
      altProp="Twitter"
    />
    <!-- GitHub icon -->
    <SocialIconComponent
      urlProp="https://github.com/teinen"
      iconImageProp="github.png"
      altProp="GitHub"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SocialIcon from "@/components/atomic/SocialIcon.vue";

@Component({
  components: {
    SocialIconComponent: SocialIcon
  }
})
export default class FooterSocialIcons extends Vue {}
</script>

<style lang="scss" scoped>
.social {
  margin-bottom: 6px;
}
</style>
