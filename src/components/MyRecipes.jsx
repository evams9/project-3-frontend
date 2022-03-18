import {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import apiService from "../services/api.service";

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
       <Link to={`/recipes/${element._id}`}>{element.name}</Link>
       
       </div>)
    )}
  </div>

 )}

export default MyRecipes;