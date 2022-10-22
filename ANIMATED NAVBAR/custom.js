$(document).ready(function () {
  $(window).scroll(function () {
    var mesafe = $(window).scrollTop();
    //console.log(mesafe);
    //var boyut = $(".resim").height();
    //var boyut = $(".resim").width();
    var boyut = $(".resim").outerHeight();
    //console.log(boyut);

    if (mesafe >= boyut) {
      $(".menu").addClass("fixed").slideDown(500);
    } else {
      $(".menu").removeClass("fixed");
      $(".menu").removeAttr("style");
    }
  });
});
