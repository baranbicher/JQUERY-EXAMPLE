$(document).ready(function(){
  $("textarea").keyup(function(){
    var maksimum = 100;
    var x = $("textarea").val().length;
    //console.log(x);
    var yaz = maksimum - x;
    $(".karakter").text(yaz);


  });

});

