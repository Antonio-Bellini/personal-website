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
  name: 'nav_bar'
}
</script>
