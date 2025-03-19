const Header = (props) => {
  return (
    <div>
      <h1>{props.course.head}</h1>
    </div>
  )
}



const Content = (props) =>{
  return (
    <div>
      <Part part={props.course.part1} exercise={props.course.exercise1}/>
      <Part part={props.course.part2} exercise={props.course.exercise2}/>
      <Part part={props.course.part3} exercise={props.course.exercise3}/>
      
    </div>

  )
}

const Part = (props) =>{
  return(
    <div>
      {props.part} {props.exercise}
    </div>
  )
}


const Total = (props) =>{
  return(
    <div>
    <p>
      Number of exercises {props.course.exercise1+props.course.exercise2+props.course.exercise3}
    </p>
    </div>
  )
}



const App = () => {
  const course = {
    head:'Half Stack application development',
    part1:'Fundamentals of React',
    exercise1:10,
    part2:'Using props to pass data',
    exercise2:7,
    part3:'State of a component',
    exercise3:14
  }

  
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}




export default App
