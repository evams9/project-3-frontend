import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to your profile {}</h1>
        <Link to="/new">New recipes </Link>
        <Link to="/mine">My recipes </Link>
        <Link to="/all">All recipes </Link>
    </div>
  );
}

export default Home;
