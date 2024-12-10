import api from './api.js';

//Registro de usuarios
export const register = async (data) => {
    const response = await api.post('/register', data);
    return response.data;
}

//Login de usuarios
export const Login = async (data) => {
    const response = await api.post('/login', data);
    return response.data;
}

export const getUser = async () => {
    const response = await api.get('/me');
    console.log(response.data)
    return response.data;
}

// Logout
export const logout = async () => {
    const response = await api.post('/logout');
    localStorage.removeItem('token'); 
    localStorage.removeItem('tipo_usuario'); 
    return response.data;
  };