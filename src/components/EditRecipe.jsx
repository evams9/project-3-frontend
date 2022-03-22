import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import apiService from "../services/api.service";
import { useNavigate, Link } from 'react-router-dom';
import back from '../assets/img/back.png';



function EditRecipe() {
  const { id } = useParams();
  // const [recipe,setRecipe] = useState({});
  const [Rname, setName] = useState("");
  const [prepTime, setPrepTime] = useState("");
  const [diners, setDiners] = useState("");
  const [level, setLevel] = useState("");
  const [category, setCategory] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState(undefined);
  const navigate = useNavigate();

  const handleReceipeName = (e) => {
    setName(e.target.value);
    console.log(Rname)
  }

  const handlePrepTime = (e) => {
    setPrepTime(e.target.value);
    console.log(prepTime)
  }

    const handleDiners = (e) => {
    setDiners(e.target.value);
    console.log(diners)
  }

    const handleLevel = (e) => {
    setLevel(e.target.value);
    console.log(level)
  }

    const handleCategory = (e) => {
    setCategory(e.target.value);
    console.log(category)
  }

    const handleIngredients = (e) => {
    setIngredients(e.target.value);
    console.log(ingredients)
  }

    const handleDescription = (e) => {
    setDescription(e.target.value);
    console.log(description)
  }

    const handleImage = (e) => {
    const uploadData = new FormData();
    uploadData.append("imageUrl", e.target.files[0]);
    apiService.uploadImage(uploadData).then((response) => setImageUrl(response.data.fileUrl)).catch((error) => console.log(error));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    apiService.editRecipe( id, { name: Rname, preparationTime: prepTime, diners, level, category, ingredients, description, imageUrl}).then((response) => {
      navigate(`/recipes/${response.data._id}`);
    }).catch(error => console.log(error))
  }
  
  const getRecipe = async () => {
      try {
          const response = await apiService.getRecipeById(id);
          console.log(response);
          setName(response.data.recipe.name);
          setPrepTime(response.data.recipe.preparationTime);
          setDiners(response.data.recipe.diners);
          setLevel(response.data.recipe.level);
          setCategory(response.data.recipe.category);
          setIngredients(response.data.recipe.ingredients);
          setDescription(response.data.recipe.description);
          setImageUrl(response.data.recipe.imageUrl);
      } catch(error){
      console.log(error)
  }
};

  useEffect(() => {
    getRecipe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (  
 <div className="newRecipe">   
 <Link to={"/mine"}><img src={back} alt="back" id="back-edit"/></Link>
    <h1 id="form-title"> New recipe</h1>
    <form action="/api/new" method="POST" onSubmit={handleSubmit} id="form">


        <div className="form-input">
          <label>Name</label>
          <input type="text" name="Rname" placeholder="Recipe name" value={Rname} onChange={handleReceipeName}/> 
        </div>

        <div className="form-input">
          <label>Ingredients</label>
          <input type="ingredients" name="ingredients" placeholder="ingredients" value={ingredients} onChange={handleIngredients}/> 
        </div>

        <div className="form-input">
          <label>Time preparation (min)</label>
          <select  name="prepTime" placeholder="Time preparation" value={prepTime} onChange={handlePrepTime}> 
            <option value="5-15 min">5-15 min</option>
            <option value="20-30 min">20-30 min</option>
            <option value="30-40 min">30-40 min</option>
            <option value="50-60 min">50-60 min</option>
            <option value="+ 60 min">+ 60 min</option>
          </select>
        </div>


        <div className="form-input">
          <label>Diners</label>
          <input type="number" name="diners" placeholder="diners" value={diners} onChange={handleDiners}/> 
        </div>

        <div className="form-input">
          <label>Level</label>
            <select id="level" name="level" value={level} onChange={handleLevel}>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Chef">Chef</option>
          </select>
        </div>

        <div className="form-input">
          <label>Category</label>
            <select id="category" name="category"  value={category} onChange={handleCategory}>
                <option value="Breakfast">Breakfast</option>
                <option value="Snack">Snack</option>
                <option value="Dessert">Dessert</option>
                <option value="Rice">Rice</option>
                <option value="Asias">Asian</option>
                <option value="Meat">Meat</option>
                <option value="Fish">Fish</option>
                <option value="Cream/Soup">Cream/Soup</option>
                <option value="Salad">Salad</option>
                <option value="Pasta">Pasta</option>
                <option value="Sauces">Sauces</option>
                <option value="Vegetarian/Vegan">Vegetarian/Vegan</option>
                <option value="Other">Other</option>
          </select>
        </div>


        <div className="form-input">
          <label>Description</label>
          <input type="textarea" name="description" placeholder="description" value={description} onChange={handleDescription}/> 
        </div>

        <div className="form-input">
          <label>Image</label>
          <input type="file" onChange={handleImage}/> 
        </div>
            

        <div className="form-button">
            <button id="button-style" type="submit">Done!</button>
        </div>
    </form>

 </div>

 )}


export default EditRecipe;