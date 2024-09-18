const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
// Mendefinisikan schema untuk pengguna
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});
// Hash password sebelum disimpan ke database
userSchema.pre('save', async function(next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 8);
    }
    next();
});
// Method untuk membandingkan password yang diinput dengan password yang tersimpan
userSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};
// Ekspor model User
module.exports = mongoose.model('User', userSchema);