const express=require('express')
const app=express()
const port = process.env.PORT || 8000

app.get('/',(req,res)=>{
    res.end('Hello World! This is my first Dockerized Node.js Application.')
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})