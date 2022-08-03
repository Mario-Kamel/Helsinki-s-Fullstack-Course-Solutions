import React from "react";
const Header = ({course}) =>{
    return(
      <h1>{course.name}</h1>
    )
  }
  const Part = ({part}) =>{
    return(
      <p>{part.name}  {part.exercises}</p>
    )
  }
  const Content = ({parts}) =>{
    const total = parts.reduce((sum,part) => sum =sum + part.exercises, 0)
    
    return(
      <>
        {parts.map(part => <Part key={part.id} part = {part}/>)}
        <p><b>total of {total} exercises</b></p>
      </>
    )
  }
  const Course = ({course}) =>{
    
    return (
      <>
        <Header course = {course}/>
        <Content parts = {course.parts}/>
  
  
      </>
    )
  }

  export default Course