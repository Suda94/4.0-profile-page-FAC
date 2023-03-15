
// all the PNG tag files id from the index page:
let cloud = document.getElementById('clouds');
let sun = document.getElementById('sun');
let mountain = document.getElementById('back');
let text = document.getElementById('text');
let button = document.getElementById('butt');
let cloud_front = document.getElementById('cloud2');

// event listener for clicks in the page 
window.addEventListener('scroll', function(){
    let value = window.scrollY;
    cloud.style.left = value  * 0.25 + "px";
    sun.style.left = value  * 1.25 + "px";
    mountain.style.top = value  * 0.50 + "px";
    cloud_front.style.left = value  * 0.20 + "px";
    text.style.marginBottom = value  * 4.00 + "px";
})



//animation for the project gallery 
// Get the modal hobby page 
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



// Get the modal movie data page
let modalTwo = document.getElementById("myModal2");

// Get the button that opens the modal
let btnTwo = document.getElementById("myBtn2");

// Get the <span> element that closes the modal
let spanTwo = document.getElementsByClassName("close2")[0];

// When the user clicks the button, open the modal 
btnTwo.onclick = function() {
  modalTwo.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanTwo.onclick = function() {
  modalTwo.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalTwo) {
    modalTwo.style.display = "none";
  }
}

// Get the modal Portfolio page
let modalThree = document.getElementById("myModal3");

// Get the button that opens the modal
let btnThree = document.getElementById("myBtn3");

// Get the <span> element that closes the modal
let spanThree = document.getElementsByClassName("close3")[0];

// When the user clicks the button, open the modal 
btnThree.onclick = function() {
  modalThree.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanThree.onclick = function() {
  modalThree.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalThree) {
    modalThree.style.display = "none";
  }
}

// get the modal for game 
let modalFour = document.getElementById("myModal4");

// Get the button that opens the modal
let btnFour = document.getElementById("myBtn4");

// Get the <span> element that closes the modal
let spanFour = document.getElementsByClassName("close4")[0];

// When the user clicks the button, open the modal 
btnFour.onclick = function() {
  modalFour.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanFour.onclick = function() {
  modalFour.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalFour) {
    modalFour.style.display = "none";
  }
}
//  