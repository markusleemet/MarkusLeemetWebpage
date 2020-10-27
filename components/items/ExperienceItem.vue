<template lang="pug">
.experience-item.custom-item
  b-row(align-h="around")
    b-col(cols="12")
      h3.custom-item-name {{ experienceItem.name }}
      p.experience-position {{ experienceItem.position }}
      p.custom-item-date {{ experienceItem.date }}
      p.experience-description {{ experienceItem.description }}
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
