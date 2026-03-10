
const API_URL = 'https://699b3fc0377ac05ce28fdcc0.mockapi.io/menu';
const meoresdiv = document.querySelector('.meoresdiv');
const searchInput = document.getElementById('searchInput');

let allProducts = []; 


async function getData() {
    try {
        const resp = await fetch(API_URL);
        if (!resp.ok) throw new Error("Server Error");
        allProducts = await resp.json();
        generate(allProducts);
    } catch (error) {
        console.error("Error:", error);
    }
}


function generate(arr) {
    if (!meoresdiv) return;
    
    meoresdiv.innerHTML = arr.map(el => `
        <div class="food-card">
            <div class="card-image">
                <img src="${el.thumbnail}" alt="${el.title}">
                <span class="rating">${el.rating}</span>
            </div>
            <div class="card-content">
                <div class="card-header">
                    <h2 class="title">${el.title}</h2>
                    <span class="price">${el.price}₾</span>
                </div>
                <p class="ingredients">${el.ingredients || ''}</p>
                <button class="add-btn">Add to Order</button>
            </div>
        </div>
    `).join('') || "<h3>ვერაფერი მოიძებნა</h3>";
}


function handleSmartSearch() {
    const query = searchInput.value.toLowerCase().trim();
    
    
    if (!query) {
        generate(allProducts);
        return;
    }

    const filtered = allProducts.filter(el => {
        const titleMatch = el.title.toLowerCase().includes(query);
        const ingredientMatch = el.ingredients.toLowerCase().includes(query);
        
      
        const isNumeric = !isNaN(query);
        const priceMatch = isNumeric ? el.price == parseFloat(query) : false;

        return titleMatch || ingredientMatch || priceMatch;
    });

    generate(filtered);
}


searchInput.addEventListener('input', handleSmartSearch);

getData();

function togglemenu() {
    document.querySelector('nav')?.classList.toggle('openedmenu');
}


