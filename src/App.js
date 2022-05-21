import { React } from 'react';

import styles from './App.module.css';
import Hacks from "./Hacks";
import Title from "./Title";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

// import CourseInputComponent from './components/courseInputComponent/CourseInputComponent';
import CourseSelectionComponent from './components/CourseSelectionComponent/CourseSelectionComponent';
import ScheduleComponent from './components/ScheduleComponent/ScheduleComponent';

function Home() {

  return (
    <Router>
      <div className={styles['Home']}>
        <div className={styles['title']}>
          petr planner
        </div>

        <div className={styles['description']}>
          welcome to petr planner, the perfect planning
          tool for Peter the Commuter and his friends.
          just enter your classes and we'll help you
          find the best schedule for minimizing days
          on campus and time between classes!
        </div>

        <div className={styles['boxes']}>
          <div className={styles['course-selection']}>
            <CourseSelectionComponent />
          </div>
          <div className={styles['schedule']}>
            <ScheduleComponent scheduleNum={1} />
          </div>
        </div>

        <Routes>
          <Route path='/Title' exact element={<Title />
          }>
          </Route>

          <Route path='/Hacks' exact element={<Hacks />
          }>
          </Route>

        </Routes>

      </div>
    </Router>
  );
}


export default Home;
