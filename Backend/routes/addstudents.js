const express = require('express')

const {
    createnewstudent,
    getstudent,
    getstudents,
    deletestudent,
    updatestudent

} = require('../controllers/addstudentsController')

const router = express.Router()
const Addstudents = require('../models/AddstudentsModel')

//getallstudents
router.get('/', getstudents)

//get A Single Student
router.get('/:id', getstudent)

//post a new Student
router.post('/', createnewstudent)

//delete a Student
router.delete('/:id', deletestudent)

//update a new Student
router.patch('/:id', updatestudent)


module.exports = router