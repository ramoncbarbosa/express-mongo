import express from "express";

const app = express();

const livros = [
  {
    id: 1,
    titulo: "O Senhor dos Aneis"
  },
  {
    id: 2,
    titulo: "O Hobbit"
  }
]

app.get("/", (req, res)=>{
  res.status(200).send("Curso de Express");
});

app.get("/livros", (req, res)=>{
  res.status(200).json(livros);
});



export default app;