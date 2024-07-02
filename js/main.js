const table = document.querySelector(".table")
const tbody = document.querySelector(".tbody")
const selectName = document.querySelector(".select__name")
const category = document.querySelector(".products__category")
const categoryItem = document.querySelector(".category__item")

async function getData() {
    const url = "https://dummyjson.com/products"
    const response = await fetch(url, {
        method: "GET"
    })
    
    response.json()
    .then(res => {
        getProductsData(res.products)
    })
    .catch(err => console.log(err))
}
getData()

async function getCategoryData() {
    const url = "https://dummyjson.com/products/category-list"
    const response = await fetch(url, {
        method: "GET"
    })

    response.json()
    .then(res => {
        getCategory(res)
    })
    .catch(err => console.log(err))
}
getCategoryData( )

function getProductsData(data) {
    let newData = ''
    data.forEach(el => {
        newData += `
        <tr>
        <td>${el.title}</td>
        <td>${el.category}</td>
        <td>${el.price}</td>
        <td>${el.rating}</td>
        <td>${el.stock}</td>   
        </tr>
        `
    });
    tbody.innerHTML = newData
}


function getCategory(data) {
    let newData = `<data class="category__item" value="all">All</data>`
    data.forEach(el => {
        newData += `
        <data class="category__item" value="${el}">${el}</data>
        `
    })
    category.innerHTML = newData
    
}


categoryItem.addEventListener("click", (e)=> {
    console.log(e.target.value);
})

console.log(categoryItem);