<template lang="pug">
  b-container(fluid).education-component
    b-row()
      b-col(cols="12" sm="6").menu-item.menu-container
        h2 {{ $t('resume.sections.education.title') }}
        b-img.section-image(src="~/assets/images/education.png")
        ResumeMenu(selectedOption="Haridus")
      b-col(cols="12" sm="4" offset-sm="1").information-container#education-information-container
        EducationItem(v-for="educationItem in $t('resume.sections.education.items')" :educationItem="educationItem" :key="educationItem.name")

</template>

<script lang="js">
import { EducationItem, ResumeMenu } from '~/components/items'

export default {
  name: 'Education',
  components: { ResumeMenu, EducationItem }
}
</script>

<style scoped lang="scss">
.education-component {
  .menu-item {
    background-color: #97d1ff;
  }
}
</style>
