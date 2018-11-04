<template>
  <footer>
    <div class="social">
      <a :href=twitterUrl target="_blank" rel="noopner">
        <!-- <img src="@/assets/twitter.svg" alt="Twitter" width="30" /> -->
      </a>

      <a :href=githubUrl target="_blank" rel="noopner">
        <!-- <img src="@/assets/github.png" alt="GitHub" width="30" /> -->
      </a>
    </div>

    <span class="copyright">{{ copyright }}</span>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      copyright: '© 2018 Akira Kanno',
      twitterUrl: 'https://twitter.com/tei_nen',
      githubUrl: 'https://github.com/teinen',
    }
  }
}
</script>

<style lang="scss" scoped>
footer {
  align-items: center;
  background-color: #454C50;
  border-top: solid 8px #6E777C;
  bottom: 0;
  color: #ffffff;
  display: flex;
  font-weight: bold;
  flex-flow: column nowrap;
  height: 80px;
  justify-content: center;
  position: absolute;
  width: 100vw;
}

.social {
  margin-bottom: 6px;
}
</style>
