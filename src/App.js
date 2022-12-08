import React from 'react';

import Comments from './Comments';
import Form from './Form';
import StoreProvider from './stores/StoreProvider';

import './style.css';

const App = () => {
  return (
    <StoreProvider>
      <div>
        <h1>Opinie </h1>
        <Comments />
        <Form />
      </div>
    </StoreProvider>
  );
};

export default App;
