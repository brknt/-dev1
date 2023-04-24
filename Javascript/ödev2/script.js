let form = document.querySelector('#form');
let task = document.querySelector('#task');
let ulDOM = document.getElementById('list');


let successBtn = document.querySelector('#successBtn');
let warningBtn = document.querySelector('#warningBtn');

form.addEventListener('submit',formSubmit)

function formSubmit(event){
    event.preventDefault();
}
getStorage();

function getStorage() {console.log('111');

    list.innerHTML = localStorage.getItem("task")

}


function newElement(){
    if(task.value === ""){
        warningToast();
    }else{
        let liDOM = document.createElement('li');
        liDOM.innerHTML = task.value;
        ulDOM.append(liDOM);
        console.log('bbbbbb');
        let xBtn = document.createElement("button");
        xBtn.innerHTML = "x"
        xBtn.classList.add('close');
        liDOM.appendChild(xBtn)
        successToast();
        
    }
    task.value = ""
    addLocalStorage()

}



function addLocalStorage() {
    localStorage.setItem("task", list.innerHTML)
}

ulDOM.addEventListener('click', function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        addLocalStorage()
    } else if (e.target.tagName === "BUTTON") {
        e.target.parentElement.remove();
        addLocalStorage()
    }
}, false);


const successToast = () => {
    let success = new bootstrap.Toast(successBtn);
    success.show()
}
const warningToast = () => {
    let warning = new bootstrap.Toast(warningBtn)
    warning.show()
}