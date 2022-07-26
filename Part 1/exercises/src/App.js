const Header = (props) =>{
  return(
    <>
      <h1>{props.course.name}</h1>
    </>
  )
}
const Part = (props) =>{
  const course = props.course
  return(
    <p>
      {course.name} {course.exercises}
    </p>
  )
}
const Content = (props) =>{
  return(
    <>
      {props.course.parts.map( (part) => <Part key ={part.name} course = {part}/>)}

    </>
  )
}
const Total = (props) =>{
  let sum = 0
  props.course.parts.forEach(element => {
    sum += element.exercises
  });
  return(
    <>
      <p>Number of exercises {sum}</p>

    </>
  )
}
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header course = {course}/>
      <Content course ={course} /> 
      <Total course= {course}/>
    </div>
  )
}

export default App