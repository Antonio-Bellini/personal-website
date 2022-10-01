<template>
  <h5>My skills</h5>
  <div class="about__skills">
    <div class="about__skills-container" id="html">
      <div class="about__skills-container-image">
        <img class="image" src="../assets/images/icon/html.webp" alt="html logo" id="htmlLogo">
      </div>
      <div class="about__skills-container-progressBar">
        <div class="about__skills-container-progressBar-level">
            <div id="html">&nbsp;</div>
        </div>
      </div>
    </div>

    <div class="about__skills-container" id="css">
      <div class="about__skills-container-image">
        <img class="image" src="../assets/images/icon/css.webp" alt="css logo" id="cssLogo">
      </div>
      <div class="about__skills-container-progressBar">
        <div class="about__skills-container-progressBar-level">
          <div id="css">&nbsp;</div>
        </div>
      </div>
    </div>

    <div class="about__skills-container" id="scss">
      <div class="about__skills-container-image">
        <img class="image" src="../assets/images/icon/scss.webp" alt="scss logo" id="scssLogo">
      </div>
      <div class="about__skills-container-progressBar">
        <div class="about__skills-container-progressBar-level">
          <div id="scss">&nbsp;</div>
        </div>
      </div>
    </div>

    <div class="about__skills-container" id="js">
      <div class="about__skills-container-image">
        <img class="image" src="../assets/images/icon/js.webp" alt="js logo" id="jsLogo">
      </div>
      <div class="about__skills-container-progressBar">
        <div class="about__skills-container-progressBar-level">
          <div id="js">&nbsp;</div>
        </div>
      </div>
    </div>

    <div class="about__skills-container" id="vue">
      <div class="about__skills-container-image">
        <img class="image" src="../assets/images/icon/vue.webp" alt="vue.js logo" id="vueLogo">
      </div>
      <div class="about__skills-container-progressBar">
        <div class="about__skills-container-progressBar-level">
          <div id="vue">&nbsp;</div>
        </div>
      </div>
    </div>

    <div class="about__skills-container" id="c">
      <div class="about__skills-container-image">
        <img class="image" src="../assets/images/icon/c.webp" alt="c logo" id="cLogo">
      </div>
      <div class="about__skills-container-progressBar">
        <div class="about__skills-container-progressBar-level">
          <div id="c">&nbsp;</div>
        </div>
      </div>
    </div>

    <div class="about__skills-container" id="java">
      <div class="about__skills-container-image">
        <img class="image" src="../assets/images/icon/java.webp" alt="Java logo" id="javaLogo">
      </div>
      <div class="about__skills-container-progressBar">
        <div class="about__skills-container-progressBar-level">
          <div id="java">&nbsp;</div>
        </div>
      </div>
    </div>

    <div class="about__skills-container" id="git">
      <div class="about__skills-container-image">
        <img class="image" src="../assets/images/icon/git.webp" alt="Git logo" id="gitLogo">
      </div>
      <div class="about__skills-container-progressBar">
        <div class="about__skills-container-progressBar-level">
          <div id="git">&nbsp;</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'skills_block',
  data () {
    return {
      htmlProgress: '45%',
      cssProgress: '40%',
      scssProgress: '42%',
      jsProgress: '10%',
      vueProgress: '20%',
      cProgress: '20%',
      javaProgress: '2%',
      gitProgress: '5%'
    }
  }
}
</script>
