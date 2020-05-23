$(function() {

  $window = $(window),
  $clone = $('.p-nav__cloneWrapper'),
  $f_clone = $('.p-nav__cloneStartWrapper'),
  $end = $('.p-details').offset().top;
  threshold = 1;

// クローン
  $window.on('scroll', function(){
  
    if($window.scrollTop() > threshold) {
      $clone.fadeIn();
      $f_clone.fadeIn();
    } else { 
      $clone.fadeOut();
      $f_clone.fadeOut();
    }   

    if($window.scrollTop() > $end) {
      $clone.addClass('hide');
      $f_clone.addClass('hide');
    }  else {
      $clone.removeClass('hide');
      $f_clone.removeClass('hide');
    }

  }); 


  // マッチメディア
  if(window.matchMedia('(min-width:1200px)').matches) {
    $('.c-switch-a').hide();
    $('.p-nav__box').show();
    $('.p-header__wrapper').addClass('fixed-top');

  } else {
    $('.c-switch-a').show();
    $('.p-nav__box').hide();
    $('.p-header__wrapper').removeClass('fixed-top');

  }





  // スイッチA
  $('.c-switch-a').on('click',function(){
    
    if($('.p-nav__box').is(':hidden')){
      $('.p-nav__box:not(:animated)').slideDown('fast');
      $('.c-switch-a').hide();
    } else {
      $('.p-nav__box:not(:animated)').slideUp('fast');
      $('.c-switch-a').show();
    }
    
    $('.icon-a').addClass('click');
    $('.icon-a').removeClass('click-a');

  });

  // スイッチ
  $('.c-switch').on('click',function(){
    
    if($('.p-nav__box').is(':hidden')){
      $('.p-nav__box:not(:animated)').slideDown();
      $('.c-switch-a').hide();
      
    } else {
      $('.p-nav__box:not(:animated)').slideUp(function(){
        $('.c-switch-a').show();
      });
    }
    $('.icon-a').addClass('click-a');
    $('.icon-a').removeClass('click');

  });


  // リサイズ

  $(window).on('resize',function(){

    if(window.matchMedia('(min-width: 1200px)').matches) { 
      $('.c-switch-a').hide();
      $('.p-nav__box').show();
    $('.p-header__wrapper').addClass('fixed-top');
    $('.p-details__item').addClass('card');
    $('.p-details__link').addClass('stretched-link');

    
    } else {

      $('.c-switch-a').show();
      $('.p-nav__box').hide();  
    $('.p-header__wrapper').removeClass('fixed-top');
    $('.p-details__item').removeClass('card');
    $('.p-details__link').removeClass('stretched-link');

    }

    if($('.icon-a').hasClass('click')){
      $(this).removeClass('click');
    }
  });



  $(window).on('resize',function(){

  var width = $(window).width();

  var border = 1200;

  if( width < border) {
    $('.p-nav__box').hide();

  }
  });




  $window.trigger('scroll');

 
});
