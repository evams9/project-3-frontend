import {useEffect, useState} from "react";
import apiService from "../services/api.service";


function AllRecipes() {
const [recipes, setRecipes] = useState([])

useEffect(() => {
 apiService.getAllRecipes().then((response) => {
  setRecipes(response.data.recipe)
 });
}, []);

 return (
  <div>
    <h1>All recipes</h1>
    {recipes.map(element => <p key={element._id}>{element.name}</p>)}

  </div>

 )


}

export default AllRecipes;