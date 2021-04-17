// Contact Box 

let $contactBoxBtn = $('#Contact');
let $theBox = $('#boxContact').hide();
let $closeBtn = $('.closeIcon');
$($contactBoxBtn).on('click', function () {
    $($theBox).slideToggle()

})

$($closeBtn).on('click', function () {
    $($theBox).slideToggle()

})


$(document).html


////////////////////////////////////////////////////////////


// read More on about page

let $more = $('#more').hide();
$('#btnMore').on('click', function () {
    $more.slideToggle();
})


//

// mobile iconMenu //
let a = $('.dropItems').hide();
$('#dropmenu').on('click', function () {
    let a = $('.dropItems').slideToggle();
    console.log(a);
})

////

//laoder
var timeOut;
// $('.hidePage').hide()
  function myFunction() {
    timeOut = setTimeout(showPage, 500);
  }

  function showPage() {
    $('#centerdiv').fadeOut()
    $('.hidePage').show();
  }