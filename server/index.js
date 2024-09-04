const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const banco = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "bancoreact",
});

app.use(cors());
app.use(express.json());

app.post("/registro", (req, res) => {
  const { nome, servico, email } = req.body;

let salvando = "INSERT INTO aulareact (nome, servico, email) VALUES (?, ?, ?)";

  banco.query(salvando, [nome, servico, email], (err, result) => {
    if (err) {
      console.error('Erro ao inserir dados:', err);
      return res.status(500).send('Erro ao inserir dados');
    }
    console.log('Dados inseridos com sucesso:', result);
    res.status(200).send('Dados inseridos com sucesso');
  });
});

// Rodando na porta 3001, pois o react roda na porta 3000, evitando conflito na execução completa
app.listen(3001, () => {
  console.log("Rodando no servidor");
});
