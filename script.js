function openModal(title, price, image, description) {
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-price').textContent = price;
  document.getElementById('modal-image').src = image;
  document.getElementById('modal-description').textContent = description; // Set the description
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
  // Поиск
const searchInput = document.querySelector('.search-bar input');
const searchButton = document.querySelector('.search-bar button');

searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.trim().toLowerCase();
    if (searchTerm) {
        // Здесь будет логика поиска
        console.log('Поиск:', searchTerm);
    }
});

// Плавная прокрутка для навигации
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Анимация появления карточек с травами
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.herb-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s, transform 0.5s';
    observer.observe(card);
});
