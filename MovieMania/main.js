let index = 0;
const totalWorkItem = $(".work-item").length;

$(document).ready(function(){
    $(window).on("load" , function(){
        $(".preloader").classlist.add("loader");
    })

    $(".nav-toggle").click(function(){
        $(".header .nav").slideToggle();
    })

    $(".hedaer .nav a").click(function(){
        if($(window).width()<768){
            $(".header .nav").slideToggle();
        }
    })


})