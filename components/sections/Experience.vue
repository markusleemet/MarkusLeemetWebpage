<template lang="pug">
  b-container(fluid).experience-component
    b-row
      b-col(cols="12" sm="6").menu-container.menu-item
        h2 {{ $t('resume.sections.experience.title') }}
        b-img.section-image(src="~/assets/images/experience.png")
        ResumeMenu(selectedOption="Kogemus")
      b-col(cols="12" sm="4" offset-sm="1").information-container#experience-information-container
        ExperienceItem(:key="experienceItem.name" v-for="experienceItem in $t('resume.sections.experience.items')" :experienceItem="experienceItem")
</template>

<script lang="ts">
import { ResumeMenu, ExperienceItem } from '~/components/items'

export default {
  name: 'Experience',
  components: { ExperienceItem, ResumeMenu }
}
</script>

<style scoped lang="scss">
.experience-component{
  .menu-item{
    background-color: #B8F3FF;
  }
}
</style>
