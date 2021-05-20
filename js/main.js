$(document).ready(function(){
    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    /******click event on toggle meny******/

    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    })
//owl crousel for blog

$('.owl-carousel').owlCarousel();

});

