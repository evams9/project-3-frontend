import axios from 'axios';

class ApiService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_SERVER_URL || 'http://localhost:5005',
    });

    // Automatically set JWT token in the headers for every request
    this.api.interceptors.request.use(config => {
      // Retrieve the JWT token from the local storage
      const storedToken = localStorage.getItem('authToken');

      if (storedToken) {
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }

      return config;
    });
  }

  login = requestBody => {
    return this.api.post('/auth/login', requestBody);
    // same as
    // return axios.post("http://localhost:5005/auth/login");
  };

  signup = requestBody => {
    return this.api.post('/auth/signup', requestBody);
    // same as
    // return axios.post("http://localhost:5005/auth/singup");
  };

  verify = () => {
    return this.api.get('/auth/verify');
    // same as
    // return axios.post("http://localhost:5005/auth/verify");
  };

    getAllRecipes = () => {
    return this.api.get('/api/recipes/all');
    // same as
    // return axios.post("http://localhost:5005/auth/verify");
    }

    getMyRecipes = () => {
    return this.api.get('/api/recipes/mine');
  }

    createNewRecipe = (body) => {
     return this.api.post('api/recipes/new', body);
    }

    getRecipeById = id => {
      return this.api.get(`/api/recipes/${id}`);
    }

    editRecipe = (id, body) => {
       return this.api.put(`/api/recipes/edit/${id}`, body);
    }
  }

// Create one instance (object) of the service
const apiService = new ApiService();

export default apiService;
