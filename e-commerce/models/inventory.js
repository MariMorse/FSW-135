const mongoose = require("mongoose")
const schema = mongoose.Schema

const inventorySchema = new mongoose.Schema({

    item: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    category: {
        type: String
    },
    quantity: Number
})

module.exports = mongoose.model('Inventory', inventorySchema)