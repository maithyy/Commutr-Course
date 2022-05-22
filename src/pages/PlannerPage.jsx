// This is the page that will display all the options for picking classes
// & showing the resulting schedules.

import axios from 'axios';
import { React, useState } from 'react';
import styles from './PlannerPage.module.css';
import CourseSelectionComponent from '../components/CourseSelectionComponent/CourseSelectionComponent';
import ScheduleComponent from '../components/ScheduleComponent/ScheduleComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowPointer } from '@fortawesome/free-solid-svg-icons';
// import CourseInputComponent from './components/courseInputComponent/CourseInputComponent';


const PlannerPage = () => {
    const [courses, setCourses] = useState([]);

    return (
        <div className={styles['Home']}>
            <div className={styles['title']}>
            commutr course
            </div>

            <div className={styles['boxes']}>
                <div className={styles['left']}>
                    <div className={styles['description']}>
                    welcome to commutr course, the perfect planning
                    tool for Petr the Commutr and his friends.
                    just enter your classes and we'll help you
                    find the best schedule for minimizing days
                    on campus and time between classes!
                    </div>

                    <div className={styles['title-tag']}>
                        enter your classes:
                    </div>
                    
                    <div className={styles['course-selection']}>
                        <CourseSelectionComponent
                            courses={courses}
                            setCourses={setCourses} 
                        />
                    </div>
                    
                    <button
                        type="button"
                        className={styles['get-schedule-button']}
                        onClick={() => console.log(courses)}
                    >
                        get schedule
                        <FontAwesomeIcon icon={faArrowPointer} className={styles['arrow-pointer']} />
                    </button>
                </div>

                <div className={styles['schedule']}>
                    <ScheduleComponent scheduleNum={1} />
                </div>
            </div>
        </div>
    );
};

export default PlannerPage;
