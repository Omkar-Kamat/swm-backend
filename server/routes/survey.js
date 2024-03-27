const express = require('express');
const router = express.Router();
const Survey = require('../models/surveySchema')

router.post('/',async (req,res)=>{
    const {name,age,gender,occupation,location,Q1,Q2,Q3,Q4,Q5,Q6,Q7,Q8,Q9} = req.body
    
    try{
        const survey = await Survey.create({
            name,
            age,
            gender,
            occupation,
            location,
            Q1,Q2,Q3,Q4,Q5,Q6,Q7,Q8,Q9
        })
        res.status(200).json(survey)


    }catch(error){
        res.status(400).json({error :error.message})
    }
    
    console.log(req.body)
    
    
});



router.get('/',async (req,res)=>{
    const surveys = await Survey.find({});
    res.status(200).json(surveys);
})


router.get('/:id',async (req,res)=>{
    const { id } = req.params

    const survey = await Survey.findById(id);
    if(!survey){
        return res.status(404).json({error: 'Not Found'})
    }
    res.status(200).json(survey)
})






module.exports = router;