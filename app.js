const express = require('express');
const path = require('path')
const app = express();
let bodyParser = require('body-parser')
app.use(bodyParser.raw({
    limit: '50mb'
  }))
  app.use(bodyParser.json({
    limit: '50mb'
  }))
  app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true
  }))

 console.log(__dirname);
 console.log(__filename);

const publicDirectoryPath = path.join(__dirname, 'src/public')
console.log(publicDirectoryPath)

app.use(express.static(publicDirectoryPath))
// Get API to read data and send as response 
app.get('',(req,res)=>{

    res.send('<form name="myform" action="/adduser" method="POST"><input type="text" name="name" value=""/>Firstname: <input type="submit" value="submit"></form>');

})

// Post API to receive user data via form or post API
app.post('/adduser',(req,res)=>{


    console.log(req.body);
    res.send('Data Saved Successfully!!!')
})


// Send JSON object as response 
app.get('/students', (req, res) => {

    let data = [
        {name:'Santosh'},
        {name:'Pankaj'},
        {name:'Shailendra'}
    ]

    res.send(JSON.stringify(data))
})


app.listen(8000, () => {
    console.log('Server is up running at port 8000')
})