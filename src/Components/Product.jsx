import React from 'react';

const Product = ({ img, name, price, aksiya, reting }) => {
  return (
    <div className="border rounded shadow-sm hover:shadow-md transition flex flex-col justify-between">
    
      <div className="relative">
        <img src={img} alt={name} className="h-48 w-full object-contain bg-white p-4" />
        {aksiya && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
            -{aksiya}
          </div>
        )}
      </div>
      <div className="p-4 flex flex-col gap-1">
        <h2 className="text-base font-semibold">{name}</h2>
        <div className="flex gap-2 items-center">
          <p className="text-red-600 font-semibold">${price}</p>
          {aksiya && (
            <span className="line-through text-sm text-gray-400">
              ${(price * 1.2).toFixed(0)}
            </span>
          )}
        </div>
        <p className="text-yellow-500 text-sm">⭐ {reting}</p>
      </div>
      
      <button className="w-full h-10 bg-black text-white text-sm font-medium hover:bg-gray-900 transition">
        Add to Cart
      </button>
    </div>
  );
};

export default Product;

