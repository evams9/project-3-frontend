
function NewRecipe() {
 return 

 <div>
 <h1>New recipe</h1>
 
 <form action="/api/new" method="POST">


        <div>
          <label for="name">Name</label>
          <input type="text" name="name" placeholder="Recipe name"/> 
        </div>

        <div>
          <label for="prepTime">Time preparation</label>
          <input type="text" name="prepTime" placeholder="Time preparation"/> 
        </div>

        <div>
          <label for="cockingTime">Time coocking</label>
          <input type="text" name="coockingTime" placeholder="Time coocking"/> 
        </div>

        <div>
          <label for="totalTime">Total time</label>
          <input type="text" name="totalTime" placeholder="Total time"/> 
        </div>

        <div>
          <label for="name"></label>
          <input type="text" name="preparationTime" placeholder="Time preparation"/> 
        </div>

       {/* <div className="button-save">
            <button class="button-style" type="submit">Done!</button>
        </div>*/}
    </form>

 </div>

}

export default NewRecipe;