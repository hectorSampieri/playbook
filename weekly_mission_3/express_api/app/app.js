// Usando objeto express
const express = require('express')
// App de Express
const app = express()
app.use(express.json()) // Indicamos que usaremos JSON
// Puerto en que vamos a ver nuestra app: localhost:3000
const port = 5000

app.get('/v1/Explorers',(req,res)=> {
    console.log(`API Explores GET ALL Requests`)
    const explorer1 ={id:1 ,name:'Hector1'}
    const explorer2 ={id:2, name:'Hector2'}
    const explorer3 ={id:3, name:'Hector3'}
    const explorer4 ={id:4, name:'Hector4'}
    const explorer5 ={id:5, name:'Hector5'}
    const explorers=[explorer1,explorer2,explorer3,explorer4,explorer5]
    res.status(200).json(explorers)
}) 


app.get('/v1/Explorers/:id',(req,res)=> {
    console.log(`API Explores GET Requests ${new Date()}`)
    console.log(`Getting explorer with Id ${req.params.id}`)
    const explorer ={id:1 ,name:'Hector1'}
    res.status(200).json(explorer)
}) 


app.post('/v1/Explorers',(req,res)=> {
    console.log(`API Explores Post Requests ${new Date()}`)
    const requestBody = req.body
    res.status(200).json({message: "Created"})
}) 

app.put('/v1/Explorers/:id',(req,res)=> {
    console.log(`API Explores PUT  Requests ${new Date()}`)
    console.log(`Update explorer with Id ${req.params.id}`)
    const requestBody = req.body
    res.status(200).json({message: "Update"})
}) 


app.delete('/v1/Explorers/:id',(req,res)=> {
    console.log(`API Explores Delete  Requests ${new Date()}`)
    console.log(`Delete explorer with Id ${req.params.id}`)
    const requestBody = req.body
    res.status(200).json({message: "Deleted"})
}) 

/*
// Con esto inicializamos esta app
app.listen(port, () => {
 console.log(`Example app listening on port ${port}`) 
}) */

module.exports = app