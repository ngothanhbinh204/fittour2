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



// slide2


// var app = angular.module("myapp", ["ngRoute"]);
// app.config(function ($routeProvider) {
//     $routeProvider
//         .when("/", { templateUrl: "index.html" })
//         .when("/lichtrinhtour", { templateUrl: "lichtrinhtour.html" })
//         .when("/gallery", { templateUrl: "gallery.html" })
//         .when("/blog", { templateUrl: "blog.html" })
//         .when("/detail", { templateUrl: "detail.html" })
//         .when("/contact", { templateUrl: "contact.html" })
//         .when("/tour", { templateUrl: "tour.html" })
//         .when("/dangnhap", { templateUrl: "dangnhap.html" })
//         .otherwise({ templateUrl: "index.html" })
// });

// app.run(function ($rootScope) {
//     $rootScope.$on('$routeChangeStart', function () {
//         $rootScope.loading = true;
//     });
//     $rootScope.$on('$routeChangeSuccess', function () {
//         $rootScope.loading = false;
//     });
//     $rootScope.$on('$routeChangeError', function () {
//         $rootScope.loading = false;
//         alert("Lỗi, không tải được template !!!");
//     });
// });



