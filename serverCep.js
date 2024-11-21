const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Habilita CORS para permitir requisições de origens diferentes
app.use(cors());

// Rota para buscar endereço pelo CEP
app.get("/endereco/:cep", async (req, res) => {
  const cep = req.params.cep;

  try {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    if (response.data.erro) {
      return res.status(404).json({ error: "CEP não encontrado" });
    }
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar o endereço" });
  }
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
