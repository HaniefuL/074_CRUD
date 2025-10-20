const express = require('express');
let mysql = require('mysql');
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => { 
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'b3RSYUKUR',
  database: 'mahasiswa',
  port: 3306
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to Mysql:'+ err.stack);
    return;
  }
    console.log('Connected to successfully');
});

// dibuat Method GET dan POST

//GET

app.get('/API/users', (req, res) => {
  let sql = 'SELECT * FROM mahasiswa', (err, results) => {
    if (err) throw err;
  }        
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});