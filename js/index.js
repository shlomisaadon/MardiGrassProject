// -------Input value save on Array
let users = [];
let btn = document.getElementById('btnValue');

function addValueToList() {
  let inputFooterValue = document.getElementById('inputFooterValue').value;
  localStorage.setItem('mail:', inputFooterValue);
  users.push('mail:', inputFooterValue);
  console.log(inputFooterValue);
}

btn.addEventListener('click', addValueToList);

// ------- END   Input value save on Array ;) --------------------////



// answer and quation
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
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




//condtion form and validtion
// ///////////////////// ///////////////////// ///////////////////
let fullName = document.getElementById('input-1');
let phone = document.getElementById('input-2');
let email = document.getElementById('input-3');
let text = document.getElementById('input-4');
let bottunFrom = document.getElementById('ContactUs');
let textMsg = document.querySelector('.textRecuest');
let AllBox = document.querySelector('#boxContact');

// validetion email/
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function getNext() {
  var next = localStorage.getItem('');
  next = next ? parseInt(next) : 0;
  var newNext = next + 1;
  localStorage.setItem('', newNext);
  return next;
}


//function its valid the form / email/ phone/type letters
bottunFrom.addEventListener('click', function (e) {
  e.preventDefault()
  let emailV = email.value;
  if (fullName.value === '' || fullName.value == null){
    textMsg.textContent = ('Name is requird');
    fullName.classList.add("fail");
  } 
  else if (phone.value === '' || phone.value.length !== 9){
    textMsg.textContent = ('Phone have to be 9 numbers');
    fullName.classList.remove("fail");
    phone.classList.add("fail");
  } 
  else if (emailV === ''){
    textMsg.textContent = ('Put A email ID');
    phone.classList.remove("fail");
    email.classList.add("fail");
  } 
  //that function from difrnde flie/
  else if(!validateEmail(emailV)){
    textMsg.textContent = ('Your email not valid');
    email.classList.add("fail");
  }
  else if (text.value.length < 10){
    textMsg.textContent = ('You have To Write 10 letters')
    email.classList.remove("fail");
    phone.classList.remove("fail");
    text.classList.add("fail");
  }
  else {
    text.classList.remove("fail");
    textMsg.textContent = ('Thank U well we talk with you')
    textMsg.style.backgroundColor = "green";
    let data = {
      Fullname: fullName.value,
      Phone: phone.value,
      Email: email.value,
      Text: text.value
    }
    console.log(data);

    localStorage.setItem(getNext(), JSON.stringify(data))
    AllBox.innerHTML=(`<div class="textAfterFrom">Thank you very much<br> we will contact you soon<div/>`);
    setTimeout(function(){
      location.reload()
    },10000) 
  }

})

// ///////////////////// ///////////////////// ///////////////////





window.addValueToList('scroll',function(){
  console.log('scrolling')
})