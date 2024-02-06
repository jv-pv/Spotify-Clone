document.addEventListener("DOMContentLoaded", function() {
    let hamburger = this.querySelector(".hamburger")
    let navUl = this.querySelector("ul")

    console.log(navUl)
    hamburger.addEventListener("click", () => {
        console.log("click")
        navUl.classList.toggle("show")
    })
})