async function loadUsers() {
    const container = document.getElementById("users");

    try {
        const response = await fetch("http://localhost:5001/users");
        const data = await response.json();

        container.innerHTML = "";

        data.users.forEach(user => {
            container.innerHTML += `
                <div class="data">
                    <strong>ID:</strong> ${user.id}<br>
                    <strong>Name:</strong> ${user.name}
                </div>
            `;
        });

    } catch (error) {
        container.innerHTML = "Unable to connect to User Service.";
    }
}


async function loadProducts() {
    const container = document.getElementById("products");

    try {
        const response = await fetch("http://localhost:5002/products");
        const data = await response.json();

        container.innerHTML = "";

        data.products.forEach(product => {
            container.innerHTML += `
                <div class="data">
                    <strong>ID:</strong> ${product.id}<br>
                    <strong>Product:</strong> ${product.name}<br>
                    <strong>Price:</strong> ₹${product.price}
                </div>
            `;
        });

    } catch (error) {
        container.innerHTML = "Unable to connect to Product Service.";
    }
}


async function loadOrders() {
    const container = document.getElementById("orders");

    try {
        const response = await fetch("http://localhost:5003/orders");
        const data = await response.json();

        container.innerHTML = "";

        data.orders.forEach(order => {
            container.innerHTML += `
                <div class="data">
                    <strong>Order ID:</strong> ${order.id}<br>
                    <strong>User ID:</strong> ${order.user_id}<br>
                    <strong>Product ID:</strong> ${order.product_id}<br>
                    <strong>Status:</strong> ${order.status}
                </div>
            `;
        });

    } catch (error) {
        container.innerHTML = "Unable to connect to Order Service.";
    }
}