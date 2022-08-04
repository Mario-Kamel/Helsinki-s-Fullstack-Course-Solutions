import { useState } from 'react'

import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber,setNewNumber] = useState('')
  const [searchWord, setSearchWord] = useState('')
  const handleNameChange = (event)=>{
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) =>{
    setNewNumber(event.target.value)
  }
  const handleSearchWordChange = (event) => {
    setSearchWord(event.target.value)
  }
  const handleFormSubmit = (event) =>{
    event.preventDefault()
    const alreadyExists = persons.find(person => person.name ===newName)
    if(!alreadyExists){
      const newPerson = {
        name:newName,
        number:newNumber,
        id:persons.length+1
      }
      setPersons(persons.concat(newPerson))
      setNewName('')
      setNewNumber('')
    }
    else{
      window.alert(`${newName} is already added to phonebook`)
    }
  }
  const personsToShow = persons.filter(person => person.name.toLowerCase().indexOf(searchWord.toLocaleLowerCase()) !== -1)
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleSearchWordChange={handleSearchWordChange}/>
      <h2>Add a new </h2>
      <PersonForm newName = {newName} newNumber = {newNumber} handleNameChange= {handleNameChange} handleNumberChange = {handleNumberChange} handleFormSubmit = {handleFormSubmit}/>
      <h2>Numbers</h2>
      
      <Persons personsToShow={personsToShow}/>
    </div>
  )
}

export default App