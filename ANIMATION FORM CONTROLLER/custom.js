$(document).ready(function () {
  /*$("#k_adi").focus(function () {
    //$("#k_adi").css("background-color", "red");
    $("#k_adi").css({ "background-color": "red", color: "white" });
  });
  $("#k_adi").blur(function () {
    $("#k_adi").css({ "background-color": "", color: "" });
  });*/

  $("input").on({
    focus: function () {
      $(this).css({ "background-color": "red", color: "white" });
    },
    blur: function () {
      $(this).css({ "background-color": "", color: "" });
    },
  });
  $("#sifre").on("keydown", function () {
    // console.log("Basıldı");
    var uzunluk = $("#sifre").val().length + 1;
    // console.log(uzunluk);
    var durum = $("#durum");
    if (uzunluk <= 3) {
      durum.addClass("zayif");
      durum.removeClass("orta");
      durum.removeClass("guclu");
      durum.text("Şifre Zayıf");
    } else if (uzunluk > 3 && uzunluk <= 6) {
      durum.addClass("orta");
      durum.text("Şifre Orta");
      durum.removeClass("zayif");
      durum.removeClass("guclu");
    } else if (uzunluk > 6) {
      durum.addClass("guclu");
      durum.text("Şifre Güçlü");
      durum.removeClass("orta");
      durum.removeClass("zayif");
    }
  });

  $("#sifre_tekrar").on("keyup", function () {
    var sifre1 = $("#sifre").val();
    var sifre2 = $("#sifre_tekrar").val();
    if (sifre1 == sifre2) {
      $("#mesaj").text("Şifreler Uyuşuyor Tebrikler");
      $("#mesaj").addClass("goster");
    } else {
      $("#mesaj").text("Şifreler Uymuyor!!!");
      $("#mesaj").addClass("goster");
    }
  });

  $(".gecmis").focus(function () {
    $(".gecmis").animate({ height: "350px", width: "350px" });
  });
  $(".gecmis").blur(function () {
    $(".gecmis").animate({ height: "150px", width: "150px" });
  });
});
