// Lode Data
function lodeData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
}
// Lode User
function lodeUser(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(Data => displayUser(Data))
}
// Lode Albums
function lodeAlbums(){
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(res => res.json())
    .then(Data => console.log(Data))
}
function displayUser(Data){
    console.log(Data);
}