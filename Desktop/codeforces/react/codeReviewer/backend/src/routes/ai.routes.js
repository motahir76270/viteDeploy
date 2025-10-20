const express = require('express')
const getReview = require('../controllers/ai.controllers')
const router = express.Router()


router.post("/getResponse", getReview )

module.exports = router; 