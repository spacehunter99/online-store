import React from 'react';
import './style.scss'
import StoreHeader from '../StoreHeader';
import StorageContent from '../StoreContent';
import StoreFooter from '../StoreFooter';

function App() {
  return (
    <div className="main-container">
      <StoreHeader />
      <StorageContent />
      <StoreFooter />
    </div>
  );
}

export default App;
