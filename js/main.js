

$(function () {
    'use strict';
    
    $('.featured-work ul li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        if ($(this).data('class') === 'all') {
            $('.shuffle-imgs .col-md').css('opacity', '1');
        } else {
            $('.shuffle-imgs .col-md').css('opacity', '.2');
            $($(this).data('class')).parent().css('opacity', 1);
        }
    });
});

//scrole top
var scrollButton = $("#scroll-top")
$(window).scroll(function()
    {
    if($(this).scrollTop() >= 700)
       {
       scrollButton.show(1000);
       }
    else 
        {
            scrollButton.hide(1000);
        }
   
});

 scrollButton.click(function () {
        $('html,body').animate({scrollTop:0},600);
 });


