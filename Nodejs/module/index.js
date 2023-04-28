const fs = require('fs');


// read file:

// fs.readFile('./password.txt', 'utf8',(err,data) => {
//     if(err) console.log(err);
//     console.log(data);
//     console.log('Dosya okundu.');
// });

// // write file
// let message = 'Hello world';
// fs.writeFile('example.txt', message, 'utf8', (err) =>{
//     if(err) console.log(err);
//     console.log('Json dosya başarılı bir şekilde oluşturuldu.');
// });

// // add data to file

// fs.appendFile('example.txt','\nHello world2','utf8',(err) => {
//     if(err) console.log(err);
//     console.log('Yeni veri eklendi');
    
    
// });



// // delete file

// fs.unlink('example.txt',(err) => {
//     if(err) console.log(err);
//     console.log('dosya silindi.');
// });


// // create directorys

// fs.mkdir('uploads/img',{recursive:true},(err) =>{ // recursive parametresi iki dosya oluştururken ilkinide oluşturmaya yarar.
//     if(err) console.log(err);
//     console.log('klasör oluşturulur.');
// });

// delete directorys

// fs.rmdir('uploads',{recursive:true},(err) =>{
//     if(err) console.log(err);
//     console.log('klasörler silindi.');
// });


