const mongoose = require('mongoose')

if(process.argv.length < 5){
    console.log('Please provide the password followed by the person name followed by the person number')
    process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://fullstack:${password}@cluster0.8ekhfs4.mongodb.net/phonebook?retryWrites=true&w=majority`

const personSchema = new mongoose.Schema({
    name: String,
    number: String
})

const Person = mongoose.model('Person',personSchema)

mongoose
.connect(url)
.then(result => {
    console.log('connected')

    const newPerson = new Person({
        name: process.argv[3],
        number: process.argv[4]
    })

    return newPerson.save()
})
.then( () =>{
    console.log('Person saved!')
    return mongoose.connection.close()
})
.catch((err) => console.log(err))