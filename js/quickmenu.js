$(window).scroll(function(){
    if($(document).scrollTop() >= 500 && $(document).scrollTop() <= $('#footer').offset().top - 1000) {
        $('#quickmenu').fadeIn(200);
    } else{ $('#quickmenu').fadeOut(200);}
})