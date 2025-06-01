require('./db');
const Product = require('./product'); 

const newProduct = new Product({
  name: 'Banana',
  quantity: 25,
  price: 0.99,
  category: 'Fruit'
});

newProduct.save()
  .then (() => {
    console.log('Towar dodany do bazy danych!')
    process.exit();
  })
  .catch((err) =>{
    console.error('Pomyłka przy zapisywaniu towaru:', err.message);
    process.exit(1);
  });
 