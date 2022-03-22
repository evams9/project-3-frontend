import {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import apiService from "../services/api.service";
//import egg from '../assets/img/egg.png';

function MyRecipes() {
const [recipes, setRecipes] = useState([])

const getRecipes = async() => {
  try {
    const response = await apiService.getMyRecipes();
    setRecipes(response.data.recipes);
  }catch(error){
    console.log(error);
  }
}

useEffect(() => {
  getRecipes();
}, []);

 return (
  <div>
    <h1 id="detail-title">My recipes</h1>
    {recipes.map(element => (

     <div key={element._id}>
       <Link to={`/recipes/${element._id}`}><img src={element.imageUrl}/><p id="name-recipe">{element.name}</p></Link>
       
       </div>)
    )}
  </div>

 )}

export default MyRecipes;