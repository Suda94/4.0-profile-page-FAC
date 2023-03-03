
// all the PNG tag files id from the index page:
let cloud = document.getElementById('clouds');
let sun = document.getElementById('sun');
let mountain = document.getElementById('back');
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let cloud2 = document.getElementById('cloud2');

// event listener for clicks in the page 
window.addEventListener('scroll', function(){
    let value = window.scrollY;
    cloud.style.left = value  + 0.25 + "px";
    sun.style.left = value  + 1.25 + "px";
    mountain.style.top = value  + 1.00 + "px";
})
