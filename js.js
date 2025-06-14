const menuIcon = document.querySelector(".menu-icon");
const sideBar = document.querySelector(".sidebar");
const container = document.querySelector(".container");

menuIcon.onclick = function() {
    console.log("button was clicked");
    sideBar.classList.toggle("smallsidebar");
    container.classList.toggle("large-container");
}

// function toggleBtn(){
//    // console.log("button was clicked");
//     sideBar.classList.toggle("smallsidebar");
//     container.classList.toggle("large-container");
// }
