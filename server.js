const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');
const authRoutes = require('./routes/authRoutes');
const app = express();
app.use(express.json());
// Koneksi ke MongoDB
mongoose.connect('mongodb://localhost:27017/jwdtb', { useNewUrlParser: true, useUnifiedTopology: true });
// Rute otentikasi
app.use('/api/auth', authRoutes);
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});