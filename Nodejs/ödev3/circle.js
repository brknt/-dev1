// Ödev 3
// Daire Modüler Dosyası
// Daire alan : circleArea ve daire çevre : circleCircumference fonksiyonları içeren ve consola sonuçları yazdıran circle.js dosyası oluşturunuz.
// module.exports yöntemi ile fonksiyonları oluştururken export ediniz.
// require ve object destructing kullanarak index.js dosyasında yarıçap (r) 5 olacak şekilde ekran çıktısını alınız.
// Kolay gelsin.


const circleArea = (radius) => console.log(Math.PI*radius*radius);
const circleCircumference = (radius) => console.log(2*Math.PI*radius);

module.exports = {
    circleArea,
    circleCircumference
}

