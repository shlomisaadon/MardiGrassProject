// let qution = $('.qution');
// let answer = $('.answer');
// console.log(qution);
// console.log(answer);






// Contact Box 

let contactBoxBtn = document.querySelector('#Contact');
let theBox = document.querySelector('#boxContact');
let closeBtn = document.querySelector('.closeIcon');
theBox.style.display = "none";
let btnPress = () => {
  theBox.style.display = "flex";
}

let clickClose = () => {
  theBox.style.display = "none";
}


contactBoxBtn.addEventListener('click', btnPress);
closeBtn.addEventListener('click', clickClose);



////////////////////////////////////////////////////////////

// answer and quation


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

// ///////////////////

///
