#1.1 Setup
#1.2 Queries
livros> db.livros.countDocuments({ title: /Love/i })
db.livros.find({ author: /Austen/ }, { title: 1, _id: 0 }).sort({ title: 1 })
db.livros.aggregate
