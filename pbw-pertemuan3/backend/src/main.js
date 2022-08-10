import express from "express";
const app = express();
app.use(express.json());
const port = 7000;

app.get("/", (req, res) => {
  res.send({
    nama: "Gibran Farras Ibadurrahman",
  });
});
app.get("/makanan", (req, res) => {
  res.send([
    {
      id: 1,
      nama: "Ayam",
      rasa: "Geprek",
    },
    {
      id: 2,
      nama: "Gehu",
      rasa: "Pedas",
    },
    {
      id: 3,
      nama: "Sate",
      rasa: "Asin",
    },
    {
      id: 4,
      nama: "Kue",
      rasa: "Pancong",
    },
  ]);
});
app.get("/minuman", (req, res) => {
  res.send([
    {
      id: 1,
      nama: "Susu",
      rasa: "Ultra",
    },
    {
      id: 2,
      nama: "Kopi",
      rasa: "Susu",
    },
    {
      id: 3,
      nama: "Nutri",
      rasa: "Sari",
    },
    {
      id: 4,
      nama: "Teh",
      rasa: "Pucuk",
    },
  ]);
});
app.post("/create", (req, res) => {
  res.send({
    nama: req.body,
  });
});

app.listen(port, () => {
  console.log(`Aplikasi Berjalan di port ${port}`);
});
