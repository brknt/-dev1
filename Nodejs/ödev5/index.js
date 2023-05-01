// Kendi Web Sunucumuzu yazalım.
// Kendi bilgisayarımızda aşağıdaki özellikleri kullanarak sunucumuzu yazalım.

// createServer metodunu kullanacağız.
// index, hakkimda ve iletisim sayfaları oluşturalım.
// Sayfalara içerik olarak xxx sayfasına hoşgeldiniz şeklinde h2 başlıkları yazdıralım.
// port numarası olarak 5000'i kullanalım.
// Kolay gelsin.

const http = require('http');


const server = http.createServer((req, res) => {

    const url = req.url;

    if(url === '/index'){
        res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
        res.write(`<h2>${url.slice(1)} sayfasına hoşgeldiniz</h2>`);
    }
    else if(url === '/hakkimda'){
        console.log(url);
        res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
        res.write(`<h2>${url.slice(1)} sayfasına hoşgeldiniz</h2>`);
    }
    else if(url === '/iletisim'){
        res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
        res.write(`<h2>${url.slice(1)} sayfasına hoşgeldiniz</h2>`);
    }
    else{
        res.writeHead(404,{'Content-Type':'text/html; charset=utf-8'});
        res.write(`<h2>404 sayfa bulunamadı.</h2>`);
    }

    res.end();
});


const port = 5001;//5000 portu kullanıldığı için 5001 portunu kullandım.
server.listen(port, () => {
    console.log(`Server ${port} portunda başlatıldı...`);

});