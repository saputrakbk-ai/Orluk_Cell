
const products = [
    {
        name: "iPhone 15 Pro",
        category: "Apple Smartphone",
        price: 15999000,
        image: "https://images.unsplash.com/photo-1696446701796-da61225697cc?w=600"
    },
    {
        name: "Samsung Galaxy",
        category: "Samsung Smartphone",
        price: 8999000,
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600"
    },
    {
        name: "Xiaomi Redmi",
        category: "Xiaomi Smartphone",
        price: 2999000,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600"
    },
    {
        name: "OPPO Smartphone",
        category: "OPPO Smartphone",
        price: 3999000,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600"
    },
    {
        name: "Vivo Smartphone",
        category: "Vivo Smartphone",
        price: 3499000,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600"
    },
    {
        name: "HP Accessories",
        category: "Aksesoris Smartphone",
        price: 199000,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600"
    }
];

const productList = document.getElementById("product-list");

products.forEach((product, index) => {
    productList.innerHTML += `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.category}</p>
                <div class="price">
                    Rp ${product.price.toLocaleString("id-ID")}
                </div>
                <button onclick="buyProduct(${index})">
                    Beli Sekarang
                </button>
            </div>
        </div>
    `;
});

function buyProduct(index) {
    const product = products[index];

    const message = `Halo ORLUX MOBILE, saya ingin membeli:
${product.name}
Harga: Rp ${product.price.toLocaleString("id-ID")}`;

    const phone = "6282362115107";

    window.open(
        `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
        "_blank"
    );
}

// Formulir pemesanan servis
document.getElementById("serviceForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const nama = document.getElementById("nama").value;
    const telepon = document.getElementById("telepon").value;
    const merk = document.getElementById("merk").value;
    const kerusakan = document.getElementById("kerusakan").value;
    const keluhan = document.getElementById("keluhan").value;

    const message = `PEMESANAN SERVIS ORLUX MOBILE SOLUTIONS 

Nama: ${nama}
Nomor HP: ${telepon}
Merek HP: ${merk}
Kerusakan: ${kerusakan}
Keluhan: ${keluhan}

Mohon informasi lebih lanjut mengenai servis HP saya.`;

    const phone = "6285856375784";

    window.open(
        `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
        "_blank"
    );
});
