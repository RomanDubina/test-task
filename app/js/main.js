

$(function () {
    let w = $( window ).width() 

    

    $(window).resize(function() {
            console.log(w)
        });
        if($( window ).width()  < 700){
            $('.leasing-offers__inner').slick({
                centerMode: true,
                // centerPadding: 100,
                slidesToShow: 1,
                slidesToScroll: 1
            })
        }
        
    
    
})