import { useState } from "react";
import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import ReposList from "./components/RepostList";

function App() {
  const [formularioEstaVisivel, setFormularioVisivel] = useState(true);
  const [nomeUsuario, setNomeUsuario] = useState('')
  return(
    <>
    <input type="text"  onBlur={(e)=> setNomeUsuario(e.target.value)}/>
    {nomeUsuario.length > 4 &&(
    <>
      <Perfil nomeUsuario={nomeUsuario}/>
      <ReposList nomeUsuario={nomeUsuario}/>
    </>
    )}
    {/* {formularioEstaVisivel && (
      <Formulario/>
    )}
    <button onClick={() => setFormularioVisivel(!formularioEstaVisivel)}>Toggle</button> */}
    </>
  )
}

export default App
