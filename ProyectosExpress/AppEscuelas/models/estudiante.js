const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const estudianteSchema = new Schema({
  nombre: String,
  apellidos: String,
  edad: Number,
  activo: Boolean,
  dni: String,
  clase: String,
});

estudianteSchema.virtual("nombre_completo").get(function () {
  return this.nombre + " " + this.apellidos;
});
estudianteSchema.virtual("nombre_completo").set(function (newValue) {
  const newValueSplit = newValue.split(" ");
  this.nombre = newValueSplit[0];
  this.apellidos = newValueSplit[1];
});

estudianteSchema.methods.mismaClase = function () {
  this.model("Estudiante").find(
    { clase: this.clase },
    (err, estudiantes) => {}
  );
};

module.exports = mongoose.model("estudiante", estudianteSchema);
