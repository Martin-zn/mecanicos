import React, { useState, useEffect } from 'react';
import { fetchProduct } from '../../util/service';  // Asegúrate de que esta ruta sea correcta

const ProductDetails = ({ fullPath }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadProduct() {
      try {
        const data = await fetchProduct(fullPath);
        if (data) {
          setProduct(data);
        } else {
          setError('Producto no encontrado');
        }
      } catch (err) {
        setError('Error al cargar el producto');
      } finally {
        setLoading(false);
      }
    }

    loadProduct();
  }, [fullPath]);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>{error}</div>;
  if (!product) return <div>Producto no encontrado</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8 mb-10">
        <div className="md:w-2/5">
          <img
            src={product.image1}
            alt={product.name}
            className="w-full max-h-[520px] h-auto object-cover rounded-lg shadow-lg dark:border dark:border-white "
          />
        </div>
        <div className="md:w-3/5">
          <h1 className="text-3xl font-bold mb-4 text-center">{product.name}</h1>
          <p className="text-gray-600 mb-4 text-center text-xl">{product.description}</p>
          <p className="text-2xl font-bold text-primary-500 mb-4 text-center">Valor: ${product.price.toFixed(3)}</p>

          {/* Contenedor para las propiedades del producto */}
          <div className="container flex flex-col items-center justify-center">
            {product.properties && product.properties.length > 0 ? (
              product.properties.map((property, index) => (
                <div
                  key={index}
                  id={`toast-${index}`}
                  className="flex items-center w-full max-w-xs p-4 mb-4 text-primary-700 bg-primary-100 rounded-lg shadow-xl dark:text-primary-400 dark:bg-primary-800"
                  role="alert"
                >
                  <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
                    <svg
                      className="w-5 h-5 text-blue-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className="sr-only">Check icon</span>
                  </div>
                  <div className="ms-3 text-sm font-normal">{property}</div>
                </div>
              ))
            ) : (
              <div>No hay propiedades disponibles</div>
            )}
          </div>

          <button
            className="bg-[#25830d] text-white px-6 py-2 rounded-lg  hover:bg-primary-700 transition duration-300 w-full"
            href="https://wa.me/56934418828?text=Hola%2C%20me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20tus%20servicios."
            target="_blank"
          >
            Continuemos hablando por WhatsApp
          </button>
        </div>
      </div>
      {product.image2 && (
      <h2 className='text-3xl font-bold mb-4 text-center'>Mas imagenes</h2>
      )}
        <div className="flex flex-col md:flex-row gap-8">
        {product.image2 && (
          <div className="md:w-1/2">
            <img
              src={product.image2}
              alt={product.name}
              className="w-full max-h-[500px] h-auto object-cover rounded-lg shadow-lg dark:border dark:border-white"
            />
          </div>
        )}
        {product.image3 && (
          <div className="md:w-1/2">
            <img
              src={product.image3}
              alt={product.name}
              className="w-full max-h-[500px] h-auto object-cover rounded-lg shadow-lg dark:border dark:border-white"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
