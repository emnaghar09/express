
const users = require('../users');
const express = require('express');
const router=express.Router();


router.get('/users', (req, res) => {res.send(users)})
//delete a user
router.get('/users/:id', (req, res) => {res.json(users.filter(user => user.id===Number(req.params.id)))})
//Number ou bien parseInt

router.delete('/users/:id', (req, res) => {res.json(users.filter(user=>user.id!==Number(req.params.id)))})
// router.post('/users', (req, res) => {res.send(req.body)})

router.post('/users', (req, res) => {res.json(users.concat(req.body))})

router.put('/users/:id', (req, res) =>{res.json(users.map(el=>el.id=== parseInt(req.params.id)? {...req.body, id:el.id} : el))})
module.exports = router;