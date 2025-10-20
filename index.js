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


app.get('/API/users', (req, res) => {
  db.query('SELECT * FROM mahasiswa', (err, results) => {
    if (err) {
        console.error('Error executing query:0' + err.stack);
        res.status(500).send('Error fetching users');
        return;
    }
    res.json(results);
  });
});

