const dotenv =require('dotenv');
dotenv.config()

const express=require('express');
const cors =require('cors');
const app=express()

app.use(cors());//jitni bhi server pr request ayegi phle cors origin hoga

app.get( '/',(req, res) => {
        res.send('Hello World!')
})

module.exports =app;