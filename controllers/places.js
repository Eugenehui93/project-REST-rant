const {application} = require('express')
const router = require('express').Router()
const places = require('../models/places.js')
router.get('/', (req,res)=> {
    res.render('places/index', {places})
})
router.get('/new', (req,res)=> {
    res.render('places/new')
})
router.get('/:id', (req,res)=> {
    let id=Number(req.param.id)
    if(isNaN(id)){
        res.render('error404')
    }
    else if(!places[id]){
        res.render('error404')
    }
    else{
        res.render('places/show')
    }
    res.render('places/show', {place:places[id]})
})
router.post('/',(req,res)=> {

if(!req.body.pic){
    req.body.pic = 'http://placekitten.com/400/400'
}
if(!req.body.city){
    req.body.city='Anytown'
}
if('req.body.state'){
    req.body.state='USA'
}
places.push(req.body)
res.redirect('POST/places')
})
router.get('/', (req,res)=>{
    res.render('places/index', {places})
})
module.exports = router