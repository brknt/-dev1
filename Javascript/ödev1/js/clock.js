let username = prompt("Adınız nedir?:");

let myName = document.querySelector('#myName');
myName.innerHTML = username;



function dateTime() {
    var date = new Date().toLocaleString('tr-TR');
    document.querySelector("#myClock").innerHTML = date;
  }

  setInterval(dateTime, 1000);