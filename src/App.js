import axios from 'axios';
import { useState } from 'react';
import './App.css';
import Recipe from './components/Recipe';



function App() {
const [query, setQuery] = useState('');
const [recipes, setRecipes] = useState([]);


const APP_ID = "a6d06141";
const APP_KEY = "da69f9528e7c2a41931d393b5e9342c5";

const getData = async () =>{
const result = await axios.get(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
setRecipes(result.data.hits);
console.log(result);
setQuery('');

}


const onChange =(e)=>{
  setQuery(e.target.value);
  
};

const onSubmit =(e)=>{
  e.preventDefault();
  getData();
    
  };
  return (
    <div className="containerHeader" >
    <h1>Buscador de recetas</h1>
    <form onSubmit={onSubmit}>
  
      <input type="text" placeholder= "¿Qué quieres hacer hoy?" autoComplete="off" onChange={onChange} value={query} ></input>
      <input className="submit" type="submit" value="buscar"></input>
    </form>
    <div className="recipes">
{recipes.map(recipe =>(<Recipe key={recipe.recipe.label} receiptData={recipe.recipe}></Recipe>))}
    </div>
    </div>
  );
}

export default App;
