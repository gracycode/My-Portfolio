// document.getElementById('upload-button').addEventListener('click', function() {
//     const projectLink = prompt("Enter the link to your project:");
//     if (projectLink) {
//         const li = document.createElement('li');
//         li.textContent = projectLink;
//         document.getElementById('project-list').appendChild(li);
//     } else {
//         alert("No link entered.");
//     }
// });

//script for an active nav bar
document.addEventListener("DOMContentLoaded", function(){
    let currentLocation = window.location.href;
    let menuItems = document.querySelectorAll("nav ul li a");
    menuItems.forEach(item => {
        if (item.href === currentLocation){
            item.classList.add("active")
        }
    })

    //js for a responsive menu links//
//     document.querySelector(".menu-icon").addEventListener("click", function(){
//     const menuLinks = document.querySelector("#menu-links");
//     const icon = document.querySelector("#bars");
//     icon.classList.toggle("fa-bar");
//     menuLinks.classList.toggle("show");
   
// })

})