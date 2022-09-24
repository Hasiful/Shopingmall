// nav menu active
var navList = document.querySelectorAll(".nav_list_item")

navList.forEach(element =>{
    element.addEventListener("click", function(){
        navList.forEach(nav => nav.classList.remove("active")) 
        this.classList.add("active")
    })
})


// toggole
var navToggler = document.getElementById("header_togglerr")
var navShow = document.getElementById("main_header_toggle")

navToggler.addEventListener("click", function(){
    navShow.classList.toggle("active")
})


