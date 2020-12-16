const mongoose = require("mongoose");

const funcionarioSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Funcionario = mongoose.model("Funcionario", funcionarioSchema);
module.exports = Funcionario;