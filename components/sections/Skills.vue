<template lang="pug">
  b-container(fluid).skill-component
    b-row
      b-col(cols="12" sm="6").menu-container.menu-item
        h2 {{ $t('resume.sections.skills.title') }}
        b-img.section-image(src="~/assets/images/skills.png")
        ResumeMenu(selectedOption="Oskused")
      b-col(cols="12" sm="4" offset-sm="1").information-container#skills-information-container
        h2.text-center {{ $t('resume.sections.skills.usedTechnologies') }}
        b-row.skills-list
          b-col.d-flex.flex-row.justify-content-center.skill-item-container(cols="12" xl="4" v-for="(skillItem, index) in skillItems" v-bind:class="{'offset-xl-2': skillItem.offset}")
            SkillItem(:skillItem="skillItem")
        h2.text-center {{ $t('resume.sections.skills.languages') }}
        b-row.justify-content-center
          b-col.d-flex.flex-row.justify-content-center.skill-item-container(cols="12" xl="4" v-for="(languageItem, index) in languageItems")
            SkillItem(:skillItem="languageItem")
</template>

<script lang="js">
import html from '~/assets/logos/html.png'
import css from '~/assets/logos/css.png'
import bootstrap from '~/assets/logos/bootstrap.png'
import javascript from '~/assets/logos/javascript.png'
import nuxt from '~/assets/logos/nuxt.png'
import vue from '~/assets/logos/vue.png'
import react from '~/assets/logos/react.png'
import android from '~/assets/logos/android.png'
import java from '~/assets/logos/java.png'
import python from '~/assets/logos/python.png'
import sql from '~/assets/logos/sql.png'
import pug from '~/assets/logos/pug.png'
import sass from '~/assets/logos/sass.png'
import wordpress from '~/assets/logos/wordpress.png'
import sendgrid from '~/assets/logos/sendgrid.png'
import eesti from '~/assets/logos/eesti.png'
import usFlag from '~/assets/logos/us_flag.png'
export default {
  name: 'Skills',
  data () {
    return {
      skillItems: [
        { name: 'HTML', icon: html, offset: false },
        { name: 'CSS', icon: css, offset: false },
        { name: 'Bootstrap', icon: bootstrap, offset: false },
        { name: 'JavaScript', icon: javascript, offset: true },
        { name: 'Nuxt', icon: nuxt, offset: false },
        { name: 'Vue', icon: vue, offset: false },
        { name: 'React', icon: react, offset: false },
        { name: 'Android', icon: android, offset: false },
        { name: 'Java', icon: java, offset: true },
        { name: 'Python', icon: python, offset: false },
        { name: 'Sql', icon: sql, offset: false },
        { name: 'Pug', icon: pug, offset: false },
        { name: 'Sass', icon: sass, offset: false },
        { name: 'Wordpress', icon: wordpress, offset: true },
        { name: 'Sendgrid', icon: sendgrid, offset: false }
      ],
      languageItems: [
        { name: 'Eesti', icon: eesti },
        { name: 'English', icon: usFlag }
      ]
    }
  }
}
</script>

<style lang="scss">
.skill-component{
  .menu-item{
    background-color: #B8F3FF;
  }
  .information-container{
    .skill-item-container{
      padding-right: 0.6rem;
      padding-left: 0.6rem;
    }
    .skills-list{
      margin-bottom: 5rem;
    }
  }
}
</style>
