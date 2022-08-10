const mongoose = require('mongoose')


const password = process.argv[2]

const url = `mongodb+srv://fullstack:${password}@cluster0.8ekhfs4.mongodb.net/phonebook?retryWrites=true&w=majority`

const personSchema = new mongoose.Schema({
    name: String,
    number: String
},{collection: 'persons'})

const Person = mongoose.model('persons',personSchema)

if(process.argv.length === 3){
    mongoose
    .connect(url)
    .then( (result)=>{
        console.log('Phonebook')
       
        Person.find({}).then(result =>{
            result.forEach(p => console.log(p.name,p.number))
        })
        mongoose.connection.close()
    })
}

else if(process.argv.length <5){
    console.log('Please provide the password, the name and the number of the person')
    process.exit(1)
}
else{
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
        console.log(`added ${process.argv[3]} number ${process.argv[4]} to phonebook`)
        return mongoose.connection.close()
    })
    .catch((err) => console.log(err))
}