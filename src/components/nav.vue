<template>
    <nav class="navBar">
        <li><router-link to="/" class="logoBtn">ab</router-link></li>

        <ul class="navMenu">
            <li class="navLink"><router-link to="/" class="workBtn">WORK</router-link></li>
            <li class="navLink"><router-link to="/about" class="aboutBtn">ABOUT</router-link></li>
        </ul>

        <div class="navHamburger">
            <span class="hamburgerItem"></span>
            <span class="hamburgerItem"></span>
            <span class="hamburgerItem"></span>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'nav_bar',
  mounted () {
    const hamburger = document.querySelector('.navHamburger')
    const navMenu = document.querySelector('.navMenu')
    const emailForm = document.querySelector('.app__emailForm')
    const showForm = document.querySelector('.showEmailForm')

    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active')
      navMenu.classList.toggle('active')
    })

    showForm.addEventListener('click', (event) => {
      emailForm.classList.toggle('show')
      if (showForm.innerText === 'Get in Touch!') {
        showForm.innerText = 'Cancel'
      } else {
        showForm.innerText = 'Get in Touch!'
      }
    })

    document.querySelectorAll('.navLink').forEach(link => link.addEventListener('click', () => {
      hamburger.classList.remove('active')
      navMenu.classList.remove('active')
      emailForm.classList.remove('show')
      if (showForm.innerText === 'Get in Touch!') {
        showForm.innerText = 'Cancel'
      } else {
        showForm.innerText = 'Get in Touch!'
      }
    }))

    const button = []
    const variables = ['#E6E6E6', '#6A6A6A', '.5s']

    button[0] = document.querySelector('.github')
    button[1] = document.querySelector('.linkedin')
    button[2] = document.querySelector('.workBtn')
    button[3] = document.querySelector('.aboutBtn')
    button[4] = document.querySelector('.logoBtn')

    // vari casi dei vari bottoni
    for (let i = 0; i < 5; i++) {
      button[i].style.transition = variables[2]
      button[i].addEventListener('mouseover', (event) => {
        switch (i) {
          // github
          case 0:
            button[0].addEventListener('mouseover', (event) => {
              button[1].style.color = variables[0]
              if (button[0].addEventListener('mouseout', (event) => {
                button[1].style.color = variables[1]
              }));
            })
            break

          // linkedin
          case 1:
            button[1].addEventListener('mouseover', (event) => {
              button[0].style.color = variables[0]
              if (button[1].addEventListener('mouseout', (event) => {
                button[0].style.color = variables[1]
              }));
            })
            break

          // work
          case 2:
            button[2].addEventListener('mouseover', (event) => {
              button[4].style.color = variables[1]
              button[3].style.color = variables[1]
              if (button[2].addEventListener('mouseout', (event) => {
                button[4].style.color = variables[0]
                button[3].style.color = variables[0]
              }));
            })
            break

          // about
          case 3:
            button[3].addEventListener('mouseover', (event) => {
              button[4].style.color = variables[1]
              button[2].style.color = variables[1]
              if (button[3].addEventListener('mouseout', (event) => {
                button[4].style.color = variables[0]
                button[2].style.color = variables[0]
              }));
            })
            break

          // logo
          case 4:
            button[4].addEventListener('mouseover', (event) => {
              button[2].style.color = variables[1]
              button[3].style.color = variables[1]
              if (button[4].addEventListener('mouseout', (event) => {
                button[2].style.color = variables[0]
                button[3].style.color = variables[0]
              }));
            })
            break
        }
      })
    }
  }
}
</script>
