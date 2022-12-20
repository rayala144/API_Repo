const express = require('express');
var cors = require('cors')
const app = express();
app.use(cors())

const db = require('./db')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(3000, () =>{
    console.log("server started at port 5050")
})

app.get('/mobiles',(req,res) =>{
    db.getMobiles()
    .then((mobiles)=>{
        res.send(mobiles);
    })

    .catch((err)=>{
        res.send(err)
    })
    
})

app.post('/mobiles',(req,res) =>{
    db.addMobile(req.body.name,req.body.price,req.body.ram,req.body.storage)
    .then(()=>{
        res.send(req.body);
    })

    .catch((err)=>{
        res.send(err)
    })
})

app.put('/mobiles',(req,res) =>{
    console.log(38,req.body)
    db.updateMobile(req.body.name,req.body.price,req.body.ram,req.body.storage)
    .then(()=>{
        
        res.send(req.body);
    })

    .catch((err)=>{
        res.send(err)
    })
})

app.delete('/mobiles',(req,res) =>{
    console.log(51)
    db.deleteMobile(req.body.id)
    .then((mobiles)=>{
        res.send(mobiles);
    })

    .catch((err)=>{
        res.send(err)
    })
})