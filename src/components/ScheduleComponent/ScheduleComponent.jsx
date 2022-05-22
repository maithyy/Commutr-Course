import { React } from 'react';
import { PropTypes } from 'prop-types';
import { ArrowLeft, ArrowRight } from 'react-bootstrap-icons';
import styles from './ScheduleComponent.module.css';
import CourseInfoComponent from '../CourseInfoComponent/CourseInfoComponent';

const ScheduleComponent = ({scheduleNum, daysOnCampus, avgTime}) => {
    return (
        <div className={styles['schedule-component-container']}>
            <div className={styles['schedule-info-header']}>
                <div className={styles['schedule-num']}><i><b>schedule #{scheduleNum}</b></i></div>
                <div className={styles['schedule-days-on-campus']}>
                    days on campus: {daysOnCampus}
                </div>
                <div className={styles['schedule-avg-time']}>
                    average time between classes per day: {avgTime} hrs
                </div>
            </div>

            <div className={styles['courses-container']}>
                <CourseInfoComponent
                    courseTitle={"ICS 45C"}
                    instructor={"Thornton, A."}
                    when={"Tu/Th 5:00-6:20PM"}
                    where={"HIB 100"}
                    className={styles['individual-course']}
                />
                <CourseInfoComponent
                    courseTitle={"ICS 45C"}
                    instructor={"Thornton, A."}
                    when={"Tu/Th 5:00-6:20PM"}
                    where={"HIB 100"}
                    className={styles['individual-course']}
                />
                <CourseInfoComponent
                    courseTitle={"ICS 45C"}
                    instructor={"Thornton, A."}
                    when={"Tu/Th 5:00-6:20PM"}
                    where={"HIB 100"}
                    className={styles['individual-course']}
                />
                <CourseInfoComponent
                    courseTitle={"ICS 45C"}
                    instructor={"Thornton, A."}
                    when={"Tu/Th 5:00-6:20PM"}
                    where={"HIB 100"}
                    className={styles['individual-course']}
                />
                <CourseInfoComponent
                    courseTitle={"ICS 45C"}
                    instructor={"Thornton, A."}
                    when={"Tu/Th 5:00-6:20PM"}
                    where={"HIB 100"}
                    className={styles['individual-course']}
                />
            </div>
            <div className={styles['view-schedule-buttons']}>
                <button type="button" className={styles['get-schedule-button']}>
                    {/* <ArrowLeft className={styles['left-arrow']}/> */}
                    previous schedule
                </button>
                <button type="button" className={styles['get-schedule-button']}>
                    next schedule
                    {/* <ArrowRight className={styles['right-arrow']}/> */}
                </button>
            </div>
        </div>
    )
}

ScheduleComponent.propTypes = {
    scheduleNum: PropTypes.number.isRequired,
    daysOnCampus: PropTypes.number.isRequired,
    avgTime: PropTypes.number.isRequired,
}

export default ScheduleComponent;