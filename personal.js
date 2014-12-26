// Fiona Rowan


// O 
//         O   ^__^
//          o  (oo)_______
//             (__)       )\/\
//                 ||----w |
//                 ||     ||   


$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

$('<div ><a id = "scrollTop" href="#home">^</a></div>')
  .appendTo("#home");

//section sizes
$(function(){
	$(window).bind("load resize", function(){
		_winHeight = $(window).height();
    _winWidth = $(window).width();
			$("#home").css({"height": _winHeight});
			$("#contact").css({"height": _winHeight});
      $("#about").css({"height": _winHeight});
      $("#about .section").css({"height": _winHeight/2});
      $("#languages").css({"height": _winHeight});
      $("#manifesto").css({"height": _winHeight});
      $(".slideOut, .button").css({"width": _winWidth/5});
      $(".slideContainer").css({"margin-left": _winWidth/40, "margin-right": _winWidth/40});
      $(".circle").css({"width": _winWidth/15, "line-height": (_winWidth/335), "margin-left": _winWidth/13, "margin-right": _winWidth/25});
      $("#scrollTop").css({"top": _winHeight*0.85, "z-index": 5});
      $("#manifesto .section").css({'padding-top': _winHeight/10});


	});
});

$('.slideOut').hide();

$('#about .section span').click(function() {
  $(this).toggleClass('prettyHover');
});

$('#butt1').click(function(){
  $('#slide1').slideToggle();
})

$('#butt2').click(function(){
  $('#slide2').slideToggle();
})

$('#butt3').click(function(){
  $('#slide3').slideToggle();
})

$('.button').hover(function() {
  $(this).addClass('prettyHover');
}, function() {
  $(this).removeClass('prettyHover');
});

$(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
      $('#scrollTop').fadeIn();
    } else {
      $('#scrollTop').fadeOut();
    }

  });




