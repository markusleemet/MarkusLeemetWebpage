<template lang="pug">
  b-container(fluid).experience-component
    b-row
      b-col(cols="12" sm="6").menu-container.menu-item
        h2 {{ $t('resume.sections.experience.title') }}
        b-img.section-image(src="~/assets/images/experience.png")
        ResumeMenu(selectedOption="Kogemus")
      b-col(cols="12" sm="4" offset-sm="1").information-container
        ExperienceItem(:key="experienceItem.name" v-for="experienceItem in $t('resume.sections.experience.items')" :experienceItem="experienceItem")
</template>

<script lang="ts">
export default {
  name: 'Experience'
}
</script>

<style lang="scss">
.experience-component{
  .menu-item{
    background-color: #6df8b1;
  }
}
</style>
