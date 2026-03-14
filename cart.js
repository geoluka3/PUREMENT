let cart = JSON.parse(localStorage.getItem('PUREMENT_CART')) || [];
const container = document.getElementById('cart-items-container');

function displayCart() {
    if (cart.length === 0) {
        // container.innerHTML = "            <h3 class="raimeh3cart">კალათა ცარიელია. <a href='menu.html'>მენიუში დაბრუნება</a></h3>";
        container.innerHTML = "            <p >კალათა ცარიელია. <a class='ararasras' href='menu.html'>მენიუში დაბრუნება</a></p>"
        updateTotals();
        return;
    }

    container.innerHTML = cart.map(item => `
        <div class="cart-item" style="display: flex; align-items: center; margin-bottom: 20px; border-bottom: 1px solid #eee; padding-bottom: 10px;">
            <img src="${item.thumbnail}" width="80" style="border-radius: 8px; margin-right: 15px;">
            <div style="flex-grow: 1;">
                <h4>${item.title}</h4>
                <p>${item.price}₾ x ${item.quantity}</p>
            </div>
            <button onclick="removeFromCart(${item.id})" style="background: #e40505; color: white; border: none; padding: 5px 10px; border-radius: 5px; cursor: pointer;">წაშლა</button>
            
        </div>
    `).join('');

    updateTotals();
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id != id);
    localStorage.setItem('PUREMENT_CART', JSON.stringify(cart));
    displayCart();
}

function updateTotals() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const service = subtotal * 0.1;
    const total = subtotal + service;

    document.getElementById('subtotal').innerText = subtotal.toFixed(2) + "₾";
    document.getElementById('service-fee').innerText = service.toFixed(2) + "₾";
    document.getElementById('grand-total').innerText = total.toFixed(2) + "₾";
}

displayCart();






const checkoutBtn = document.querySelector('.checkout-btn');
if(checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
        if(cart.length > 0) {
            window.location.href = 'payment.html';
        } else {
            alert("თქვენი კალათა ცარიელია!");
        }
    });
}