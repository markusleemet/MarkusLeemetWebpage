<template lang="pug">
.resume-menu-component
  a(href="#" v-scroll-to="'.about-component'" v-bind:class="{ 'font-weight-bold': selectedOption === 'Minust'}") {{ $t('resume.menu.about') }}
  span {{ divider }}
  a(href="#" v-scroll-to="'.education-component'" v-bind:class="{ 'font-weight-bold': selectedOption === 'Haridus'}") {{ $t('resume.menu.education') }}
  span {{ divider }}
  a(href="#" v-scroll-to="'.experience-component'" v-bind:class="{ 'font-weight-bold': selectedOption === 'Kogemus'}") {{ $t('resume.menu.experience') }}
  span {{ divider }}
  a(href="#" v-scroll-to="'.achievement-component'" v-bind:class="{ 'font-weight-bold': selectedOption === 'Saavutused'}") {{ $t('resume.menu.achievements') }}
  span {{ divider }}
  a(href="#" v-scroll-to="'.skill-component'" v-bind:class="{ 'font-weight-bold': selectedOption === 'Oskused'}") {{ $t('resume.menu.skills') }}
</template>

<script lang="js">
export default {
  name: 'ResumeMenu',
  props: {
    selectedOption: String
  },
  data () {
    return {
      divider: ' / '
    }
  }
}
</script>

<style lang="scss">
.resume-menu-component{
  text-align: center;
  position: absolute;
  bottom: 2rem;
  left: 0;
  right: 0;
  width: 100%;
  padding: 0 1rem;
  a, span{
    color: black;
  }
}
</style>
