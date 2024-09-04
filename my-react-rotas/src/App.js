import React, {useState} from "react";
import './App.css';
import Axios from "axios";


function App() {

const [values, setValues] = useState();
console.log(values);
const handleChangeValues = (value) =>{
setValues(prevValue=>({
  ...prevValue,
  [value.target.name]: value.target.value,
}))
}
const  handleClickbutton = () =>{
  Axios.post("http://localhost:3001/registro", {
    nome: values.nome,
    servico: values.servico,
    email: values.email
  }).then((response)=>{
    console.log(response)
  });
};
  return (
    <div className="App-container">
      <div className="registro">
    <h1>Cadastro</h1>
    <input type="text" name="nome" className="registro-nome" onChange={handleChangeValues} />
    <input type="text" name="servico" className="registro-nome" onChange={handleChangeValues} />
    <input type="text" name="email" className="registro-nome" onChange={handleChangeValues} />
     
    <button className="btn" onClick={handleClickbutton}>Cadastrar</button>
    </div>
    </div>
    
  );
}

export default App;
