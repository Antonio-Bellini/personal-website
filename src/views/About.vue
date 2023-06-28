<template>
  <section class="about">
    <div class="about__info">
      <h4>{{ aboutTitle }}</h4>
      <div class="about__info-text">
        <p>{{ aboutText }} <br> <br> {{ aboutTextTwo }}  <br><br> {{ aboutTextThree }}
        <br><br><br><br><br>
        <strong>{{ workingFor }}&nbsp;&nbsp;<a href="/" target="_blank">myself</a></strong></p>
        <div class="about__info-text-image">
          <img class="profileImage" src="../assets/images/content/profile_pic.webp" alt="profile image" />
        </div>
      </div>

      <Skills />
    </div>
  </section>
</template>

<script>
import Skills from '@/components/skills.vue'
export default {
  name: 'about_page',
  data () {
    return {
      aboutTitle: 'What about me?',
      aboutText: 'Hi! My name is Antonio, I\'m 18, and I\'m really passionate about web development.',
      aboutTextTwo: 'Currently I attend IIS A. Avogadro here in Turin, and I\'m a computer science student.',
      aboutTextThree: 'I really like to learn new technologies for improving my knowledge.',
      workingFor: 'Currently working for:'
    }
  },
  components: {
    Skills
  }
}
</script>
