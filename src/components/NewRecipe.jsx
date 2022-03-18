import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import apiService from '../services/api.service';
import egg from '../assets/img/egg.png';

function NewRecipe() {
  const [Rname, setName] = useState("");
  const [prepTime, setPrepTime] = useState("");
  const [diners, setDiners] = useState("");
  const [level, setLevel] = useState("");
  const [category, setCategory] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
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
    setImage(e.target.value);
    console.log(image)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    apiService.createNewRecipe({ name: Rname, preparationTime: prepTime, diners, level, category, ingredients, description}).then((response) => {
      navigate(`/recipes/${response.data.newRecipe._id}`);
    }).catch(error => console.log(error))
  }


 return (

 <div className="newRecipe">
 <h1 id="form-title"> New recipe</h1>
 
 <form action="/api/new" method="POST" onSubmit={handleSubmit} id="form">


        <div className="form-input">
          <label>Name</label>
          <input type="text" name="Rname" placeholder="Recipe name" value={Rname} onChange={handleReceipeName}/> 
        </div>

        <div className="form-input">
          <label>Ingredients</label>
          <input type="ingredients" name="ingredients" placeholder="Ingredients" value={ingredients} onChange={handleIngredients}/> 
        </div>

        <div className="form-input">
          <label>Diners</label>
          <input type="number" name="diners" placeholder="Diners" value={diners} onChange={handleDiners}/> 
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
          <label>Level</label>
            <select id="level" name="level" value={level} onChange={handleLevel}>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="chef">Chef</option>
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
          <input type="text" name="image" placeholder="Add image" value={image} onChange={handleImage}/> 
        </div>
            

        <div className="form-button">
            <button id="button-style" type="submit"><span>DONE!<img src={egg} alt="egg" id="egg" width="30px"/></span></button>
        </div>
    </form>

 </div>

 )}

export default NewRecipe;