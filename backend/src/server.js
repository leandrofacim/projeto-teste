const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');

require("../src/models/user");

const User = mongoose.model("user");

mongoose
  .connect("mongodb://localhost/teste", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Conexão com MongoDB realizada com sucesso!");
  })
  .catch((erro) => {
    console.log("Erro: Conexão com MongoDB não foi realizada com sucesso!");
  });

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  User.find({})
    .then((user) => {
      return res.json(user);
    })
    .catch((erro) => {
      return res.status(400).json({
        error: true,
        message: "Nenhum usuário encontrado!",
      });
    });
});

app.get("/user/:id", (req, res) => {
  console.log(req.params.id);
  User.findOne({ _id: req.params.id })
    .then((user) => {
      return res.json(user);
    })
    .catch((erro) => {
      return res.status(400).json({
        error: true,
        message: "Nenhum usuário encontrado!",
      });
    });
});

app.post("/user", (req, res) => {
  const user = User.create(req.body, (erro) => {
    if (erro)
      return res.status(400).json({
        erro: true,
        message: "Erro: Usuário não cadastrado!",
      });

    return res.status(200).json({
      erro: false,
      message: "Usuário cadastrado com sucesso!",
    });
  });
  return res.json(req.body);
});

app.listen(3333, () => {
  console.log("Servidor iniciado na porta 3333");
});
