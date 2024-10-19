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
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-2xl font-bold text-primary-600 mb-4">${product.price.toFixed(2)}</p>
          <button className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition duration-300">
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;