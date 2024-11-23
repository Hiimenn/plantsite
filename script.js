function openModal(title, price, image) {
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-price').textContent = price;
    document.getElementById('modal-image').src = image;
    document.getElementById('modal').style.display = 'flex';
  }

  function closeModal() {
    document.getElementById('modal').style.display = 'none';
  }

  function filterProducts() {
    const category = document.getElementById('category').value;
    const price = document.getElementById('price').value;
    const products = document.querySelectorAll('.product-card');

    products.forEach(product => {
      const productCategory = product.getAttribute('data-category');
      const productPrice = parseFloat(product.getAttribute('data-price'));
      let isCategoryMatch = category === 'all' || productCategory === category;
      let isPriceMatch = false;

      if (price === 'all') {
        isPriceMatch = true;
      } else if (price === 'low' && productPrice < 50) {
        isPriceMatch = true;
      } else if (price === 'medium' && productPrice >= 50 && productPrice <= 100) {
        isPriceMatch = true;
      } else if (price === 'high' && productPrice > 100) {
        isPriceMatch = true;
      }

      if (isCategoryMatch && isPriceMatch) {
        product.style.display = '';
      } else {
        product.style.display = 'none';
      }
    });
  }