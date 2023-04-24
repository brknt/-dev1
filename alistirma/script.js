//// GET İsteği
fetch("https://jsonplaceholder.typicode.com/todos")
	.then((response) => response.json()) //parse json data
	.then(function (todos) {
    console.log(todos);
    
		todos.forEach((todo) => {
			console.log(`title: `,todo.title); //Başlıkları console' a yazdırma
		});
	});