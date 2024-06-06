# 1.1 Setup
Primeiramente, foi necessário preparar os dados. Ao analisar o ficheiro dataset.json, percebi que continha alguns erros. Em primeiro lugar, faltava o delimitador para fechar o JSON, que adicionei manualmente. Depois, reparei que certos arrays estavam como strings, para corrigir isso, utilizei o script prepare.py para os transformar. Aproveitei este script para substituir o uso de bookId por _id na base de dados.

# 1.2 Queries

## 1querie
db.livros.countDocuments({ title: /Love/i })

## 2querie
db.livros.find({ author: /Austen/ }, { title: 1, _id: 0 }).sort({ title: 1 })


## 3querie
db.livros.aggregate([
    { $unwind: "$author" },
    { $group: { _id: "$author" } },
    { $sort: { _id: 1 } }
])

## 4querie
db.livros.aggregate([
    { $unwind: "$genres" },
    { $group: { _id: "$genres", count: { $sum: 1 } } },
    { $sort: { count: -1 } }
])

## 5querie
db.livros.find({ characters: "Sirius Black" }, { title: 1, isbn: 1, _id: 0 }).sort({ title: 1 })
