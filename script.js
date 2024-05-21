
var slide_menu = document.querySelector(".slide_menu")
var icon = document.querySelector(".icon")

icon.addEventListener("click", () => {
    slide_menu.classList.toggle("slide_open")
})


// ScrollReveal({ reset: true,distance:'80px',duration :1000 ,delay : 0 });
// ScrollReveal().reveal('.home_img ', {origin : 'bottom' });
// ScrollReveal().reveal('.home_content h1 ', {origin : 'right' });
// ScrollReveal().reveal('.home_content h2 ', {origin : 'left' });
// ScrollReveal().reveal('.home_content button', {origin : 'bottom' });
// ScrollReveal().reveal('.project h2 , .contact h3', {origin : 'top' });

var body = document.querySelector("body");
var home = document.querySelector(".home");
var project = document.querySelector(".project");
var about = document.querySelector(".about");
var h1 = document.querySelector(".home_content h1 ");
var about_content = document.querySelector(".about_content");
var contact = document.querySelector(".contact");
var form = document.querySelector("form");
var slide_menu = document.querySelector(".slide_menu");

console.log(form)


var btn = document.querySelectorAll(".moonbtn");


btn.forEach((btn) => {
    btn.addEventListener("click", () => {
        
        body.classList.toggle("bg-dark")
        body.classList.toggle("moon")

        home.classList.toggle("bg-dark")
        home.classList.toggle("moon")

        project.classList.toggle("bg-black")
        project.classList.toggle("moon")

        about.classList.toggle("bg-dark")
        about.classList.toggle("moon")

        contact.classList.toggle("bg-black")
        contact.classList.toggle("moon")

        slide_menu.classList.toggle("bg-black")
        slide_menu.classList.toggle("moon")

        h1.classList.toggle("text-light")
        h1.classList.toggle("moontext")

        about_content.classList.toggle("text-light")
        about_content.classList.toggle("moontext")

        form.classList.toggle("text-light")
        form.classList.toggle("moontext")
    })
})







