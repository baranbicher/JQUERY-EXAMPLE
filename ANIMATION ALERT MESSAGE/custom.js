$(document).ready(function () {
  $(".kaydet").click(function () {
    // console.log("Kaydet Butonuna Tıklandı...");
    mesaj_goster("Kaydetme İşlemi Başarılı");
  });
  $(".guncelle").click(function () {
    // console.log("Güncelle Butonuna Tıklandı...");
    mesaj_goster("Güncelleme İşlemi Başarılı");
  });
  $(".sil").click(function () {
    // console.log("Sil Butonuna Tıklandı...");
    mesaj_goster("Silme İşlemi Başarılı");
  });
  function mesaj_goster(veri) {
    // console.log("Parametresiz Fonksiyon");
    // console.log(veri);
    $(".mesaj").html(veri).slideDown(1000).delay(2000).slideUp(1000);
  }
});
