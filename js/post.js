function postLode(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(Data => displayPost(Data))
}
// function call
function displayPost(Datas){
    let postContainer =  document.getElementById('posts');
    for(let Data of Datas){
        let div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML = `
        <h3> Title: ${Data.title} </h3>
        <p>Body: ${Data.body} </p>
        `;
        postContainer.appendChild(div);
        console.log(Data);
    }
}