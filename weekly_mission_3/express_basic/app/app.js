const express= require('express')
const app= express()
const port= 3000

app.get('/',(req,res)=> {
    res.send('Hello World')
}) 
app.get('/launchX',(req,res)=> {
    res.send('Bienvenidos a LaunchX')
}) 


app.listen(port,()=>{
    console.log(`App listening por ${port}`)
})