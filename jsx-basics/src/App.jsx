
import { useState } from 'react';
import './App.css'

const  App =()=> {

const [cambio, setCambio] = useState(true)

const tiempo = (hora) =>{

  if(hora < 12){
  return <p>buenos días</p>
} else if(hora >= 13 && hora <= 19)  {
  return <p>buenas tardes</p>
} else {
   return <p>buenas noches</p>
}
};

const animales = ["perro", "gato", "loro", "murciélago"];





  
return (
    <>
    
      {tiempo(20)}
     {animales.map((animal,index) => {return <p key={index}>{animal}</p>})}
     
      <button onClick={()=>setCambio(!cambio)}>Hola</button>
      {cambio ? <p>Está en true</p> : <p>Está en false</p>}
      
    </>
  )
  };

export default App