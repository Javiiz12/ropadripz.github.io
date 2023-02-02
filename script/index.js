const input = document.querySelector('input[type="search"]');
const products = document.querySelectorAll('.product');

products.forEach(product => {
  product.addEventListener("mouseover", function() {
    product.style.transform = "scale(1.2)";
  });
});

products.forEach(product => {
  product.addEventListener("mouseout", function() {
    product.style.transform = "scale(1)";
  });
});

input.addEventListener('keyup', function() {
  const searchTerm = this.value.toLowerCase();

  products.forEach(function(product) {
    const title = product.querySelector('h2').textContent.toLowerCase();

    if (title.indexOf(searchTerm) !== -1) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
});