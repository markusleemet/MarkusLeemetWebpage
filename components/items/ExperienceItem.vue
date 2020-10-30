<template lang="pug">
.experience-item.custom-item
  b-row(align-h="around")
    b-col(cols="12")
      h3.custom-item-name {{ experienceItem.name }}
      h4.experience-position {{ experienceItem.position }}
      p.experience-description {{ experienceItem.description }}
      p.custom-item-date {{ experienceItem.date }}
</template>

<script lang="js">
export default {
  name: 'ExperienceItem',
  props: {
    experienceItem: Object
  }
}
</script>

<style lang="scss">
.experience-item{}
</style>
