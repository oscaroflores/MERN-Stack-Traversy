const asyncHandler = require('express-async-handler')

// @desc    Get goals
// @route   GET /api/goals
// @access  Private
const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({message: "Goals recieved"})
})

// @desc    Set new goals
// @route   POST /api/goals
// @access  Private
const setGoals = asyncHandler(async (req, res) => {
    if(!req.body.text) { // ~26:00 Err Logging
        res.status(400)
        throw new Error('Please add text field')
    } // we send goal data through request body
})

// @desc    Update goals
// @route   PUT /api/goals/:id
// @access  Private
const updateGoals = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`})
})

// @desc    Delete goals
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoals = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Delete goal ${req.params.id}`})
})

// exporting controller funcs
module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}