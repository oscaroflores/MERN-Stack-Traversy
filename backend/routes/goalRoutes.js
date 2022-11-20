const express = require('express')
const router = express.Router()

// importing controller functions
const {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
} = require('../controller/goalController')

module.exports = router

// requests with same route can be written:
router.route('/').get(getGoals).post(setGoals)

router.put('/:id', updateGoals)

router.delete('/:id', deleteGoals)