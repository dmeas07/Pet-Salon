// JS Selector
let inputName = document.getElementById("petName");
console.log(inputName);

// Class
let links = document.getElementsByClassName("nav-link active");
for(let i=0; i<links.length; i++) {
    links[i].setAttribute("target", "_blank");
    links[i].getElementsByClassName.display="none";
}
console.log("nav-link active")
// Tag

let inputs = document.getElementsByTagName("input");
for(let i=0; i<inputs.length; i++) {
    inputs[i].style.display="none";
}

// query
let home = document.querySelector("nav a.link");
console.log(home);

// hiding the selector using querySelector
let selectInput = document.querySelector("select #petService");
selectInput.style.display="none";