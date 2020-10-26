<template lang="pug">
  b-container(fluid).skill-component
    b-row
      b-col(cols="12" sm="5").menu-container.menu-item
        h2 {{ $t('resume.sections.skills.title') }}
        b-img.section-image(src="~/assets/images/skills.png")
        ResumeMenu(selectedOption="Oskused")
      b-col(cols="12" sm="7").information-container
        p
</template>

<script lang="ts">
export default {
  name: 'Skills'
}
</script>

<style lang="scss">
.skill-component{
  .menu-item{
    background-color: #e2e761;
  }
}
</style>
