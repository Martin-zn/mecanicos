import React, { useState } from 'react';
import { register } from '../../util/authService.js';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    tipo_usuario: 'cliente', // Valor predeterminado
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await register(formData);
      alert('Registro exitoso');
      window.location.href = '/login'; // Redirigir al login
    } catch (err) {
      alert('Error al registrarse');
    }
  };

  return (

    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-xl w-full">

    <form onSubmit={handleSubmit}>
        
      <h2>Registro</h2>
        <div className='mb-3'>
            <input
            type="text"
            name="name"
            placeholder="Nombre"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md border border-gray-600 bg-gray-700 text-gray-300 focus:ring-2 focus:ring-primary-500 focus:outline-none"
            />
        </div>
        <div className='mb-3'>
            <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md border border-gray-600 bg-gray-700 text-gray-300 focus:ring-2 focus:ring-primary-500 focus:outline-none"
            />
        </div>
        <div className='mb-3'>
            <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md border border-gray-600 bg-gray-700 text-gray-300 focus:ring-2 focus:ring-primary-500 focus:outline-none"
            />
        </div>

      <button 
        type="submit"
        className="w-full py-2 px-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-md transition"
      >Registrarse</button>
    </form>
    </div>
    </div>
  );
};

export default RegisterForm;
