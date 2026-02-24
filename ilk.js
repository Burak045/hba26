// Hüseyin Burak Aşık 
const cinsiyetler = ['erkek', 'kadın'];
const cinsiyet = cinsiyetler[Math.floor(Math.random() * cinsiyetler.length)];

const saat =  Math.floor(Math.random() * 24);


let mesaj = "";

if( saat < 6 ){
  mesaj = "İyi geceler";
}else if (saat >=6 && saat < 12) {
  mesaj = "Günaydın";
}else if ( saat >= 12 && saat < 18) {
  mesaj =  "İyi günler";
}else{
  mesaj = "İyi akşamlar";
}
 
 if( cinsiyet == "erkek") {
  mesaj =  mesaj + " bayım";
} else {
   mesaj = mesaj +  " hanımefendi";
}

console.log("Cinsiyet:", cinsiyet, "Saat:", saat);
console.log(mesaj);

// yukarıdaki if ifadesini burada üçlü ifade ile tekrar yazdık
mesaj += (cinsiyet == "erkek") ? "bayım" : "hanım";
console.log(mesaj);
