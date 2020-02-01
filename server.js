const expres=require('express')
const app=expres()
const PORT =process.env.PORT||5000
const mongoose=require('mongoose')

mongoose.connect('mongodb://localhost/phone_management', {useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>{console.log("Mongodb connected")})
.catch(err=>{
    console.log("Database connection faild !")
    console.log(err)
})



app.listen(PORT , ()=>{
    console.log(`server started on port no : ${PORT}`)
})

