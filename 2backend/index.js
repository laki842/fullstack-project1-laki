const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const exp = express();
// without cors there is an error in chrome
exp.use(cors())
exp.use(express.json());

// setting server port
exp.listen(4000, () => {
  console.log('Signal');
});

// explaining database info to node
const database = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: 'password',
  database: 'Spaceship_data',
});

// check if database is ok
database.connect(function (err) {
  if (err) {
    return console.error('error:' + err.message);
  }
  console.log('Database connected.');
});

// fetching data from sql for new types
exp.get('/type1', (req, res) => {
  // query for sql
  database.query(
    'SELECT * FROM Spaceship_data.spaceship_main WHERE state = "new"',
    (err, result) => {
      // if there is any error do this
      if (err) {
        console.log(err);
        // if there is no error do that
      } else {
        // result is our desired data
        res.send(result);
      }
    }
  );
});
// fetching data from sql for used types
exp.get('/type2', (req, res) => {
  database.query(
    'SELECT * FROM Spaceship_data.spaceship_main WHERE state = "used"',
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
// fetching data from sql for expensive types
exp.get('/type3', (req, res) => {
  database.query(
    'SELECT  * FROM Spaceship_data.spaceship_main WHERE price > 2000000;',
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
// fetching data from sql for cheap types
exp.get('/type4', (req, res) => {
  database.query(
    'SELECT  * FROM Spaceship_data.spaceship_main WHERE price < 2000000;',
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
// fetching data from sql for all types in ascending order
exp.get('/type5', (req, res) => {
  database.query(
    'SELECT * FROM Spaceship_data.spaceship_main ORDER BY price ASC',
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
// fetching data from sql for all types in descending order
exp.get('/type6', (req, res) => {
  database.query(
    'SELECT * FROM Spaceship_data.spaceship_main ORDER BY price DESC',
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
