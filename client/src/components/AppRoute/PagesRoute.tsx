import React from 'react';
import { Switch } from 'react-router-dom';
import PublicRoute from './PublicRoute';
import HomePage from '../../pages/HomePage/HomePage';
import PastTrialsPage from '../../pages/PastTrialsPage/PastTrialsPage';
import HowItWorksPage from '../../pages/HowItWorksPage/HowItWorksPage';

const PagesRoute = () => {
  return (
    <Switch>
      <PublicRoute exact path='/' component={HomePage} />
      <PublicRoute exact path='/past-trials' component={PastTrialsPage} />
      <PublicRoute exact path='/how-it-works' component={HowItWorksPage} />
    </Switch>
  );
};

export default PagesRoute;
