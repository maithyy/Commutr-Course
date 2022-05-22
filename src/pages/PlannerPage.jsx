// This is the page that will display all the options for picking classes
// & showing the resulting schedules.

import { React } from 'react';
import styles from './PlannerPage.module.css';
import CourseSelectionComponent from '../components/CourseSelectionComponent/CourseSelectionComponent';
import ScheduleComponent from '../components/ScheduleComponent/ScheduleComponent';
// import CourseInputComponent from './components/courseInputComponent/CourseInputComponent';

function PlannerPage() {
    return (
        <div className={styles['Home']}>
            <div className={styles['title']}>
            petr planner
            </div>

            <div className={styles['boxes']}>
                <div className={styles['left']}>
                    <div className={styles['description']}>
                    welcome to petr planner, the perfect planning
                    tool for Peter the Commuter and his friends.
                    just enter your classes and we'll help you
                    find the best schedule for minimizing days
                    on campus and time between classes!
                    </div>

                    <div className={styles['title-tag']}>
                        enter your classes:
                    </div>
                    
                    <div className={styles['course-selection']}>
                        <CourseSelectionComponent />
                    </div>
                    
                    <button type="button" className={styles['get-schedule-button']}>get schedule</button>
                </div>

                <div className={styles['schedule']}>
                    <ScheduleComponent scheduleNum={1} />
                </div>
            </div>
        </div>
    );
};

export default PlannerPage;

