const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/inventory', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Pomyłka łączenia z MongoDB:'));

db.once('open', () => {
  console.log('Połaczono z MongoDB' )
});

