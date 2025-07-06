import React from 'react';
import Header from './Components/Header';
import ProductList from './Components/ProductList';

const App = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      <Header />
      <div className="px-10 py-6">
        <h1 className="text-2xl font-semibold mb-6">Products</h1>
        <ProductList />
      </div>
    </div>
  );
};

export default App;
