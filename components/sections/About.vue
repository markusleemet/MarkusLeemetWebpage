<template lang="pug">
  b-container(fluid).about-component
    b-row
      b-col(cols="12" sm="6").menu-container.menu-item
        h2 {{ $t('resume.sections.about.title') }}
        b-img.section-image(src="~/assets/images/about.png")
        ResumeMenu(selectedOption="Minust")
      b-col(cols="12" sm="4" offset-sm="1").information-container.custom-item#about-information-container
        img.about-image.mb-5(src="~/assets/images/mina.jpg" alt="Markus Leemet picture")
        h2.custom-item-name.text-center {{ $t('resume.sections.about.lead') }}
        p.about-description.mb-5 {{ $t('resume.sections.about.description') }}
        h2.custom-item-name.text-center {{ $t('resume.sections.about.contactTitle') }}
        b-row.justify-content-center
          b-col(cols="12" lg="8")
            ul.contact-list
              li.contact-mail
                a(href="mailto:markusleemet@gmail.com") {{ $t('resume.sections.about.mail') }}
              li.contact-location {{ $t('resume.sections.about.location') }}
              li.contact-phone
                a(href="tel:+37256296263") {{ $t('resume.sections.about.phone') }}
              li.contact-birthday {{ $t('resume.sections.about.birthday') }}
              li.contact-github
                a(target="_plank" href="https://github.com/markusleemet") {{ $t('resume.sections.about.github') }}
              li.contact-linkedin
                a(target="_plank" href="https://www.linkedin.com/in/markus-leemet-1b6634179/") {{ $t('resume.sections.about.linkedin') }}
</template>

<script lang="ts">
export default {
  name: 'About'
}
</script>

<style lang="scss">
.about-component{
  .menu-item{
    background-color: #B8F3FF;
  }
  .about-image{
    width: 100%;
    border-radius: 50%;
    max-width: 350px;
    margin-left: auto;
    margin-right: auto;
  }
  .contact-list{
    list-style-type: none;
    padding-left: 0;
    margin-left: 1.8rem;
    li{
      padding-bottom: 0.7rem;
    }
    .contact-mail{
      position: relative;
      &::before{
        content: "";
        display: block;
        position: absolute;
        background-image: url("~assets/images/mail.png");
        background-size: cover;
        height: 1.4rem;
        width: 1.4rem;
        top: 0.2rem;
        left: -1.8rem;
      }
    }
    .contact-location{
      position: relative;
      &::before{
        content: "";
        display: block;
        position: absolute;
        background-image: url("~assets/images/location.png");
        background-size: cover;
        height: 1.4rem;
        width: 1.4rem;
        top: 0.2rem;
        left: -1.8rem;
      }
    }
    .contact-linkedin{
      position: relative;
      &::before{
        content: "";
        display: block;
        position: absolute;
        background-image: url("~assets/images/linkedin.png");
        background-size: cover;
        height: 1.4rem;
        width: 1.4rem;
        top: 0.2rem;
        left: -1.8rem;
      }
    }
    .contact-birthday{
      position: relative;
      &::before{
        content: "";
        display: block;
        position: absolute;
        background-image: url("~assets/images/calendar.png");
        background-size: cover;
        height: 1.4rem;
        width: 1.4rem;
        top: 0.2rem;
        left: -1.8rem;
      }
    }
    .contact-phone{
      position: relative;
      &::before{
        content: "";
        display: block;
        position: absolute;
        background-image: url("~assets/images/phone.png");
        background-size: cover;
        height: 1.4rem;
        width: 1.4rem;
        top: 0.2rem;
        left: -1.8rem;
      }
    }
    .contact-github{
      position: relative;
      &::before{
        content: "";
        display: block;
        position: absolute;
        background-image: url("~assets/images/github.png");
        background-size: cover;
        height: 1.4rem;
        width: 1.4rem;
        top: 0.2rem;
        left: -1.8rem;
      }
    }
  }
}
</style>
