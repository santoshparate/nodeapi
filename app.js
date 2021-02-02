const express = require('express');

const app = express();
// Get API to read data and send as response 
app.get('',(req,res)=>{

    res.send('<h1>Hello I am first page</h2>');

})

app.get('/about',(req,res)=>{
    res.send('<h1>About Us</h1>')
})

app.get('/team',(req,res)=>{
res.send('<h1>Team</h1>')
})

// Post API to receive user data via form or post API
app.post('/adduser',(req,res)=>{


    console.log(req.body);
    res.send('Data Saved Successfully!!!')
})

// console.log(__dirname);
// console.log(__filename);
// Send JSON object as response 
app.get('/students', (req, res) => {

    res.send([
        {name:'Santosh'},
        {name:'Pankaj'},
        {name:'Shailendra'}
    ])
})


app.listen(8000, () => {
    console.log('Server is up running at port 8000')
})