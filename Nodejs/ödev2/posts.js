
const posts = [
    {id:1,title:"post1",body:"post1 body"},
    {id:2,title:"post2",body:"post2 body"},
    {id:3,title:"post3",body:"post3 body"},
    {id:4,title:"post4",body:"post4 body"}
];

const listPost = () => {
    posts.map((post) => console.log(post));
}

const addPost = (newPost) => {
    posts.push(newPost);
}

const showPosts = async() => {

    try {
        await addPost({ id: 5, title: "post5", body: "post5 body" });
        listPost();
        
    } catch (error) {
        console.log(error);
        
    }
  
}

showPosts();