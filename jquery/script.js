$(document).ready(function(){
  // alert("Good");
  $('.main-container').click(function(){
    $('.arrow').animate({left: '420%'});
  });
 // $(document).keypress(function (e) {
 // if (e.keyCode == 0 ||e.keyCode === 32) {
   // e.preventDefault()
   // console.log('Space pressed')
  //}
//});
   $(document).keypress(function(e) {
    if (e.keyCode == '32') {
        alert('space');
      e.preventDefault()
      console.log('Space pressed')

        }
       });
});
