const express = require('express')
//whenever you see app, it's assumed that its using express.
const app = express()

const cors = require('cors')

const PORT = 7000


const rappers = {
    '21 savage':{
    'age': 29,
    'birthName':'wefewfegbfbefefbf',
    'birthLocation': 'London, England'
    },
    'chance the rapper':{
        'age': 29,
        'birthName':'Chancelor Bennett',
        'birthLocation': 'Chicago, IL'
    },
    
    'dylan':{
        'age': 29,
        'birthName':'Dylan',
        'birthLocation': 'Dylan'
    },
}



// when we hear that get request on our route.. remember this function here that you will see over and over again - ()=>{}. __dirname means, look at wherever this server.js file is. app.get looks just like an eventlistener!!
app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
}) 


//rapperName is a query parameter! 
app.get('/api/:rapperName',(request, response)=>{
    const rappersName = request.params.rapperName.toLowerCase()
    
    if(rappers[rappersName]){
        response.json(rappers[rappersName].birthLocation);
    }else{
        response.json(rappers['dylan'])
    }
    //response.json(rappers)
})

app.listen(process.env.PORT || PORT,()=>{
    console.log(`THe server is running on ${PORT}! You better go catch it!`)
})