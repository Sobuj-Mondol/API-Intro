const searchFild = () => {
    const searchFild = document.getElementById('search-fild');
    const searchText = searchFild.value;
    // console.log(searchText);
    searchFild.value ='';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}
    `;
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data.meals));
}