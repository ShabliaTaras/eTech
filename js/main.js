//Slick slider

$(".intro__slider").slick({
  arrows: false,
  dots: true,
  fade: true,
  autoplay: true,
  autoplaySpeed: 4000,
});

// Spoiler
$("._icon-arrow").on("click", function () {
  if ($(".join__list").hasClass("one")) {
    $("._icon-arrow").not($(this)).removeClass("active");
    $(".text-details").not($(this).prev()).slideUp(300);
  }
  $(this).toggleClass("active").prev().slideToggle(300);
});
