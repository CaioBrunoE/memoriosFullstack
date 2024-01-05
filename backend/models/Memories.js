const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    text: {
        tyoe: String,
        required: true
    },
})

const MemorySchema = new Schema(
    {
        title: {
            title: String,
            required: true
        },
        src: {
            tyoe: String,
            required: true

        },
        description: {
            type: String,
            required: true
        },
        favorite: {
            tyoe: Boolean,
        },
        comment: { commentSchema }
    },
    { timestamps: true }
)

module.exports = mongoose.model("Memory", MemorySchema)
