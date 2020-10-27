<template lang="pug">
  b-container(fluid).skill-component
    b-row
      b-col(cols="12" sm="6").menu-container.menu-item
        h2 {{ $t('resume.sections.skills.title') }}
        b-img.section-image(src="~/assets/images/skills.png")
        ResumeMenu(selectedOption="Oskused")
      b-col(cols="12" sm="6").information-container
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
    background-color: #B8F3FF;
  }
}
</style>
