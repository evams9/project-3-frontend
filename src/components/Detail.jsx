import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from 'react-router-dom';
import apiService from "../services/api.service";
import back from '../assets/img/back.png';
import edit from '../assets/img/edit.png';
import deleteimg from '../assets/img/deleteimg.png';


function Detail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});
  const navigate = useNavigate();
  
  const getRecipe = async () => {
      try {
          const response = await apiService.getRecipeById(id);
          setRecipe(response.data.recipe)
      } catch(error){
      console.log(error)
  }
};

const handleDelete = async() => {
        try {
          await apiService.deleteRecipe(id);
          navigate('/');
      } catch(error){
      console.log(error)
  }
}

const handleBack = () => {
  navigate(-1);
}

  useEffect(() => {
    getRecipe();
  }, []);

 return (  
   
 <div className="detail">
 <button onClick={handleBack}><img src={back} alt="back" id="back" width="30px"/></button> 
  {/* <Link to={"/mine"}><img src={back} alt="back" id="back"/></Link>*/}
 <h1 id="detail-title">Detail</h1>
      <div className="detail-answer">
        <ul>
            <b>Recipe name:</b>
            <p>{recipe.name}</p>

            <b>Preparation time:</b>
            <p>{recipe.preparationTime}</p>

            <b>Diners:</b>
            <p>{recipe.diners}</p>

            <b>Level:</b>
            <p>{recipe.level}</p>

            <b>Category:</b>
            <p> {recipe.category}</p>

            <b>Ingredients:</b>
            <p> {recipe.ingredients}</p>

            <b>Description:</b>
            <p> {recipe.description}</p>
        </ul>
      </div>
    <div className="buttons-detail">
      <Link to={`/edit/${recipe._id}`}><img src={edit} alt="edit" id="edit" width="40px"/></Link>
      <button onClick={handleDelete}><img src={deleteimg} alt="delete" id="delete" width="35px"/></button>
    </div>
 </div>

 )}

export default Detail;