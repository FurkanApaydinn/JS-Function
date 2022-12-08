"use strict";
// let ehliyetvarmı = false;
// const testigeçti = true;

// if (testigeçti) ehliyetvarmı = true;

// if (ehliyetvarmı) console.log("araba kullanabiliyorum");

//-------------------functions-----------------------------------------//

// function logger() {
//   console.log("Benim adım murat");
// }

// //calling/running/invaking function
// logger();
// logger();
// function meyveişleme(elmalar, portakallar) {
//   console.log(elmalar, portakallar);
//   const meyvesuyu = `${elmalar} elma ve ${portakallar} portakal`;
//   return meyvesuyu;
// }

// const elmasuyu = meyveişleme(5, 0);
// console.log(elmasuyu);
// console.log(meyveişleme(5, 0));

// const elmaportakalsuyu = meyveişleme(2, 4);
// console.log(elmaportakalsuyu);
// dry---> dont repeat yourself ---- kendini tekrar etme

// function ülkenitanımla(ülke, nüfus, başkent) {
//   const ulkebilgi = `${ülke}'da ${nüfus} milyon insan var ve başkenti ${başkent}`;
//   return ulkebilgi;
// }
// const finlandiyatanımı = ülkenitanımla("Finlandiya", 6, "helsinki");
// console.log(finlandiyatanımı);
// const portekiztanımı = ülkenitanımla("Portekiz", 6, "Lizbon");
// console.log(portekiztanımı);
// const almanyatanımı = ülkenitanımla("Almanya", 6, "Berlin");
// console.log(almanyatanımı);

//function declaration & expression
//declaration
// function yaşhesap(doğumyılı) {
//   return 2040 - doğumyılı;
// }
// const yaş1 = yaşhesap(1986);
// console.log(yaş1);

// //expression
// const yaşhesap2 = function (doğumyılı) {
//   return 2040 - doğumyılı;
// };
// const yaş2 = yaşhesap2(1986);
// console.log(yaş1, yaş2);

// function dünyanınyüzdesiyıl(popülasyon) {
//   const declaration = (popülasyon / 7900) * 100;
//   return declaration;
// }
// const türkiyeyüzde = dünyanınyüzdesiyıl(350000);
// console.log(türkiyeyüzde);
// const almanyayüzde = dünyanınyüzdesiyıl(700000);
// console.log(almanyayüzde);
// const amerikayüzde = dünyanınyüzdesiyıl(440000);
// console.log(amerikayüzde);

// const yaşhesap2 = function (doğumyılı) {
//   return 2040 - doğumyılı;
// };
// // Arrow Function

// const yaşhesap3 = (doğumyılı) => 2040 - doğumyılı;
// const yaş3 = yaşhesap3(1986);
// console.log(yaş3);

// const emekliliğekalansüre = (doğumyılı, ad) => {
//   const yaş = 2040 - doğumyılı;
//   const emeklilik = 65 - yaş;
//   //   return emeklilik;
//   return `${ad} ${emeklilik} yıl içerisinde emekli oluyor`;
// };

// console.log(emekliliğekalansüre(1986, "Murat"));
// console.log(emekliliğekalansüre(1992, "Furkan"));

// function dünyanınyüzdesiyıl(popülasyon) {
//   const declaration = (popülasyon / 7900) * 100;
//   return declaration;
// }
// const türkiyeyüzde = dünyanınyüzdesiyıl(350000);
// console.log(türkiyeyüzde);
// const almanyayüzde = dünyanınyüzdesiyıl(700000);
// console.log(almanyayüzde);
// const amerikayüzde = dünyanınyüzdesiyıl(440000);
// console.log(amerikayüzde);

// const dünyanınyüzdesiyıl3 = (popülasyon) => (popülasyon / 7900) * 100;
// const yüzde = dünyanınyüzdesiyıl3(8900000);
// console.log(yüzde);

// "// function dünyanınyüzdesiyıl4(popülasyon) {
// //   const hesaplama = (popülasyon / 79000) * 100;
// //   return hesaplama;
// // }
// // const yazdir = dünyanınyüzdesiyıl4(850000);
// // console.log(yazdir);

//functions calling other functions

// function meyveleriparçala(meyve, adet) {
//   return meyve === "almalar" ? adet * 4 : adet * 3;
// }

// function meyveişleme(elmalar, portakallar) {
//   const elmaparçaları = meyveleriparçala("elmalar", elmalar);
//   const portakalparçaları = meyveleriparçala("Portakallar", portakallar);
//   const meyvesuyu = `${elmaparçaları} elma ve ${portakalparçaları} portakal`;
//   return meyvesuyu;
// }
// console.log(meyveişleme(2, 3));

// const toplama = (a, b) => a + b;
// const çıkarma = (a, b) => a - b;
// const çarpma = (a, b) => a * b;
// const bölme = (a, b) => a / b;

// const hesapmakinası = function (sayı1, sayı2, işlem) {
//   return işlem(sayı1, sayı2);
// };
// const ekle = hesapmakinası(10, 3, toplama);
// const çıkar = hesapmakinası(10, 3, çıkarma);
// console.log(`toplam ${ekle}`);
// console.log(`toplam ${çıkar}`);

// function nüfusutanımla(ülke, nüfus) {
//   return `${ülke}'da ${nüfus} milyon insan var, ki bu dünyanın yaklaşık ${dünyanınyüzdesiyıl(
//     nüfus
//   )}sidir`;
// }
// console.log(nüfusutanımla("Türkiye", 8500000));
// console.log(nüfusutanımla("Almanya", 10000000));
// console.log(nüfusutanımla("İspanya", 120000000));

// const hesapmakinası = function (a, b) {
//   const toplam = a + b;
//   return `${a}+${b}=${a + b}`;
// };
// const cevap = hesapmakinası(1, 3);
// console.log(cevap);

const hesapmakinası = function (a, b) {
  const toplam = a + b;
  return true;
};
const cevap = hesapmakinası(1, 3);
console.log(cevap);

const rabbit={color:"Beyaz",checkWatch(){
  console.log(`${this.color} bir tavşan saatinin kontrol ediyor ve geciktimi diye bağırıyor.`);
 
}
};

//challange
rabbit.checkWatch();

const spaceship={
  name:"kayanyıldızı",launch(){
    // alert(`Uzay gemisine hoş geldiniz. ${this.name}`)
  }
};
spaceship.launch();

//3 - Chart
const cart={
  contents:"",
  addItem(item){
    this.contents=item;
  }
};
cart.addItem("telefon");
console.log( "ürünler",cart.contents);

const aile={isim:"furkan",soyisim:"Apaydın",boy:1.69,kilo:72, aileTanimlama(){
  console.log(`${this.isim} Bey hoşgeldiniz. Boyunuz:${this.boy} ve kilonuz:${this.kilo}'kd dır'`)
  
  
}
};
aile.aileTanimlama();


