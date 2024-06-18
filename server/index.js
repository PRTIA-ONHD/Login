//out dependecies
const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(express.json())
app.use(cors())

app.listen(3002,()=>{
    console.log('Server is running on port 3002')
})

const db =  mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'plantdb',
})

app.post('/register',(req,res)=>{
    const sentEmail = req.body.Email
    const sentUserName = req.body.UserName
    const sentPassword = req.body.Password

    const SQL = 'INSERT INTO users (email,username,password) VALUES (?,?,?)'

    const values = [sentEmail, sentUserName,sentPassword]

    db.query(SQL,Values, (err,results)=>{
        if(err){
            res.send(err)
        }
        else{
            console.log('User inserted successfully!')
            res.send({message: 'User added!'})
        }
    })
})