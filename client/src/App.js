import './App.css';

import { Link, Route, Routes, Navigate } from 'react-router-dom';

import { NotFound } from './views/NotFound';
import { AllProducts } from './views/AllProducts';
import { OneProduct } from './views/OneProduct';
import { EditProduct } from './views/EditProduct';

function App() {
  return (
    <div className="container">
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
