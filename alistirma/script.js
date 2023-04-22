
const kisiler = [
    {id: 1, adi: 'Ahmet', soyadi: 'Yüksekseslekonuşma', yas: 15, cinsiyet: 'Erkek', unvan: 'Öğrenci', puan: 65},
    {id: 2, adi: 'Sultan', soyadi: 'Hayvanlarısev', yas: 32, cinsiyet: 'Kadın', unvan: 'Öğretmen', puan: 75},
    {id: 3, adi: 'Hatiçe', soyadi: 'Çimenlerebasma', yas: 26, cinsiyet: 'Kadın', unvan: 'Doktor', puan: 85},
    {id: 4, adi: 'Ali', soyadi: 'Yerleretükürme', yas: 26, cinsiyet: 'Erkek', unvan: 'İşçi', puan: 75},
    {id: 4, adi: 'Kamuran', soyadi: 'Kurallarauy', yas: 52, cinsiyet: 'Kadın', unvan: 'Hemşire', puan: 95}
  ];
  
  const min = kisiler.reduce((x, y) => x < y.puan? x: y.puan, +Infinity),
        max = kisiler.reduce((x, y) => x > y.puan? x: y.puan, -Infinity);
  
  console.log("min:" +min, "max:"+max)