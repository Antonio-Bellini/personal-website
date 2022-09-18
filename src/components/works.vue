<template>
    <div class="app--home--main--works">
      <div class="workBlock">
        <div class="image">
          <img src="../assets/images/content/respiravo_project.png" alt="work one">
        </div>
        <div class="text">
          <div class="content">
            <h3 id="workOne">{{ workOneTitle }}</h3>
            <p>{{ workOneSubtitle }}
              <a href="https://respiravo.altervista.org/" class="workButton" target="_blank">Visit website</a>
            </p>
          </div>
        </div>
      </div>

      <div class="workBlock">
        <div class="image">
          <img src="../assets/images/content/WIP.webp" alt="work two">
        </div>
        <div class="text">
          <div class="content">
            <h3 id="workTwo">{{ workTwoTitle }}</h3>
            <p>{{ workTwoSubtitle }}
              <a href="#" class="workButton disabled" target="_blank">Visit website</a>
            </p>
          </div>
        </div>
      </div>

      <div class="workBlock">
        <div class="image">
          <img src="../assets/images/content/WIP.webp" alt="work three">
        </div>
        <div class="text">
          <div class="content">
            <h3 id="workThree">{{ temporaryName }}</h3>
            <p>{{ temporaryDescription }}
              <a href="#" class="workButton disabled" target="_blank">Visit website</a>
            </p>
          </div>
        </div>
      </div>

      <div class="workBlock">
        <div class="image">
          <img src="../assets/images/content/WIP.webp" alt="work four">
        </div>
        <div class="text">
          <div class="content">
            <h3 id="workFour">{{ temporaryName }}</h3>
            <p>{{ temporaryDescription }}
              <a href="#" class="workButton disabled" target="_blank">Visit website</a>
            </p>
          </div>
        </div>
      </div>

      <div class="workBlock">
        <div class="image">
          <img src="../assets/images/content/WIP.webp" alt="work five">
        </div>
        <div class="text">
          <div class="content">
            <h3 id="workFive">{{ temporaryName }}</h3>
            <p>{{ temporaryDescription }}
              <a href="#" class="workButton disabled" target="_blank">Visit website</a>
            </p>
          </div>
        </div>
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

      temporaryName: 'Work in Progress',
      temporaryDescription: 'New project coming soon'
    }
  }
}
</script>
