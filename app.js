$(document).ready(function(){
    $(function () {
        $(document).scroll(function () {
            let nav = $('.navbar');
            nav.toggleClass('background', $(this).scrollTop() > 0)
        })
    })
    $(".toggle-nav").click(function(){
        $(".openNav").toggleClass("active");
        $(".closeNav").toggleClass("active");
        $(".right").toggleClass("show-nav");
    })
})