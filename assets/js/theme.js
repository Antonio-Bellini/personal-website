import 'assets/style/style.css'

const themeButton = document.querySelector('.theme');

function getCurrentTheme() {
   let theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    return theme;
}

function loadTheme(theme) {
    const root = document.querySelector(':root');
    if (theme === "light") {
        themeButton.innerHTML = '🌙';
    } else {
        themeButton.innerHTML = '☀️';
    }
    root.setAttribute('color-scheme', )
}

window.addEventListener('DOMContentLoaded', () => {
    loadTheme(getCurrentTheme());
})