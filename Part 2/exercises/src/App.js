import axios from 'axios'
import { useState,useEffect } from 'react'

import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'
const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchWord, setSearchWord] = useState('')

  const hook = () =>{
    personService
    .getAll()
    .then(initialPersons =>{
      setPersons(initialPersons)
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
        number:newNumber
      }
      personService
      .create(newPerson)
      .then(returnedPerson => setPersons(persons.concat(returnedPerson)))
      
      setNewName('')
      setNewNumber('')
    }
    else{
      if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
        const newPerson = {
          name:newName,
          number:newNumber
        }
        const indexOfPerson = persons.findIndex(person => person.name === newName)
        const personId = persons.at(indexOfPerson).id
        personService
        .update(personId,newPerson)
        .then(returnedPerson =>  setPersons(persons.map(person=> person.id !==personId ? person : returnedPerson))
        )
        setNewName('')
        setNewNumber('')
      }
    }
  }
  const personsToShow = persons.filter(person => person.name.toLowerCase().indexOf(searchWord.toLocaleLowerCase()) !== -1)
  const handleDelete = (id) =>{
    personService.deletePerson(id)
    setPersons(persons.filter(person => person.id !== id))
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleSearchWordChange={handleSearchWordChange}/>
      <h2>Add a new </h2>
      <PersonForm newName = {newName} newNumber = {newNumber} handleNameChange= {handleNameChange} handleNumberChange = {handleNumberChange} handleFormSubmit = {handleFormSubmit}/>
      <h2>Numbers</h2>
      
      <Persons personsToShow={personsToShow} handleDelete = {handleDelete}/>
    </div>
  )
}

export default App