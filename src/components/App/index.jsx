import React from 'react';
import './style.scss'
import StoreHeader from '../StoreHeader';
import StorageContent from '../StoreContent';

function App() {
  return (
    <div className="main-container">
      <StoreHeader />
      <StorageContent />
    </div>
  );
}

export default App;
