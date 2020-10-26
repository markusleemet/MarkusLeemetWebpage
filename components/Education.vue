<template lang="pug">
  b-container(fluid).education-component
    b-row()
      b-col(cols="12" sm="5").menu-item.menu-container
        h2 Haridus
        b-img.section-image(src="~/assets/images/education.png")
        ResumeMenu(selectedOption="Haridus")
      b-col(cols="12" sm="7").information-container
        EducationItem(v-for="educationItem in educationItems" :educationItem="educationItem" :key="educationItem.name")

</template>

<script lang="js">
export default {
  name: 'Education',
  data () {
    return {
      educationItems: [
        {
          name: 'Tartu Ülikool',
          date: '09/2016 – Olevik',
          lead: 'Loodus- ja täppisteaduste valdkond, bakalaureuseõpe, informaatika',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias consequatur dicta earum inventore labore, magnam quia quidem sequi similique veniam vero voluptas?',
          location: 'Tartu'
        },
        {
          name: 'Rocca al Mare Kool',
          date: '09/2011 – 06/2016',
          lead: 'Põhi- ja keskkool',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias consequatur dicta earum inventore labore, magnam quia quidem sequi similique veniam vero voluptas?',
          location: 'Tallinn'
        },
        {
          name: 'Aruküla Vaba Waldorf Kool',
          date: '09/2004 – 06/2011',
          lead: 'Põhikool',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias consequatur dicta earum inventore labore, magnam quia quidem sequi similique veniam vero voluptas?',
          location: 'Aruküla'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.education-component {
  .menu-item {
    background-color: #f4d9c6;
  }

}
</style>
