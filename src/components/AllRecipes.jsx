import {useEffect, useState} from "react";
import apiService from "../services/api.service";
import { Link } from 'react-router-dom';

function AllRecipes() {
const [recipes, setRecipes] = useState([])

useEffect(() => {
 apiService.getAllRecipes().then((response) => {
  setRecipes(response.data.recipe)
 });
}, []);

 return (
  <div>
    <h1 id="detail-title">All recipes</h1>
    {recipes.map(element => <Link key={element._id} to={`/recipes/${element._id}`}><img src={element.imageUrl}/><p id="name-recipe">{element.name}</p></Link>)}

  </div>

 )


}

export default AllRecipes;