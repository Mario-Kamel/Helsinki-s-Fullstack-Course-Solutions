import axios from 'axios'
import { useState,useEffect } from 'react'

import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber,setNewNumber] = useState('')
  const [searchWord, setSearchWord] = useState('')

  const hook = () =>{
    axios
    .get('http://localhost:3001/persons')
    .then(response =>{
      setPersons(response.data)
    })
  }
  useEffect(hook,[])

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