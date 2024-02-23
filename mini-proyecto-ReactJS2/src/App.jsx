
import "./App.css"


import CharacterList from "./Components/CharacterList/CharacterList";
import { Header } from "./Components/Header/Header";
import { Main } from "./Components/Main/Main";
import { Paragraph } from "./Components/Paragraph/Paragraph";
import { Subtitle } from "./Components/Subtitle";
import { Title } from "./Components/Title/Title";




const App = () => {
return(
  <>
  <Header>
    <Title/>
  </Header>
  <Main>
<Subtitle text={"texto prueba"}/>

  
    <CharacterList/>
  


  </Main>
  
   </>
)
};


export default App;
