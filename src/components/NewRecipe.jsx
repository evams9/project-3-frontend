import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import apiService from '../services/api.service';

function NewRecipe() {
  const [Rname, setName] = useState("");
  const [prepTime, setPrepTime] = useState("");
  const [cookingTime, setCoockingTime] = useState("");
  const [totalTime, setTotalTime] = useState("");
  const [level, setLevel] = useState("");
  const [category, setCategory] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleReceipeName = (e) => {
    setName(e.target.value);
    console.log(Rname)
  }

  const handlePrepTime = (e) => {
    setPrepTime(e.target.value);
    console.log(prepTime)
  }

    const handleCoockingTime = (e) => {
    setCoockingTime(e.target.value);
    console.log(cookingTime)
  }

    const handleTotalTime = (e) => {
    setTotalTime(e.target.value);
    console.log(totalTime)
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

  const handleSubmit = (e) => {
    e.preventDefault();
    apiService.createNewRecipe({ name: Rname, preparationTime: prepTime, cookingTime, totalTime, level, category, ingredients, description}).then((response) => {
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
          <label>Time preparation</label>
          <input type="number" name="prepTime" placeholder="Time preparation" value={prepTime} onChange={handlePrepTime}/> 
        </div>

        <div className="form-input">
          <label>Time cooking</label>
          <input type="number" name="cookingTime" placeholder="Time cooking" value={cookingTime} onChange={handleCoockingTime}/> 
        </div>

        <div className="form-input">
          <label>Total time</label>
          <input type="number" name="totalTime" placeholder="Total time" value={totalTime} onChange={handleTotalTime}/> 
        </div>

        <div className="form-input">
          <label>Difficulty</label>
            <select id="difficulty" name="difficulty" value={level} onChange={handleLevel}>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="cheff">Cheff</option>
          </select>
        </div>

        <div className="form-input">
          <label>Type</label>
            <select id="type" name="type"  value={category} onChange={handleCategory}>
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="snack">Snack</option>
                <option value="dinner">Dinner</option>
                <option value="dessert">Dessert</option>
                <option value="other">Other</option>
          </select>
        </div>

        <div className="form-input">
          <label>Ingredients</label>
          <input type="ingredients" name="ingredients" placeholder="ingredients" value={ingredients} onChange={handleIngredients}/> 
        </div>

        <div className="form-input">
          <label>Description</label>
          <input type="textarea" name="description" placeholder="description" value={description} onChange={handleDescription}/> 
        </div>
            

        <div className="form-button">
            <button id="button-style" type="submit">Done!</button>
        </div>
    </form>

 </div>

 )}

export default NewRecipe;