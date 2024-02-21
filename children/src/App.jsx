import "./App.css";
import Footer from "./Components/Footer";

import Header from "./Components/Header";
import Image from './Components/Image'
import Main from './Components/Main'
import Paragraph from './Components/Paragraph'
import Subtitle from './Components/Subtitle'
import Title from './Components/Title'


function App() {
  const data = {
    title: "Esto es un title",
    paragraph: "Esto es un paragraph, dentro de el footer como 'children'",
    source:
      "https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg",
  };

  return (
    <>
      <Header>
        <Title texto={data.title} />
      </Header>

      <Main>
        <Subtitle subtitle={"soy un subtitle"} />
        <Image src={data.source} alt={"el alt"} />
      </Main>

      <Footer>
       <Paragraph paragraph={data.paragraph} />
      </Footer>

    </>
  );
}

export default App;
