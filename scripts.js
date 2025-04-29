const validIDs = {
  'gta5': 'gta5',
  'scd1': 'scd1',
};

let selectedProductId = null;

document.querySelectorAll('.redeem-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    selectedProductId = btn.getAttribute('data-product-id');
    document.getElementById('popup').classList.remove('hidden');
  });
});

function closePopup() {
  document.getElementById('popup').classList.add('hidden');
  document.getElementById('purchaseIdInput').value = '';
}

function submitID() {
  const inputId = document.getElementById('purchaseIdInput').value.trim();

  if (validIDs[inputId] === selectedProductId) {
    // Hapus ID setelah digunakan
    delete validIDs[inputId];
    window.location.href = `HALAMAN PRODUK/${selectedProductId}.html`;
  } else {
    alert("ID salah atau tidak sesuai dengan produk.");
  }
}

const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('input', () => {
  const keyword = searchInput.value.toLowerCase();
  const products = document.querySelectorAll('.product-card');

  products.forEach(product => {
    const title = product.querySelector('h3').textContent.toLowerCase();
    product.style.display = title.includes(keyword) ? 'block' : 'none';
  });
});

