// Magnific Popup
$(document).ready(function () {
  $('.gallery-item').magnificPopup({
    type: 'image',
    gallery:{
      enabled:true
    }
  });
  
});

// mobile navgation 
  $(document).ready(function(){
    $('.sidenav').sidenav();
  });

// nav scroll
$(window).on("scroll", function() {

    var vScroll = $(this).scrollTop();

    if( vScroll > 100) {
        $("header").addClass("fix");
        $("header").removeClass("container");
    }
    else {
        $("header").removeClass("fix");
        $("header").addClass("container");
    }

});

//colse side nav 
$('#close').on('click',function(){
  $('.sidenav').addClass('vanish');
  $('.sidenav-overlay').css('opacity' , '0');
  $('body').css({'overflow': 'auto'});
});

$('.sidenav-trigger').on('click',function(){
  $('.sidenav').removeClass('vanish');
});

// owl carousel
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
      items: 1,
      margin: 50,
      loop: true,
      dots: true
  });
});


// mixitup 
var containerEl = document.querySelector('[data-ref~="mixitup-container"]');

var mixer = mixitup(containerEl, {
    selectors: {
        target: '[data-ref~="mixitup-target"]'
    }
});



//smooth scroll 
$('a').smoothScroll();


//- WOW 
new WOW().init();
