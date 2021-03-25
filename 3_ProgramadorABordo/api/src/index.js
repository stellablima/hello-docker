const express = require('express');
const mysql = require('mysql');

const app = express();

const connection = mysql.createConnection({
    host: 'mysql-container', //'172.17.0.2',
    user: 'root',
    password: 'admin',
    database: 'programadorabordo'
});


app.get('/products', (req, res)=>{
    connection.query('SELECT * FROM products', (error, results)=>{
        if(error) throw error;

        res.send(results.map(item => ({name:item.name, price:item.price})))
    });

})

app.listen(9001, '0.0.0.0', function(){
    console.log('Listen on PORT 9001');
})