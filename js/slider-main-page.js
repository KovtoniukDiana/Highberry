
$(document).ready(function() {
    let scrollButton = $(".anchor-down-arrow");

    scrollButton.click(function() {
        $("html, body").animate({
            scrollTop: $(".we-near").offset().top - 65
        }, 800);
    });


    function FixedNav () {
        let colorChange =  $(".nav-color-change");
        let scroll = $(window).scrollTop();

        if (scroll < 450) {
            colorChange.css({"background-color" : "transparent"});
        } 
        else if (scroll >= 450 && scroll <= 840) {
            colorChange.css({"background-color" : "rgba(0, 0, 0, 0.5)", "transition" : "background-color 0.5s ease-out"});
            colorChange.removeClass("scroll-down");
        }
        else if (scroll > 840) {
            colorChange.addClass("scroll-down");
        }
    }

    $(window).on("scroll", function () {
        FixedNav();
    });

//
    $(".accordion").click(function() {
        let section = $(this).closest(".fresh-production-section"); 
        let imageId = $(this).data("image");

        section.find(".image-section img").removeClass("active"); 
        section.find("#" + imageId).addClass("active");

        section.find(".accordion").removeClass("active");
        $(this).addClass("active");
    });



//
    $('.slider-text-content .layers-accordion').on('click', function () {
        let index = parseInt($(this).attr('data-index'));
         let images = $('.slider-img-container .slider-img-item');
        let classNames = ['selected', 'second', 'third', 'fourth', 'fifth'];

         images.each(function (i) {
            $(this).removeClass(classNames.join(' '));

            if (i == index) {
                $(this).addClass('selected').css('z-index', 5);
             } else {
                let orderIndex = i > index ? i - index : images.length - (index - i);
                if (orderIndex < classNames.length) {
                     $(this).addClass(classNames[orderIndex]).css('z-index', classNames.length - orderIndex);
                 }
            }
        });
    });


    
});




