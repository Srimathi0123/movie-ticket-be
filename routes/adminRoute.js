// adminRoute.js

const express = require('express');
const router = express.Router();
const adminMiddleware = require('../middleware/adminMiddleware');

// GET admin page
router.get('/', adminMiddleware, (req, res) => {
    // Render the admin page
    res.render('admin');
});

module.exports = router;
