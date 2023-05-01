// Koa.js ile web sunucumuzu yazalım.
// Öncelikle şunu belirteyim. Koa.js hakkında konuşmadığımızı biliyorum ve bu ödev ilk aşamada bizi zorlayacak. Buradaki amacım yeni bir teknolojiye başlama cesareti oluşturmak ve hata yapma özgürlüğümüz olduğunu göstermek.

// koa paketini indirelim.
// index, hakkimda ve iletisim sayfaları oluşturalım.
// Sayfalara içerik olarak xxx sayfasına hoşgeldiniz şeklinde h1 başlıkları yazdıralım.
// port numarası olarak 3000'i kullanalım.


const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router.get("/index", async (ctx, next) => {
    const message = `<h1>index sayfasına hoşgeldiniz</h1>`;
    ctx.status = 200;
    ctx.body = message;
});
router.get("/hakkimda", async (ctx, next) => {
    const message = `<h1>hakkimda sayfasına hoşgeldiniz</h1>`;
    ctx.status = 200;
    ctx.body = message;
});
router.get("/iletisim", async (ctx, next) => {
    const message = `<h1>iletisim sayfasına hoşgeldiniz</h1>`;
    ctx.status = 200;
    ctx.body = message;
});
router.get("/(.*)", async (ctx, next) => {
    const message = `<h1>404 SAYFA BULUNAMADI</h1>`;
    ctx.status = 404;
    ctx.body = message;
});
app
    .use(router.routes())
    .use(router.allowedMethods());


const port = 3000;
app.listen(port,()=>{
    console.log(`Server ${port} portunda başlatıldı...`);
    
});

