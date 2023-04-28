// FS File System Modülü
// Node.js FS Modülü kullanarak CRUD işlemleri yapacağız.
// employees.json dosyası oluşturalım ve içerisine {"name": "Employee 1 Name", "salary": 2000} verisini ekleyelim. (CREATE)
// Bu veriyi okuyalım. (READ)
// Bu veriyi güncelleyelim.
// Dosyayı silelim.




const fs = require('fs');


// Create and write file:
let jsonText = '{"name":"Employee 1 Name", "salary":2000}'
fs.writeFile('employees.json', jsonText, (err) => {
    if(err) console.log(err);
    console.log('Dosya oluşturuldu ve yazıldı.');
});

// Read file:
fs.readFile('employees.json', 'utf8', (err, data) => {
    if(err) console.log(err);
    console.log('Dosya okundu');
    console.log(data);    
});


// Update file:
let updateMessage = '{"name":"Employee update Name", "salary":2000}'
fs.appendFile('./employees.json', updateMessage, 'utf8', (err) => {
    if(err) console.log(err);
    console.log('Dosya güncellendi.');
});

// Delete file

fs.unlink('employees.json', (err) => {
    if(err) console.log(err);
    console.log('Dosya silindi.');
});