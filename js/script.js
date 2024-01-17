// $(document).ready(function(){
//     $('.carousel__inner').slick({
//         speed: 1200,
//         prevArrow: '<button type="button" class="slick-prev"><img src="icon/left-solid.png"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="icon/right-solid.png"></button>',
//         responsive: [
//             {
//                 breakpoint: 768,
//                 settings: {
//                     dots: true,
//                     arrrows: false,
//                 }
//             }
//         ]
//       });   
// }); 
const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false,

    
  });
document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo("prev");
});
document.querySelector('.next').addEventListener('click', function () {
    slider.goTo("next");
    
});

(function($) {
    $(function() {
      
      $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });
      
      function toogleSlide(item) {
        $(item).each(function(i) {
          $(this).on('click', function(e) {
              e.preventDefault();
              $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
              $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
          });
        });
      };
      toogleSlide('.catalog-item__link');
      toogleSlide('.catalog-item__back');

      //Modal

      $('[data-modal=consultation]').on('click', function(){
          $('.overlay, #consultation').fadeIn('slow');
      });

      $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
      });

      $('.button_mini').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        })
      });

      function valideForms(form){
        $(form).validate({
          rules: {
            name: "required",
            phone: "required",
            email: {
              required: true,
              email: true
            }
          },
          messages: {
            name: "Пожалуйста, введите свое имя",
            phone: "Пожалуйста, введите свой номер телефона",
            email: {
              required: "Пожалуйста, введите свою почту",
              email: "Неправильно введен адрес почты"
            }
          }
        });
      };

      valideForms('#consultation-form');
      valideForms('#consultation form');
      valideForms('#order form');

      $('input[name=phone]').mask("+380 (999) 999-9999");
    
      $('form').submit(function(e) {
        e.preventDefault();

        if (!$(this).valid()) {
          return;
        };
        
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize(),
        }).done(function() {
            $(this).find("input").val("");
            $('#consultation, #order').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');

            $('form').trigger('reset');
        });
        return false;
    });
    
    // Smooth scroll and pageup
    $(window).scroll(function() {
      if ($(this).scrollTop() > 1600) {
        $('.pageup').fadeIn();
      } else {
        $('.pageup').fadeOut();
      }
    });
    $("a[href=#up]").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
      });
      
      new WOW().init();
    });
})(jQuery);
