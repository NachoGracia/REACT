
import './App.css'
import Image from './Components/Image'
import Paragraph from './Components/Paragraph'
import Subtitle from './Components/Subtitle'


import Title from './Components/Title'





function App() {

  const data = {

    title: "Esto es un title",
     paragraph: "Esto es un paragraph",
     source: "https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg"
  }


  return (
    <>
   <Title titulo={data.title}/>
   <Image src={data.source} alt={"el alt"}/>
   <Paragraph paragraph={data.paragraph}/>
    </>
  )
}

export default App
