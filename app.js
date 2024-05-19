require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRouter = require('./routes/userRoute');
const movieRouter = require('./routes/movieRoute');

const app = express();
const PORT = process.env.PORT || 3600;

// Database connection
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected successfully to the database!');
    })
    .catch((error) => {
        console.error('Database connection error:', error.message);
    });

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/user', userRouter);
app.use('/api/v1/movie', movieRouter);


// Server listening
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
