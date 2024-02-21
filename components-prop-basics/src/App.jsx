import "./App.css"
import Title from "./Components/Title"



function App() {
const titulo1 = "Este es el título 1"
const titulo2 = "Este es el título 2"


  return (
    <>
  <Title titulo={titulo1}/>
  <Title titulo={titulo2}/>
    </>
  )
}

export default App
