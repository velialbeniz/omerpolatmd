$(document).ready(function(){
    $('body').css('opacity', '1');
})

$('.header-main .desktop-menu').click(function(){
    $(this).toggleClass('active');
    $('.item .item-list').toggleClass('active');
    $('body .dark-bg').toggleClass('active');
})

$('body .dark-bg').click(function(){
    $(this).removeClass('active');
    $('body .dark-bg').removeClass('active');
    $('.item .item-list').removeClass('active');
    $('.side-bar').removeClass('active');

})

$('header .mobile').click(function(){
    $(this).toggleClass('active');
    $('.side-bar').toggleClass('active');
    $('body .dark-bg').toggleClass('active');

})

$('header .mobile.active').click(function(){
    $(this).removeClass('active');
    $('.side-bar').removeClass('active');
    $('body .dark-bg').removeClass('active');
})

$('.side-bar .open-detail').click(function(){
    $(this).toggleClass('active');
    $(this).next().slideToggle();
})

// $('.nav-list .click-menu').click(function(){
//     $(this).toggleClass('active');
//     $('nav .pop-up-menu').toggleClass('active');
//     $('body .dark-bg').toggleClass('active');

// });

// $('body .dark-bg').click(function(){
//     $(this).removeClass('active');
//     $('body .dark-bg').removeClass('active');
//     $('nav .pop-up-menu').removeClass('active');
// });