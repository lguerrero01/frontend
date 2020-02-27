const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.set('useCreateIndex', true);
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true //quitar espacios en blanco
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamps: true //guarda fecha de cracion y de actualizacion
});

module.exports = userSchema;