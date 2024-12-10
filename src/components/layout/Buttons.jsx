// src/components/Buttons.jsx
import React, { useEffect, useState } from "react";
import { logout } from '../../util/authService.js'

const Buttons = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Verifica si existe un token en el localStorage
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token); // Actualiza el estado dependiendo de si el token existe o no
  }, []);

  const handleLogout = async () => {
    try{
        await logout();
        window.location.href = "/"; // Redirige al usuario a la página de inicio

    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  }

  return (
    <div className="flex items-center space-x-2 sm:space-x-3">
      {!isAuthenticated ? (
        <>
          <a
            href="/login"
            className="px-4 py-2 text-white bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 rounded-md text-sm font-medium transition"
          >
            Ingresar
          </a>
          <a
            href="/register"
            className="px-4 py-2 text-white bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 rounded-md text-sm font-medium transition"
          >
            Registrarse
          </a>
        </>
      ) : (
        <>
            <a
            href="/intranet"
            className="px-4 py-2 text-white bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 rounded-md text-sm font-medium transition"
            >
            Intranet
            </a>
            <a
            href="/"
            className="px-4 py-2 text-white bg-[rgb(220 38 38)] hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 rounded-md text-sm font-medium transition"
            onClick={handleLogout}
            >
            Salir
            </a>
        </>
      )}
    </div>
  );
};

export default Buttons;
