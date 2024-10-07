import { useState } from 'react'
import React from 'react'


function App() {
   const [title1 , setTitle] = useState("My name is Vishwas Sharma")
    
    return <div>

      <CardWrapper1 heading = {title1} content = {<TextComponent />} />
                      {/*My name is Vishwas Sharma */}
      <br />
      
      <CardWrapper2 content = {<TextComponent />} heading = {title1}/>
    </div>
}

function TextComponent ()
{
  return (<div>
     Hi there!
  </div>)
}
function Title(heading)
{
   return (
    <div>
      {heading}
    </div>
   )
}
function CardWrapper1({content,heading}){

  

  return (
  
  <div>
    <Title heading = {heading}/>
    {content}
    <input type="text" placeholder='Enter the text here....'/>

  </div>
  )
}
function CardWrapper2({content,heading, input}){



  return (
  
  <div>
    <Title heading = {heading}/>
    {content}
    <input type="text" placeholder='Enter the text here....'/>
    

  </div>
  )
}



export default App

// const newTodos = [];
// for(let i = 0; i < todos.length ; i++)
// {
//   newTodos.push(todos[i]);

// }
// newTodos.push({
//   title : Math.random(),
//   descprition : Math.random(),
//   id : 4
// })
// setTodos(newTodos)
// When React renders the App component, it looks for the return value of this function. The return statement contains JSX (which looks like HTML) that tells React what to display on the screen.
// As per the above line, meaning this would be rendered on the screen , right ?
// 2) 
// function CardWrapper({content,title}){

//   // create a div which has a border , (hint the way to create a border is border : "2px solid black" and inside the div , renders the prop)

//   return (
  
//   <div style={{
//     border : "2px solid black",
//     padding :"10px",
//     margin : "10px" }}>
//     <Title title = {title}/>
//     {content}
//     <input type="text" placeholder='Enter the text here....'/>

//   </div>
//   )
// }
// // The moment i introduced the input tag in the CardWrapper component, it is coming at the both places on the ui , but the title which is being called by th eboth CardWrapper is coming only at the first one . WHy?
