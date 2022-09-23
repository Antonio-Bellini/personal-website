<template>
  <h5>My skills</h5>
  <div class="about__skills">
    <div class="about__skills-container" id="html">
      <div class="about__skills-container-image">
        <img class="image" src="../assets/images/icon/html.webp" alt="html logo" id="htmlLogo">
      </div>
      <div class="about__skills-container-progressBar">
        <span class="progressLevel" id="first"></span>
        <span class="progressLevel" id="second"></span>
        <span class="progressLevel" id="third"></span>
      </div>
      <p id="levelIndicator">{{ level }}</p>
    </div>

    <div class="about__skills-container" id="css">
      <div class="about__skills-container-image">
        <img class="image" src="../assets/images/icon/css.webp" alt="css logo" id="cssLogo">
      </div>
      <div class="about__skills-container-progressBar">
        <span class="progressLevel" id="first"></span>
        <span class="progressLevel" id="second"></span>
        <span class="progressLevel" id="third"></span>
      </div>
      <p id="levelIndicator">{{ level }}</p>
    </div>

    <div class="about__skills-container" id="scss">
      <div class="about__skills-container-image">
        <img class="image" src="../assets/images/icon/scss.webp" alt="scss logo" id="scssLogo">
      </div>
      <div class="about__skills-container-progressBar">
        <span class="progressLevel" id="first"></span>
        <span class="progressLevel" id="second"></span>
        <span class="progressLevel" id="third"></span>
      </div>
      <p id="levelIndicator">{{ level }}</p>
    </div>

    <div class="about__skills-container" id="js">
      <div class="about__skills-container-image">
        <img class="image" src="../assets/images/icon/js.webp" alt="js logo" id="jsLogo">
      </div>
      <div class="about__skills-container-progressBar">
        <span class="progressLevel" id="first"></span>
        <span class="progressLevel" id="second"></span>
        <span class="progressLevel" id="third"></span>
      </div>
      <p id="levelIndicator">{{ level }}</p>
    </div>

    <div class="about__skills-container" id="vue">
      <div class="about__skills-container-image">
        <img class="image" src="../assets/images/icon/vue.webp" alt="vue.js logo" id="vueLogo">
      </div>
      <div class="about__skills-container-progressBar">
        <span class="progressLevel" id="first"></span>
        <span class="progressLevel" id="second"></span>
        <span class="progressLevel" id="third"></span>
      </div>
      <p id="levelIndicator">{{ level }}</p>
    </div>

    <div class="about__skills-container" id="c">
      <div class="about__skills-container-image">
        <img class="image" src="../assets/images/icon/c.webp" alt="c logo" id="cLogo">
      </div>
      <div class="about__skills-container-progressBar">
        <span class="progressLevel" id="first"></span>
        <span class="progressLevel" id="second"></span>
        <span class="progressLevel" id="third"></span>
      </div>
      <p id="levelIndicator">{{ level }}</p>
    </div>

    <div class="about__skills-container" id="java">
      <div class="about__skills-container-image">
        <img class="image" src="../assets/images/icon/java.webp" alt="Java logo" id="javaLogo">
      </div>
      <div class="about__skills-container-progressBar">
        <span class="progressLevel" id="first"></span>
        <span class="progressLevel" id="second"></span>
        <span class="progressLevel" id="third"></span>
      </div>
      <p id="levelIndicator">{{ level }}</p>
    </div>

    <div class="about__skills-container" id="git">
      <div class="about__skills-container-image">
        <img class="image" src="../assets/images/icon/git.webp" alt="Git logo" id="gitLogo">
      </div>
      <div class="about__skills-container-progressBar">
        <span class="progressLevel" id="first"></span>
        <span class="progressLevel" id="second"></span>
        <span class="progressLevel" id="third"></span>
      </div>
      <p id="levelIndicator">{{ level }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'skills_block',
  data () {
    let level = ''

    switch (this.level) {
      case 0:
        level = 'Zero knowledge'
        break

      case 1:
        level = 'Base knowledge'
        break

      case 2:
        level = 'Intermediate knowledge'
        break

      case 3:
        level = 'High knowledge'
        break
    }
    return {
      level: level
    }
  }
}
</script>
