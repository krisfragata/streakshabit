const express = require('express');
const path = require('path');

const app = express();
app.use('/', express.static(path.join(__dirname, 'static')))

app.post('/api/register', async (req, res) =>{
    console.log(req.body);
    res.json({status: 'ok'})
})


app.listen(9999, () =>{
    console.log('server up')

})