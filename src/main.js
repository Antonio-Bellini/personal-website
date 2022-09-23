import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

createApp(App).use(router).mount('#app')

//              HAMBURGER MENU
const hamburger = document.querySelector('.navHamburger')
const navMenu = document.querySelector('.navMenu')

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active')
  navMenu.classList.toggle('active')
})

document.querySelectorAll('.navLink').forEach(link => link.addEventListener('click', () => {
  hamburger.classList.remove('active')
  navMenu.classList.remove('active')
}))

//              EMAIL FORM SECTION

// Variabile form nascosto
const showForm = document.querySelector('.showEmailForm')
// Variabile bottone
const emailForm = document.querySelector('.app__emailForm')

showForm.addEventListener('click', (event) => {
  emailForm.classList.toggle('show')
  if (showForm.innerText === 'Get in Touch!') {
    showForm.innerText = 'Cancel'
  } else {
    showForm.innerText = 'Get in Touch!'
  }
})

//              AZIONI DEI BOTTONI
// Variabili
const buttonGithub = document.querySelector('.github')
const buttonIn = document.querySelector('.linkedin')
const buttonWork = document.querySelector('.workBtn')
const buttonAbout = document.querySelector('.aboutBtn')
const buttonLogo = document.querySelector('.logoBtn')

// Colore secondario, primario, e valore della transition
const hovColor = '#E6E6E6'
const mainColor = '#6A6A6A'
const transVal = '.5s'

// Assegnazione del tempo di transition a ogni bottone
buttonGithub.style.transition = transVal
buttonIn.style.transition = transVal
buttonWork.style.transition = transVal
buttonAbout.style.transition = transVal
buttonLogo.style.transition = transVal

// Funzionamento bottone 'logo'
buttonLogo.addEventListener('mouseover', (event) => {
  buttonWork.style.color = mainColor
  buttonAbout.style.color = mainColor
  if (buttonLogo.addEventListener('mouseout', (event) => {
    buttonWork.style.color = hovColor
    buttonAbout.style.color = hovColor
  }));
})

// Funzionamento bottone 'work'
buttonWork.addEventListener('mouseover', (event) => {
  buttonLogo.style.color = mainColor
  buttonAbout.style.color = mainColor
  if (buttonWork.addEventListener('mouseout', (event) => {
    buttonLogo.style.color = hovColor
    buttonAbout.style.color = hovColor
  }));
})

// Funzionamento bottone 'about'
buttonAbout.addEventListener('mouseover', (event) => {
  buttonLogo.style.color = mainColor
  buttonWork.style.color = mainColor
  if (buttonAbout.addEventListener('mouseout', (event) => {
    buttonLogo.style.color = hovColor
    buttonWork.style.color = hovColor
  }));
})

// Funzionamento bottone 'Github'
buttonGithub.addEventListener('mouseover', (event) => {
  buttonIn.style.color = hovColor
  if (buttonGithub.addEventListener('mouseout', (event) => {
    buttonIn.style.color = mainColor
  }));
})

// Funzionamento bottone 'linkedin'
buttonIn.addEventListener('mouseover', (event) => {
  buttonGithub.style.color = hovColor
  if (buttonIn.addEventListener('mouseout', (event) => {
    buttonGithub.style.color = mainColor
  }));
})
