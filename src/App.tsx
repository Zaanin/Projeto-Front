// App.jsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Router as AppRouter } from './routes/router';

function App() {
  return (
    <Router>
      <AppRouter />
    </Router>
  );
}

export default App;
