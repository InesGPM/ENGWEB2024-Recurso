const mongoose = require('mongoose');
var Livro = require('../models/livro');

module.exports.list = () => {
    return Livro.find().exec();
}

module.exports.findById = id => {
    return Livro.findOne({ _id: id}).exec();
}

module.exports.listByCharacter = character => {
    return Livro.find({ characters: character }).exec();
}

module.exports.listByGenre = genre => {
    return Livro.find({ genres: genre }).exec();
}

module.exports.listGenres = () => {
    return Livro.distinct("genres").sort().exec();
}

module.exports.listCharacters = () => {
    return Livro.distinct("characters").sort().exec();
}

module.exports.insert = (livro) => {
    if (Livro.find({ _id: livro._id }).exec().length != 1) {
        var livroNew = new Livro(livro);
        return livroNew.save();
    }
    
    return Promise.reject(new Error("Este livro já existe na base de dados."));
}

module.exports.remove = (id) => {
    return Livro.find({ _id: id }).deleteOne().exec();
}

module.exports.update = (id, livro) => {
    return Livro.findByIdAndUpdate(id, livro, { new: true }).exec();
}