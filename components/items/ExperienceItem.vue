<template lang="pug">
.experience-item.custom-item
  b-row(align-h="around")
    b-col(cols="12")
      h3.custom-item-name {{ experienceItem.name }}
      h4.experience-position {{ experienceItem.position }}
      p.experience-description {{ experienceItem.description }}
      .websites-list(v-if="experienceItem.name === 'Nähtamatud Loomad'")
        ul
          li
            a(href="https://taimneteisipaev.ee/" target="_plank") taimneteisipaev.ee
          li
            a(href="https://toetajaliige.nahtamatudloomad.ee/" target="_plank") toetajaliige.nahtamatudloomad.ee
          li
            a(href="https://siga.nahtamatudloomad.ee/" target="_plank") siga.nahtamatudloomad.ee
          li
            a(href="https://www.foodinnovationsummit.ee/" target="_plank") foodinnovationsummit.ee
          li
            a(href="https://aitan.nahtamatudloomad.ee/" target="_plank") aitan.nahtamatudloomad.ee
          li
            a(href="https://munadehind.ee/" target="_plank") munadehind.ee
          li
            a(href="https://nahtamatudloomad.ee/" target="_plank") nahtamatudloomad.ee
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
