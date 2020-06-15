const express = require('express')
const users= express.Router()
const cors = require('cors')
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')

const User = require("../model/User")
users.use(cors())

process.env.SECRET_KEY = 'secret'

users.post('/register', (req,res) => {
    const today = new Date()
    const userData = {
        firstname: req.body.firstname,
        lastname : req.body.lastname,
        email: req.body.email,
        password: req.body.password,
        created: today
    }

    User.findOne({
        email: req.body.email
    })
    .then(user => {
        if(!user) {
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                userData.password = hash
                User.create(userData)
                .then(user => {
                    res.json({status: user.email+ 'registered!'})
                })
                .catch(err => {
                    res.send('error: '+err)
                })
            })
        }else{
            res.json({error: 'User already exists'})
        }
    })
    .catch(err => {
        res.send('error: '+err)
    })
})

users.post('./login', (req,res) => {
    User.findOne({
        email: req.body.email
    })
    .then(user => {
        if(user) {
            if(bcrypt.compareSync(req.body.password, user.password)){
                const payload = {
                    _id: useer.id,
                    firstname: user.firstname,
                    lastname: user.lastname,
                    email: user.email
                }
                let token= jwt.sign(payload, procees.env.SECRET_KEY, {
                    expiresIn: 1440
                })
                res.send(token)
            }
            else{
                res.json({error: "User does not exist"})
            }
           
            }
            else{
                res.json({ error:"User does not exist"})
        }
    })
    .catch(err => {
        req.send('error: '+err)
    })
})
users.get('/procfile', (req,res) => {
    var decoded = jwt.verify(req.headers['authorization'],process.env.SECRET_KEY)

User.findOne({
    _id: decoded._id
})
.then(user => {
    if(user) {
        res.join(user)
    }
    else{
        res.send("User does not exist")
    }
})
.catch(err => {
    res.send("error : "+err)
})
})

module.exports = users