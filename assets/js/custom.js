$(document).ready(function(b) {
  $('select').niceSelect();
  AOS.init() 
});

$(window).on('load resize', function() {
  if ($(window).width() < 768.98) {
    $('.about-slider').slick({
      infinite: true,

      slidesToShow: 1,

      slidesToScroll: 1,

      autoplay: true,

      autoplaySpeed: 5000,

      dots: false,

      arrows: true,

      adaptiveHeight: true,

      nextArrow: '<div class="next"></div>',

      prevArrow: '<div class="prev"></div>',
    });

    $('.work-slider').each(function () {

      var from = $(this).closest('.works .container').find('.big');
      var to = $(this).closest('.works .container').find('.small');
  
      $(this).on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
          var i = (currentSlide ? currentSlide : 0) + 1;
  
          if (i < 10) {
              from.text('0' + i);
              to.text('0' + slick.slideCount);
          } else {
              from.text(i);
              to.text(slick.slideCount);
          };
          if (slick.slideCount < 10) {
              to.text('0' + slick.slideCount);
          } else {
              to.text(slick.slideCount);
          };
      });
  
      $(this).slick({
        dots: false,
  
        infinite: true,
    
        speed: 300,
    
        slidesToShow: 1,
    
        slidesToScroll: 1,
    
        autoplay: true,
    
        autoplaySpeed: 5000,        
    
        nextArrow: '<div class="next"></div>',
    
        prevArrow: '<div class="prev"></div>',
      });
      
    });

    $('.plan-slider').slick({
      infinite: true,

      slidesToShow: 1,

      slidesToScroll: 1,

      autoplay: true,

      autoplaySpeed: 5000,

      dots: false,

      arrows: true,

      adaptiveHeight: true,

      nextArrow: '<div class="next"></div>',

      prevArrow: '<div class="prev"></div>',
    });
  } 
});



function openNav() {
  if ($(window).width() < 767.98) {
    document.getElementById("mySidepanel").style.width = "100%";
  } else {
    document.getElementById("mySidepanel").style.width = "100vw";
  }
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}

window.onload = function () {
  document.body.classList.add('loaded_hiding');
  window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
  }, 500);
}


// Навыки 
var block_show = false;
 
function scrollTracking(){
	if (block_show) {
		return false;
	}
 
	var wt = $(window).scrollTop();
	var wh = $(window).height();
	var et = $('.go').offset().top;
	var eh = $('.go').outerHeight();
	var dh = $(document).height();   
 
	if (wt + wh >= et || wh + wt == dh || eh + et < wh){
		block_show = true;
		
		// Код анимации
    $(".meter > span").each(function () {
      $(this)
        .data("origWidth", $(this).width())
        .width(200)
        .animate({
          width: $(this).data("origWidth")
        }, 2000);
    });
	}
}
 
$(window).scroll(function(){
	scrollTracking();
});
	
$(document).ready(function(){ 
	scrollTracking();
});


// Навыки 
var feat_show = false;
 
function scrollFeatures(){
	if (feat_show) {
		return false;
	}
 
	var wtf = $(window).scrollTop();
	var whf = $(window).height();
	var etf = $('.active').offset().top;
	var ehf = $('.active').outerHeight();
	var dhf = $(document).height();   
 
	if (wtf + whf >= etf || whf + wtf == dhf || ehf + etf < whf){
		feat_show = true;
		
		// Код анимации
    $('.number').each(function () {
      $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
      }, {
        duration: 3000,
        easing: 'swing',
        step: function (now) {
          $(this).text(Math.ceil(now));
        },
        progress: function (animation, progress) {
          if (progress === 1) {
            animation.stop()
          }
        }
      });
    });
	}
}
 
$(window).scroll(function(){
	scrollFeatures();
});
	
$(document).ready(function(){ 
	scrollFeatures();
});

if ($(window).width() > 767.98) {
  $(function(){
    $show = 6;
    $articles = $(".works__exmp>.item");

    $update = function()
    {
        $vis = 0;
        $pos = 0;
        $articles.each(function(ind,obj)
        {
            $pos++;
            $(this).css({"display":($pos>$show)?'none':'block'});
                       
            if ($pos<=$show) { $vis++; }
        });
        
        if ($vis == $articles.length)
        {
          $("#btnMore").css({"display":"none"});   
        }
    };
  
    $update();
    
    $btnMore = $("<a />").attr({"id":"btnMore"});
    $btnMore.html("Show more");
    $btnMore.click(function()
    {
      $show = $show + 6;
      $update();

    });
    
    $(".works .container").append($btnMore);
    
  });
}

// Переменные
const order_form = document.querySelector('.modal-order')

function formDataPaste(pack) {
  let data = {
    size: pack.querySelector('.pack-title').innerText
  };

  order_form.querySelector('[name="type"]').value = data.size;
}

/*  */
for (let i = 0; i < document.querySelectorAll('[open-form-button]').length; i++) {
  let item = document.querySelectorAll('[open-form-button]')[i];
  item.addEventListener('click', () => {
    formDataPaste(item.parentElement.parentElement);
  });
}