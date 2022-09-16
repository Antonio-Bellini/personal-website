<template>
  <!--Sezione delle skills-->
  <!--Riga uno delle skills-->
  <h5>My skills</h5>
  <div class="app--about--main--skills--one">
    <div class="block" id="html">
      <br>
      <img class="logoImg" src="../assets/images/icon/html.svg" alt="html logo" id="htmlLogo">
      <div class="progressBar">
        <div id="htmlBar">{{ htmlProgress }}</div>
      </div>
    </div>
    <div class="block" id="css">
      <br>
      <img class="logoImg" src="../assets/images/icon/css.png" alt="css logo" id="cssLogo">
      <div class="progressBar">
        <div id="cssBar">{{ cssProgress }}</div>
      </div>
    </div>
    <div class="block" id="scss">
      <br>
      <img class="logoImg" src="../assets/images/icon/scss.png" alt="scss logg" id="scssLogo">
      <div class="progressBar">
        <div id="scssBar">{{ scssProgress }}</div>
      </div>
    </div>
    <div class="block" id="js">
      <br>
      <img class="logoImg" src="../assets/images/icon/js.png" alt="js logo" id="jsLogo">
      <div class="progressBar">
        <div id="jsBar">{{ jsProgress }}</div>
      </div>
    </div>
    <div class="block" id="vue">
      <br>
      <img class="logoImg" src="../assets/images/icon/vue.png" alt="vue.js logg" id="vueLogo">
      <div class="progressBar">
        <div id="vueBar">{{ vueProgress }}</div>
      </div>
    </div>
  </div>
  <!--Riga due delle skills-->
  <div class="app--about--main--skills--two">
    <div class="block" id="c">
      <br>
      <img class="logoImg" src="../assets/images/icon/c.png" alt="C logo" id="cLogo">
      <div class="progressBar">
        <div id="cBar">{{ cProgress }}</div>
      </div>
    </div>
    <div class="block" id="java">
      <br>
      <img class="logoImg" src="../assets/images/icon/java.png" alt="Java logo" id="javaLogo">
      <div class="progressBar">
        <div id="javaBar">{{ javaProgress }}</div>
      </div>
    </div>
    <div class="block" id="git">
      <br>
      <img class="logoImg" src="../assets/images/icon/git.png" alt="git logo" id="gitLogo">
      <div class="progressBar">
        <div id="gitBar">{{ gitProgress }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'skills_block',
  data () {
    return {
      htmlProgress: '55%',
      cssProgress: '40%',
      scssProgress: '42%',
      jsProgress: '10%',
      vueProgress: '20%',

      cProgress: '25%',
      javaProgress: '1%',
      gitProgress: '15%'
    }
  }
}
</script>
