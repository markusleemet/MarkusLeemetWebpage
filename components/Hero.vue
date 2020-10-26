<template lang="pug">
.hero
  b-jumbotron.hero-section(:header="$t('resume.title')" :lead="$t('resume.lead')" fluid bg-variant="dark" text-variant="light" )
    ResumeMenu
</template>

<script>
export default {
  name: 'Hero'
}
</script>

<style lang="scss">
.hero{
  .hero-section{
    min-height: 100vh;
    margin-bottom: 0;
    background-image: url("https://source.unsplash.com/random/1920x1080");
    background-size: cover;
  }
}
</style>
