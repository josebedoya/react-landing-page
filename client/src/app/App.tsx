import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../assets/styles/main.scss';
import PagesRoute from '../components/AppRoute/PagesRoute';

const App: React.FC = () => {
  return (
    <Router>
      <Route component={PagesRoute} />
    </Router>
  );
}

export default App;
