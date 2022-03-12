import React, { useEffect, useState } from "react";
import { useParams, Link } from 'react-router-dom';
import apiService from "../services/api.service";

function Detail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});
  
  const getRecipe = async () => {
      try {
          const response = await apiService.getRecipeById(id);
          setRecipe(response.data.recipe)
      } catch(error){
      console.log(error)
  }
};

  useEffect(() => {
    getRecipe();
  }, []);

 return (  
 <div className="recipeDetail">
 <h1>Detail</h1>

        <ul>
            <b>Recipe name:</b>
            <p>{recipe.name}</p>

            <b>Preparation time:</b>
            <p>{recipe.prepTime}</p>

            <b>Coocking time:</b>
            <p>{recipe.coockingTime}</p>

            <b>Total time:</b>
            <p>{recipe.totalTime}</p>

            <b>Difficulty:</b>
            <p>{recipe.difficulty}</p>

            <b>Type:</b>
            <p> {recipe.type}</p>

            <b>Ingredients:</b>
            <p> {recipe.ingredients}</p>

            <b>Description:</b>
            <p> {recipe.description}</p>
        </ul>

    <Link to={`/edit/${recipe._id}`}>Edit</Link>

 </div>

 )}

export default Detail;