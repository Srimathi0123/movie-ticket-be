// const MovieCartModel = require('../models/movieCartModel');
const MovieModel = require('../model/movieModel');

// Add movie to cart
exports.addToCart = async (req, res) => {
    try {
        const { movieID, quantity } = req.body;

        // Find the movie by ID
        const movie = await MovieModel.findById(movieID);
        if (!movie) {
            return res.status(404).json({ message: 'Movie not found' });
        }

        // Calculate total cost
        const totalCost = movie.price * quantity;

        // Create cart item
        const cartItem = new MovieCartModel({
            movie: movieID,
            quantity,
            totalCost
        });

        // Save cart item to database
        await cartItem.save();

        res.status(201).json(cartItem);
    } catch (err) {
        console.error('Error adding movie to cart:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Get all movie cart items
exports.getAllCartItems = async (req, res) => {
    // Implementation here
};

// Get total cost of movie cart
exports.getCartTotal = async (req, res) => {
    // Implementation here
};

// Checkout movie cart
exports.checkoutCart = async (req, res) => {
    // Implementation here
};
