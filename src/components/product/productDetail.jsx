import React, { useState, useEffect } from 'react';
import { fetchProduct } from '../../util/service'; // Asegúrate de que esta ruta sea correcta
import CalendarForm from '../../components/contact/CalendarForm.astro'; 

const ProductDetails = ({ fullPath }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Verificar si el token existe en localStorage
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token); // Si hay token, es verdadero

    // Cargar los detalles del producto
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
          <p className="text-2xl font-bold text-primary-500 mb-4 text-center">
            Valor: ${product.price.toFixed(3)}
          </p>

          <button
            className="bg-[#25830d] text-white px-6 py-2 rounded-lg  hover:bg-primary-700 transition duration-300 w-full"
            href="https://wa.me/56934418828?text=Hola%2C%20me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20tus%20servicios."
            target="_blank"
          >
            Continuemos hablando por WhatsApp
          </button>
        </div>
      </div>

      {/* Condicional para mostrar el formulario del calendario */}
      {isAuthenticated && (
        <section id="agendar">
        <div class="flex justify-center mb-8">
            <h2 class="text-3xl font-medium tracking-tight sm:text-4xl">Agenda una reunion</h2>
        </div>
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 border border-white max-h-[1100px] dark:bg-primary-300 rounded-3xl">
          <div class="flex flex-col items-center gap-8 rounded-3xl px-5 py-16 sm:gap-10 max-h-[1100px]">
            <div class="flex flex-col gap-8 w-full items-center">
            {/* <!-- Google Calendar Appointment Scheduling begin --> */}
                <iframe 
                    src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1STChHSTAveS936HOVa02Hl1CEUWov4rVxGeYmwCqKY19Rtshbt1uX4QMPP7-oN_saPnmJJXD5?gv=true" 
                    // style="border: 0; border-radius: 8px; overflow: hidden" 
                    width="100%" 
                    height="1000" 
                >
                </iframe>
            {/* <!-- end Google Calendar Appointment Scheduling --> */}
             
            </div>
          </div>
        </div>
      </section>
      )}
    </div>
  );
};

export default ProductDetails;
