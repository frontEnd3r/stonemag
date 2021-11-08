// Checkbox
$(document).ready(function () {
    AOS.init();

    let checkbox = $('.header-bottom-offer-form-wrap__checkbox');
    let input = $('.header-bottom-offer-form__checkbox-hidden');

    checkbox.on('click', function () {
        if (input.prop('checked') == true) {
            input.prop('checked', false);
        } else {
            input.prop('checked', true);
        }
    });

    // Header scroll
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $(".header-top").addClass("fixed");
        } else {
            $(".header-top").removeClass("fixed");
        }
    });

    // Input maks
    $("input[name=user-tel]").inputmask("+7(999)999-99-99");

    // Answers
    $('.answers-list-card-top').on('click', function () {
        $(this).toggleClass('active');
        $(this).parent().find('.answers-list-card-bottom').slideToggle();
    });

    // Reviews slider
    $('.reviews-slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        items: 1,
    })

    // Tabs
    $('.examples-buttons__button').on('click', function () {
        $('.examples-buttons__button').removeClass('active');
        $('.examples-case').hide();

        let target = $(this).attr('data-target');

        $(this).addClass('active');
        $('.examples-case[data-target=' + target + ']').show();
    });


    // Timer
    $('#counter').timer({
        countdown: true,
        duration: '29d2h35m',
        format: '%d : %h : %m'
    });

    $('#counter-sec').timer({
        countdown: true,
        duration: '29d2h35m',
        format: '%d : %h : %m'
    });

    // Modal
    $('.header-top__btn').on('click', function() {
        $('.popup-container').show().css('display', 'flex');
      });
    
      $('.popup-overlay').on('click', function() {
        $('.popup-container').hide();
      });
    
      $('.popup__close').on('click', function() {
        $('.popup-container').hide();
      });

    // Send 
    $('.popup-form').on('submit', function () {
        let user_name = $(this).find('input[name=user-name]').val();
        let user_tel = $(this).find('input[name=user-tel]').val();
  
        $.ajax({
            url: "send.php",
            type: "post",
            dataType: "json",
            data: {
                "user_name": user_name,
                "user_tel": user_tel,
            },
            success: function (data) { }
        });
  
        $('.popup-container').hide();
        
        $(this)[0].reset();
        return false;
    });
    
    
    $('.header-bottom-offer-form').on('submit', function () {
        let user_name = $(this).find('input[name=user-name]').val();
        let user_tel = $(this).find('input[name=user-tel]').val();
  
        $.ajax({
            url: "send.php",
            type: "post",
            dataType: "json",
            data: {
                "user_name": user_name,
                "user_tel": user_tel,
            },
            success: function (data) { }
        });
  
        
        $(this)[0].reset();
        return false;
    });

});


