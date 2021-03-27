var Contacts = require('../models/Contacts');
var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

//GET ALL DATA
router.get('/', function(req,res,next){
    Contacts.find(function(err,contacts){
        if(err) return next(err);
        res.json(contacts);
    })
})


//GET SINGLE DATA BY ID
router.get('/:id', function(req,res,next){
    Contacts.findById(req.params.id, function(err,post){
        if(err) return next(err);
        res.json(post);
    })
})

//POST CREATE DATA
router.post('/', function(req,res,next){
    Contacts.create(req.body, function(err,post){
        if(err) return next(err);
        res.json(post);
    })
})

//EDIT DATA
router.put('/:id', function(req,res,next){
    console.log(req.body);
    Contacts.findByIdAndUpdate(req.params.id, req.body, function(err,post){
        if(err) return next(err);
        res.json(post);
    })
})

//Delete DATA
router.delete('/:id', function(req,res,next){
    console.log(req.body);
    Contacts.findByIdAndRemove(req.params.id, req.body, function(err,post){
        if(err) return next(err);
        res.json(post);
    })
})

module.exports = router;