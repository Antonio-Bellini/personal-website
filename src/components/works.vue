<template>
    <div class="app--home--main--works">
      <div class="workBlock">
        <p class="workTitle" id="workOne">{{ workOneTitle }}</p>
        <p class="workSubtitle">{{ workOneSubtitle }}</p>
        <img class="workImage" src="../assets/images/content/respiravo_project.png" alt="work one">
        <a href="https://respiravo.altervista.org/" class="workButton" target="_blank">Visit website</a>
      </div>

      <div class="workBlock">
        <p class="workTitle" id="workTwo">{{ workTwoTitle }}</p>
        <p class="workSubtitle">{{ workTwoSubtitle }}</p>
        <img class="workImage" src="../assets/images/content/WIP.webp" alt="work two">
        <a href="#" class="workButton disabled" target="_blank">Visit website</a><br>
      </div>

      <div class="workBlock">
        <p class="workTitle" id="workThree">{{ workThreeTitle }}</p>
        <p class="workSubtitle">{{ workThreeSubtitle }}</p>
        <img class="workImage" src="../assets/images/content/WIP.webp" alt="work three">
        <a href="#" class="workButton disabled" target="_blank">Visit website</a><br>
      </div>
    </div>

    <div class="app--home--main--works">
      <div class="workBlock">
        <p class="workTitle" id="workThree">{{ workThreeTitle }}</p>
        <p class="workSubtitle">{{ workThreeSubtitle }}</p>
        <img class="workImage" src="../assets/images/content/WIP.webp" alt="work three">
        <a href="#" class="workButton disabled" target="_blank">Visit website</a><br>
      </div>

      <div class="workBlock">
        <p class="workTitle" id="workThree">{{ workThreeTitle }}</p>
        <p class="workSubtitle">{{ workThreeSubtitle }}</p>
        <img class="workImage" src="../assets/images/content/WIP.webp" alt="work three">
        <a href="#" class="workButton disabled" target="_blank">Visit website</a><br>
      </div>
    </div>
</template>

<script>
export default {
  name: 'work_block',
  data () {
    return {
      workOneTitle: 'RespirAVO',
      workOneSubtitle: 'RespirAVO was a school project made for sensitize as many people as pobbile about the high level of pollution in our city. My work here was to create the website of the project.',

      workTwoTitle: 'Aroma Chat',
      workTwoSubtitle: 'Aroma Chat is a web app, made by a group of student,that allowed the user who loggins to comunicate with other, user online, and in different text channels. For now is still work in progress.',

      workThreeTitle: 'Work in progress',
      workThreeSubtitle: 'New project coming soon',

      temporaryName: 'Work in Progress',
      temporaryDescription: 'Work in progress! Something cool is coming! Check later on'
    }
  }
}
</script>
