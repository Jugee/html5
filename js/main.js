 $(window).scroll(function(){

        var scroll = $(window).scrollTop();
        if(scroll < 100){

            if(!$(".fixed-top").hasClass("navbar-transparent")){
                $(".fixed-top").addClass("navbar-transparent");
             }
        } else{
            $('.fixed-top').removeClass( "navbar-transparent" )
        }
    });
