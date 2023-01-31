// Selecciona todos los productos
const products = document.querySelectorAll(".product");

// Agrega un evento de mouseover a cada producto
products.forEach(product => {
  product.addEventListener("mouseover", function() {
    // Aumenta el tamaño del producto en un 20%
    product.style.transform = "scale(1.2)";
  });
});

// Agrega un evento de mouseout a cada producto
products.forEach(product => {
  product.addEventListener("mouseout", function() {
    // Regresa el tamaño del producto a su tamaño original
    product.style.transform = "scale(1)";
  });
});