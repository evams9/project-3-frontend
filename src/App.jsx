import { Route, Routes } from 'react-router-dom';
import IsAnon from './components/IsAnon';
import IsPrivate from './components/IsPrivate';
import Navbar from './components/Navbar';
import { AuthProviderWrapper } from './context/auth.context';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import Protected from './pages/Protected';
import SignupPage from './pages/SignupPage';
import NewRecipe from './components/NewRecipe';
import AllRecipes from './components/AllRecipes';
import MyRecipes from './components/MyRecipes';
import Detail from './components/Detail';
import EditRecipe from './components/EditRecipe';




function App() {
  return (
    <AuthProviderWrapper>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/protected"
          element={
            <IsPrivate>
              <Protected />
            </IsPrivate>
          }
        />
        <Route
          path="/login"
          element={
            <IsAnon>
              <LoginPage />
            </IsAnon>
          }
        />
        <Route
          path="/signup"
          element={
            <IsAnon>
              <SignupPage />
            </IsAnon>
          }
        />
        <Route path="/new" element={<NewRecipe />} />

        <Route path="/all" element={<AllRecipes />} />

        <Route path="/mine" element={<MyRecipes />} />

        <Route path="/edit/:id" element={<EditRecipe />} />

        <Route path="/recipes/:id" element={<Detail />} />

        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </AuthProviderWrapper>
  );
}

export default App;
