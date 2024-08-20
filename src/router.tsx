import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { ChanelVotes } from './pages/ChanelVotes';
import { PraisesVotes } from './pages/PraisesVotes';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ChanelVotes />} />
        <Route path="/louvores" element={<PraisesVotes />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
