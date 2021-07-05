// transform対策
console.log("");
// スクロールアニメーション
let animationFlag = true;
$(window).on('scroll',function(){

  $(".fade-in").each(function(){
    var position = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > position - windowHeight + 50){
      $(this).addClass('scroll-in');
    }
  });
  

  $(".count").each(function(){
    var position = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > position - windowHeight){    
    
      if (animationFlag) {
        $('.count').each(function () {
          $(this).prop('c',0).animate({
            c: $(this).text()
          }, {
            duration: 2500,
            easing: 'linear',
            step: function (now) {
              $(this).text(Math.ceil(now));
            }
          });
        });
        animationFlag = false;
      }
    }
  }); 
  
});


$('.slider').slick({
  arrows:false,
  arrows: true,  
  dots: true,       
});

// $('.thumb').slick({
//   asNavFor:'.slider',
//   focusOnSelect: true,
//   slidesToShow:4,
//   slidesToScroll:1
// });
// $('.thumb2').slick({
//   asNavFor:'.slider',
//   focusOnSelect: true,
//   slidesToShow:4,
//   slidesToScroll:1
// });



$(document).on('ready', function() {
  $(".regular").slick({
    autoplay: true, // 自動再生を設定
    autoplaySpeed: 4000, // 自動再生のスピード（ミリ秒単位）
    dots: true // ドットインジケーターの表示
  });
});