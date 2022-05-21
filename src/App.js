import { React } from 'react';

import styles from './App.module.css';
import Hacks from "./Hacks";
import Title from "./Title";
import LandingPage from "./pages/LandingPage";
import PlannerPage from "./pages/PlannerPage";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

const Home = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<LandingPage />
          }>
          </Route>

          <Route path='/planner' element={<PlannerPage />
          }>
          </Route>

        </Routes>

      </div>
    </Router>
  );
}


export default Home;
