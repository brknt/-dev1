// Ödev 1
// Node.JS Komut Satırı Kullanımı
// Hepimizin Matematik derslerinden bildiği üzere 
// Dairenin Alanı = π x r2 şeklinde hesaplanır. 
// Node.JS Javascript çalışma ortamında yarıçap değerini konsoldan parametre olarak girerek alanı bulmaya çalışacağız.
// Konsol çıktısı: Yarıçapı (Yarıçap) olan dairenin alanı: (Alan) şeklinde olmalıdır.


const CalcArea = (radius) => {return Math.PI * (radius*radius);}
let arguments = process.argv.slice(2);
console.log(`Yarıçapı ${arguments[0]*1} olan dairenin alanı: `,CalcArea(arguments[0]*1));


