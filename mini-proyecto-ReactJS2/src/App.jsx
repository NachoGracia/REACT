
import "./App.css"
import Card from "./Components/Card/Card";

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
<ul>
  <li>
    <Paragraph><Card character={character.name}/></Paragraph>
    <Paragraph></Paragraph>
    <Paragraph></Paragraph>
    <Paragraph></Paragraph>
  </li>
</ul>

  </Main>
  
   </>
)
};


export default App;
