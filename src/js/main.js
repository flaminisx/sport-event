jQuery(function($){
    var body = $("body")
  var appendNumber = 4;
    var prependNumber = 1;
    var swiper = new Swiper('.swiper-container', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 4,
        centeredSlides: true,
        paginationClickable: true,
        spaceBetween: 20,
    });

    $(".information").on('click', function(event) {
        event.preventDefault();
        $(this).parent().parent().toggleClass('event2-item-b-open');
    });
    
    $(document).ready(function(){
        $('.datatable').DataTable({
             "dom": '<"title">ftp',
        });
    });

    // var body = $('body');
    // .registration.on('click', function(event) {
    //     event.preventDefault();
    //     body.addClass('re')
    // });

    $(".event .event-text .right .more").on('click', function(event) {
        event.preventDefault();
        $(this).parent().addClass('all-see')
    });

    // menu-list-tile
      var menuTileList = $(".menu-tile-list a");
      var menuTile = $("#menu-tile");
      var menuList = $("#menu-list");
      menuTileList.on('click', function(event) {
        event.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');
        var index = menuTileList.index($(this));
        if (index == 0) {
            menuTile.removeClass('open');
            menuList.addClass('open');
        } else {
            menuTile.addClass('open');
            menuList.removeClass('open');
        }
      });


      var seePage = $(".see-page");
    seePage.on('click', 'a', function(event) {
        event.preventDefault();
        $(".page-all").toggleClass('see-page-submenu-open');
    });


    $(".enter").on('click', function(event) {
        event.preventDefault();
        body.addClass('rigstration-popup-open');
    });
    $(".close-popup-enter").on('click', function(event) {
        event.preventDefault();
        body.removeClass('rigstration-popup-open');
    });
    $(".close-popup").on('click', function(event) {
        event.preventDefault();
        body.removeClass('rigstration-popup-open');
    });

    $(".member-see-content").on('click', function(event) {
        event.preventDefault();
        $(this).parent().toggleClass('open');
    });

});


$(document).ready(function(e) {

    if($(".news-full").length > 0) {


        $(document).on('scroll', function(event) {
        var $window = $(window);
        var $newsFullR = $('.news-full-r'); 
        var newsFullTop = $(".news-full").offset().top-118;
        var blockHeight = $(".news-full > .wrapper").height()+$(".news-full > .wrapper").offset().top;
        var windowTopV = $window.scrollTop();
          var windowTopV = $window.scrollTop();
          if(windowTopV > newsFullTop) $newsFullR.addClass("news-full-r-f-fixed");
          else  $newsFullR.removeClass('news-full-r-f-fixed').removeClass('bottabs-news');
          if(  windowTopV >= $(".news-full > .wrapper").height()-372) $newsFullR.addClass('bottabs-news').removeClass('news-full-r-f-fixed');

            
        });


    };
});

// $(document).ready(function(e) {
//     if($(".vacancies").length > 0) {


//         $(document).on('scroll', function(event) {
//         var $window = $(window);
//         var $vacanciesR = $('.vacancies-r'); 
//         var vacanciesTop = $(".vacancies").offset().top-118;
//         var blockHeight = $(".vacancies > .wrapper").height()+$(".vacancies > .wrapper").offset().top;
//         var windowTopV = $window.scrollTop();
//           var windowTopV = $window.scrollTop();
//           if(windowTopV > vacanciesTop) $vacanciesR.addClass("vacancies-r-f-fixed");
//           else  $vacanciesR.removeClass('vacancies-r-f-fixed').removeClass('bottabs');

//           if(  windowTopV >= $(".vacancies > .wrapper").height()+70 ) $vacanciesR.addClass('bottabs').removeClass('vacancies-r-f-fixed');
            
//         });


//     };
// });



$(document).ready(function(){

    /* Custom Select */
    $(".custom-select").each(function() {
        var classes = $(this).attr("class"),
            id      = $(this).attr("id"),
            name    = $(this).attr("name");
        var template =  '<div class="' + classes + '">';
        template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
        template += '<div class="custom-options">';
        $(this).find("option").each(function() {
            template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
        });
        template += '</div></div>';

        $(this).wrap('<div class="custom-select-wrapper"></div>');
        $(this).hide();
        $(this).after(template);
    });
    $(".custom-option:first-of-type").hover(function() {
        $(this).parents(".custom-options").addClass("option-hover");
    }, function() {
        $(this).parents(".custom-options").removeClass("option-hover");
    });
    $(".custom-select-trigger").on("click", function() {
        $('html').one('click',function() {
            $(".custom-select").removeClass("opened");
        });
        $(this).parents(".custom-select").toggleClass("opened");
        event.stopPropagation();
    });
    $(".custom-option").on("click", function() {
        //if($(this).data("value") != $(this).parents(".custom-select-wrapper").find("select").val()) 
        $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value")).trigger("change");
        $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
        $(this).addClass("selection");
        $(this).parents(".custom-select").removeClass("opened");
        $(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());
    });
    /* Custom Select */
});