import './App.css';

import { Link, Route, Routes, Navigate } from 'react-router-dom';

import { NotFound } from './views/NotFound';
import { AllProducts } from './views/AllProducts';
import { OneProduct } from './views/OneProduct';
import { EditProduct } from './views/EditProduct';
import { AddProduct } from './components/AddProduct';

function App() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top justify-content-center mb-4">
        <h1>Product Manager</h1>
      </nav>
      <AddProduct/>
      <hr />
      <Routes>
        <Route path="/" element={<Navigate to='/products' replace />} />
        {/* <Route path="/products" element={<AddProduct />} /> */}
        <Route path="/products" element={<AllProducts />} />
        <Route path="/products/:id" element={<OneProduct />} />
        <Route path="/products/:id/edit" element={<EditProduct />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      
    </div>
  );
}

export default App;
