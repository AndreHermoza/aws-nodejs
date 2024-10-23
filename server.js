const express = require ('express');
const app = express();

app.get('/', (req, res) => res.send('Hola mundo con Express'))


app.listen(3000);
console.log('Server located on port 3000')