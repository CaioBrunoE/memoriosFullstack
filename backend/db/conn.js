const mongoose = require("mongoose")

require("dotenv").config()

mongoose.set("strictQuery", true)

async function main() {
    await mongoose.connect(`mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@cluster0.ir324xi.mongodb.net/?retryWrites=true&w=majority`);

    console.log("conectado com sucesso")
}

main().catch((err) => console.log(err))

module.exports = main;