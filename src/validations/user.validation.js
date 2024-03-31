const { body, param, query } = require('express-validator')

const signUp = [
    body('email')
        .exists()
        .withMessage('email is required')
        .isEmail()
        .withMessage('email is invalid'),
    body('password')
        .exists()
        .withMessage('password is required')
        .isLength({ min: 8 })
        .withMessage('password must be at least 8 characters'),
    body('name')
        .exists()
        .withMessage('name is required')
        .isLength({ min: 3 })
        .withMessage('name must be at least 3 characters'),
]

const signIn = [
    body('email')
        .exists()
        .withMessage('email is required')
        .isEmail()
        .withMessage('email is invalid'),
    body('password')
        .exists()
        .withMessage('password is required')
        .isLength({ min: 8 })
        .withMessage('password must be at least 8 characters'),
]

const signOut = [
    body('token')
        .exists()
        .withMessage('token is required')
]
module.exports = {
    signUp,
    signIn,
    signOut,
}