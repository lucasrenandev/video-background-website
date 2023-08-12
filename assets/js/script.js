'use strict'

const menuIcon = document.getElementById("menu-icon")
const navBar = document.querySelector(".navbar")

menuIcon.addEventListener("click", function() {
    navBar.classList.toggle("active")
    this.classList.toggle("bx-x")
})