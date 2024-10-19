import React from 'react'

const productCard = ({ product }) => {
  return (

    <a 
    href={product.path} 
    className="flex flex-col items-center bg-white rounded-lg shadow md:flex-row hover:bg-primary-100 dark:bg-primary-800 dark:hover:bg-primary-700 w-full max-w-4xl mx-auto"
  >
    <img 
      className="object-cover w-full rounded-t-lg h-64 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" 
      src={product.image} 
      alt={product.name}
    />
    <div className="flex flex-col justify-center items-start p-4 leading-normal flex-grow">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{product.description}</p>
      <p className="mb-3 font-normal text-gray-900 dark:text-white">${product.price}</p>
    </div>
  </a>

  )
}

export default productCard
