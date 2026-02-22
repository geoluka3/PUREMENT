
function togglemenu(){
    document.querySelector('nav').classList.toggle('openedmenu')
}


const API_URL = 'https://699b3fc0377ac05ce28fdcc0.mockapi.io/menu'

const meoresdiv = document.querySelector('.meoresdiv')

async function getData() {
    try {
        const resp = await fetch(API_URL)
        const data = await resp.json()
        generate(data)
    } catch (error) {
        console.log(error);
    }
}

getData()

function generate(arr) {

    let content = ""   // create empty string

    arr.forEach(el => {
        content += `
       <div class="food-card">
  <div class="card-image">
    <img src="${el.thumbnail}" alt="Margherita Pizza">
    <span class="rating">${el.rating}</span>
  </div>
  
  <div class="card-content">
    <div class="card-header">
      <h2 class="title">${el.title}</h2>
      <span class="price">${el.price}₾</span>
    </div>
    <p class="ingredients">${el.ingredients}</p>
    <button class="add-btn">Add to Order</button>
  </div>
</div>
        `
    });

    meoresdiv.innerHTML = content   // put everything on screen
}