var multipleCardCarousel = document.querySelector('#carouselExampleInterval');

if (window.matchMedia("(min-width:576px)").matches) {
    var carousel = new bootstrap.Carousel(multipleCardCarousel,
        {
            interval: false
        })
    var carouselWidth = $('.carousel-inner')[0].scrollWidth;
    var cardWidth = $('.carousel-item').width();
    var scrollPosition = 0;
    // Next button
    $('.carousel-control-next').on('click', function () {
        if (scrollPosition < (carouselWidth - (cardWidth * 4))) {
            //console.log("next");
            scrollPosition = scrollPosition + cardWidth;
            $('.carousel-inner').animate({ scrollLeft: scrollPosition }, 400);
        }
    });
    // Prev Button
    $('.carousel-control-prev').on('click', function () {
        if (scrollPosition > 0) {
            //console.log("prev");
            scrollPosition = scrollPosition - cardWidth;
            $('.carousel-inner').animate({ scrollLeft: scrollPosition }, 400);
        }
    });
} else {
    $(multipleCardCarousel).addclass('slide')
}

// setInterval(function () {
//     console.log("okk");
//     if (scrollPosition < (carouselWidth - (cardWidth * 4))) {
//         //console.log("next");
//         scrollPosition = scrollPosition + cardWidth;
//         $('.carousel-inner').animate({ scrollLeft: scrollPosition }, 400);
//     }
// }, 1000)

// var multipleCardCarousel = document.querySelector("#carouselExampleControls");
// if (window.matchMedia("(min-width: 768px)").matches) {
//     var carousel = new bootstrap.Carousel(multipleCardCarousel, {
//         interval: false,
//     });
//     var carouselWidth = $(".carousel-inner")[0].scrollWidth;
//     var cardWidth = $(".carousel-item").width();
//     var scrollPosition = 0;
//     $("#carouselExampleControls .carousel-control-next").on("click", function () {
//         if (scrollPosition < carouselWidth - cardWidth * 4) {
//             scrollPosition += cardWidth;
//             $("#carouselExampleControls .carousel-inner").animate(
//                 { scrollLeft: scrollPosition },
//                 600
//             );
//         }
//     });
//     $("#carouselExampleControls .carousel-control-prev").on("click", function () {
//         if (scrollPosition > 0) {
//             scrollPosition -= cardWidth;
//             $("#carouselExampleControls .carousel-inner").animate(
//                 { scrollLeft: scrollPosition },
//                 600
//             );
//         }
//     });
// } else {
//     $(multipleCardCarousel).addClass("slide");
// }

