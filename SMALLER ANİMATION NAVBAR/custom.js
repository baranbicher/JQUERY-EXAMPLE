$(document).ready(function () {
  $(window).scroll(function () {
    //console.log("Çalıştı");
    var uzaklik = $(window).scrollTop();
    //console.log(uzaklik);
    if (uzaklik > 300) {
      $("#kontrol_et").removeClass("buyuk").addClass("kucuk");
    } else {
      $("#kontrol_et").removeClass("kucuk").addClass("buyuk");
    }
  });
});
