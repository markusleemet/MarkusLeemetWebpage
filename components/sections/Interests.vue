<template lang="pug">
  b-container(fluid).interests-component
    b-row
      b-col(cols="12" sm="6").menu-container.menu-item
        h2 {{ $t('resume.sections.interests.title') }}
        b-img.section-image(src="~/assets/images/interests.png")
        ResumeMenu(selectedOption="Huvid")
      b-col(cols="12" sm="4" offset-sm="1" ).information-container#interests-information-container
        InterestItem(:interestItem="interestItem" v-for="interestItem in $t('resume.sections.interests.items')" :key="interestItem.name")
</template>

<script lang="js">
import { ResumeMenu, InterestItem } from '~/components/items'

export default {
  name: 'Interests',
  components: { InterestItem, ResumeMenu }
}
</script>

<style scoped lang="scss">
.interests-component{
  .menu-item{
    background-color: #97d1ff;
  }
}
</style>
