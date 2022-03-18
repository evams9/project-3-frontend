import { Link } from 'react-router-dom';





function Home() {
{/*const { user } = useContext(AuthContext);*/}

  return (
    
    <div className="button-mine">
    <div>
       <ul> 
        <Link to="/new"><button id="button-new">NEW RECIPE</button></Link>
        <Link  to="/mine"><button id="button-mine">MY RECIPES </button></Link>
        <Link  to="/all"><button id="button-all">ALL RECIPES </button></Link>
       </ul>
    </div>
    </div>
  );
}

export default Home;
