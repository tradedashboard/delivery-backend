
const express = require('express')
const deliveryController = require('./../controller/stocks.controller')
const router = express.Router()
router.route('/delivery').post(deliveryController.stocksDelivery)
module.exports = router
    