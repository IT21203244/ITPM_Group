const Addstudents = require('../models/AddstudentsModel')
const mongoose = require('mongoose')


//get all students
const getstudents = async (req,res) =>{
    const addstudents = await Addstudents.find({}).sort({createdAt: -1})

    res.status(200).json(addstudents)
}


//get a single student
const getstudent = async (req, res) => {
    const { id } = req.params


    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No Such a Student"})

    }

    const addstudents = await Addstudents.findById(id)

    if(!addstudents) {
        return res.status(404).json({error: "No Such a Student"})
    }

    res.status(200).json(addstudents)
    
}

//post a new student
const createnewstudent = async (req, res) => {
    const{FirstName, LastName,StudentNumber, Email, ContactNumber, Address, Password, ConfirmPassword } = req.body

    try{
        const addstudents = await Addstudents.create({FirstName, LastName,StudentNumber, Email, ContactNumber, Address, Password, ConfirmPassword })
        res.status(200).json(addstudents)
    }
        catch (error){
            res.status(400).json({error: error.message})
        }
}



//delete students
const deletestudent = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No Such a Student"})

    }

    const addstudents = await Addstudents.findByIdAndDelete({_id: id})

    
    if(!addstudents) {
        return res.status(400).json({error: "No Such a Student"})
    }

    res.status(200).json(addstudents)



}



//update students
const updatestudent = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No Such a Student"})

    }   

    const addstudents = await Addstudents.findByIdAndUpdate({_id: id}, {
        ...req.body

    })

    if (!addstudents) {
        return res.status(400).json({error: "No Such a Student"})
        
    }

    res.status(200).json(addstudents)
    
}

module.exports = {
    createnewstudent,
    getstudent,
    getstudents,
    deletestudent,
    updatestudent
}