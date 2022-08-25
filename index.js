const express = require('express');
const mysql = require('mysql');
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  user: "sql6514990",
  host: "sql6514990",
  password: "83DkLNb1H9",
  database: "ceritakopiin"
});

app.post('/register', (req, res)=>{
  const tanggal = req.body.tanggal;
  const namalengkap = req.body.namalengkap;
  const GA = req.body.GA;
  const CB = req.body.CB;
  const RV = req.body.RV;
  const nowa = req.body.nowa;
  const alamat = req.body.alamat;
  const catatan = req.body.catatan;
  const harga = req.body.harga;
  const statusnya = req.body.statusnya;

  db.query("INSERT INTO pelanggan (tanggal, namalengkap, GA, CB, RV, nowa, alamat, catatan, harga, statusnya) VALUES (?,?,?,?,?,?,?,?,?,?)", 
  [tanggal, namalengkap, GA, CB, RV, nowa, alamat, catatan, harga, statusnya], 
  (err, result)=>{
    console.log(err);
  }
  );
});

app.put('/update', (req, res)=>{
  const id = req.body.id;
  const newStatusnya = req.body.newStatusnya;

  db.query("UPDATE pelanggan SET statusnya= ? WHERE id= ?", 
  [newStatusnya, id], 
  (err, result)=>{
    res.send(result)
  }
  );
});

app.delete('/delete/:id', (req, res)=>{
  const id = req.params.id;

  db.query("DELETE FROM pelanggan WHERE id = ?", 
  id, 
  (err, result)=>{
    res.send(result)
  }
  );
});


app.get("/data", (req, res) => {

  db.query("SELECT * FROM pelanggan", (err, result)=>{
    if (result) {
      res.send(result)
    } else {
      console.log("ada yang salah");
    }
  })
})

app.listen(3001, ()=> {
  console.log("running server");
})

