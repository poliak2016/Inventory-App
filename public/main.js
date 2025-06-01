
    const API_URL = 'http://localhost:5000/api/products';
    const form = document.getElementById('productForm');
    const productList = document.getElementById('productList');

    async function loadProducts() {
      productList.innerHTML = '';
      const res = await fetch(API_URL);
      const products = await res.json();

      products.forEach(p => {
        const li = document.createElement('li');
        li.innerHTML = `
          <strong>${p.name}</strong> (${p.quantity}) - $${p.price}
          <button onclick="deleteProduct('${p._id}')">❌</button>
        `;
        productList.appendChild(li);
      });
    }
// edit part start
    async function editProduct(id, name, quantity, price) {
      const newName = prompt("Nowa nazwa", name);
      if (newName === null) return;

      const newQuantity = prompt("Nowa ilość:", quantity);
      const newPrice = prompt("Nowa cena:", price);

      const updateData = {
        name: newName,
        quantity: Number(newQuantity),
        price: Number(newPrice)
      };

      await fetch (`${API_URL}/${id}`, {
        method: 'PUT', 
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(updateData)
      });

      loadProducts();
    } 
    // edit part end

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const formData = new FormData(form);
      const product = {
        name: formData.get('name'),
        quantity: Number(formData.get('quantity')),
        price: Number(formData.get('price')),
        category: formData.get('category')
      };

      await fetch (API_URL, {
        method: 'POST',
        headers: {'Content-Type':  'application/json'},
        body: JSON.stringify(product)
      });

      form.reset();
      loadProducts();
    });

     loadProducts();

     async function deleteProduct(id) {
  // Zapytaj użytkownika o potwierdzenie usunięcia
  const confirmDelete = confirm("Czy na pewno chcesz usunąć produkt?");
  if (!confirmDelete) return;

  // Wyślij żądanie DELETE do API
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE'
  });

  // Jeśli usunięcie się powiodło, odśwież listę produktów
  if (res.ok) {
    loadProducts();
  } else {
    alert("Nie udało się usunąć produktu");
  }
}
