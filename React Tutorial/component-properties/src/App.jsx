import Student from "./Student.jsx"


function App() {
  return (
    
    <>
    {/* When storing data that is not a string literal You'll need to enclose it in curly braces */}
      <Student name="SpongeBob" age={30} isStudent={true}></Student>
      <Student name="Patrick" age={43} isStudent={false}></Student>
      <Student name="Squidward" age={50} isStudent={false}></Student>
      <Student name="Sandy" age={23} isStudent={true}></Student>
      <Student></Student>
    </>

    

  )
}

export default App
