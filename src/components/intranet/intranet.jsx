import React, { useEffect, useState } from "react";

const IntranetPage = () => {
  const [user, setUser] = useState(null); // Información del usuario
  const [loading, setLoading] = useState(true); // Estado de carga

  useEffect(() => {
    const storedUserType = localStorage.getItem("tipo_usuario"); // Leer tipo_usuario desde localStorage

    if (storedUserType) {
      // Si encontramos el tipo de usuario en localStorage, configurar el estado
      setUser({ tipo_usuario: storedUserType });
      setLoading(false); // Detener el estado de carga
    } else {
      setUser(null); // Si no existe, no hay usuario
      setLoading(false); // Detener el estado de carga
    }
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg text-gray-700">Cargando...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg text-red-500">No autorizado</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {user.tipo_usuario === "cliente" ? (
        // Vista para clientes
        <div className="p-8 bg-white rounded-lg shadow-lg text-center">
          <h1 className="text-2xl font-bold text-gray-800">Bienvenido</h1>
          <p className="mt-4 text-gray-600">
            Aquí puedes ver los servicios disponibles .
          </p>
          <div className="mt-6">
            <h2 className="text-lg font-semibold">Tus datos:</h2>
            <p className="text-gray-600">
              <strong>Tipo de usuario:</strong> {user.tipo_usuario}
            </p>
          </div>
        </div>
      ) : user.tipo_usuario === "trabajador" ? (
        // Vista para trabajadores
        <div className="p-8 bg-white rounded-lg shadow-lg text-center">
          <h1 className="text-2xl font-bold text-gray-800">Bienvenido Trabajador</h1>
          <p className="mt-4 text-gray-600">
            Aquí puedes gestionar las reservas y los servicios.
          </p>
          <div className="mt-6">
            <h2 className="text-lg font-semibold">Crear un nuevo producto:</h2>
            <form className="mt-4">
              <div className="mb-4">
                <label className="block text-gray-700">Nombre del producto</label>
                <input
                  type="text"
                  name="nombre"
                  placeholder="Ej. Revisión mecánica"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Precio</label>
                <input
                  type="number"
                  name="precio"
                  placeholder="Ej. 88000"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Descripción</label>
                <textarea
                  name="descripcion"
                  placeholder="Ej. Una revisión exhaustiva de su vehículo"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring"
                ></textarea>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">URL de la imagen</label>
                <input
                  type="url"
                  name="imagen"
                  placeholder="https://ejemplo.com/imagen.webp"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring"
                />
              </div>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Crear Producto
              </button>
            </form>
          </div>
        </div>
      ) : (
        // Vista para otros casos
        <div className="p-8 bg-white rounded-lg shadow-lg text-center">
          <h1 className="text-2xl font-bold text-red-500">Acceso Denegado</h1>
          <p className="mt-4 text-gray-600">
            No tienes permiso para acceder a esta página.
          </p>
        </div>
      )}
    </div>
  );
};

export default IntranetPage;
