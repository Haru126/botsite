$(window).on("scroll", function(){
  if ($(window).scrollTop()){
    $('nav').addClass('black');
    $('img').addClass('small');
    $('h1').addClass('invis');
  }
  else {
    $('nav').removeClass('black');
    $('img').removeClass('small');
    $('h1').removeClass('invis');
  }
})
