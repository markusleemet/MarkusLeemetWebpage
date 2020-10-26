<template lang="pug">
  b-container(fluid).about-component
    b-row
      b-col(cols="12" sm="5").menu-container.menu-item
        h2 {{ $t('resume.sections.about.title') }}
        b-img.section-image(src="~/assets/images/about.png")
        ResumeMenu(selectedOption="Minust")
      b-col(cols="12" sm="7").information-container
        p
</template>

<script lang="ts">
export default {
  name: 'About'
}
</script>

<style lang="scss">
.about-component{
  .menu-item{
    background-color: #4bd7c3;
  }
}
</style>
