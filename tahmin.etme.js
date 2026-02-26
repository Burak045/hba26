const tutulanSayi = Math.floor(Math.random() * 10) + 1;
let tahmin = 0;

while( tahmin !== tutulanSayi ){
  tahmin = Number(prompt("1-10 arası bir sayı giriniz:"));
if( tahmin < tutulanSayi){
  alert("Daha büyük bir sayı girin");
}
  else if(tahmin > tutulanSayi){
    alert("Daha küçük bir sayı giriniz");
}else{alert("Doğru Bildinnnnn");
}
}
