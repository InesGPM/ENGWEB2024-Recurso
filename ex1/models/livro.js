var mongoose = require("mongoose");

const livroSchema = new mongoose.Schema({
    title: { type: String, required: true },
    series: String,
    author: { type: String, required: true },
    rating: { type: String, required: true },
    description: { type: String, required: true },
    language: { type: String, required: true },
    isbn: { type: String, required: true },
    genres: [String],
    characters: [String],
    bookFormat: String,
    edition: String,
    pages: { type: String, required: true },
    publisher: { type: String, required: true },
    publishDate: { type: String, required: true },
    firstPublishDate: String,
    awards: [String],
    numRatings: { type: String, required: true },
    ratingsByStars: [String],
    likedPercent: { type: String, required: true },
    setting: [String],
    coverImg: { type: String, required: true },
    bbeScore: { type: String, required: true },
    bbeVotes: { type: String, required: true },
    price: { type: String, required: true },
    _id: { type: String, required: true }
}, { versionKey: false });

module.exports = mongoose.model("livro", livroSchema);