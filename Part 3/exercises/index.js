const { request } = require('express')
const express = require('express')
const app = express()
app.use(express.json())

let persons = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

//GET
app.get('/api/persons',(request,response)=>{
    response.json(persons)
})

app.get('/info',(request,response)=>{
    const returnedObject = `<p> Phonebook has info for ${persons.length} people</p> <br> <p> ${new Date().toUTCString()}</p>`
    response.send(returnedObject)
})

app.get('/api/persons/:id', (request,response)=>{
    const id = Number(request.params.id)
    const person = persons.find(p => p.id ===id)
    
    if(person){
        response.json(person)
    }
    else{
        response.status(404).end()
    }
})

//DELETE

app.delete('/api/persons/:id',(request,response)=>{
    const id = Number(request.params.id)
    persons = persons.filter(p=> p.id !== id)
    console.log(persons)
    response.status(204).end()
})

//POST
/*const idGenerator = () =>{
    const maxId = persons.length>0? Math.max(...persons.map(p=>p.id)) : 0
    return maxId +1
}*/
app.post('/api/persons',(request,response)=>{
    const body = request.body
    
    if(!body.name || !body.number){
        return response.status(422).end('missing name or number')
    }
    if(persons.find(p=>p.name === body.name)){
       return response.status(303).end('person already exists') 
    }
    const newPerson = {
        id:  Math.floor( Math.random() *10000),
        name: body.name,
        number: body.number
    }
    
    persons = persons.concat(newPerson)
    response.json(newPerson)
})
const PORT = 3001

app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`);
})