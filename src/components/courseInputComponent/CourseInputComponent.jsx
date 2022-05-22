import { React } from 'react';
import { PropTypes } from 'prop-types';
// import Dropdown from 'react-bootstrap/Dropdown';
import styles from './CourseInputComponent.module.css';

const CourseInputComponent = ( {classNum, course, setCourse} ) => {

    // course is an array of format [department, class number]
    // ex: ["I&C SCI", "45C"]
    // console.log(course);

    return (
        <div className={styles['course-input-component-container']}>
            <div className={'class-number-desc'}><i>class #{classNum}</i></div>
            {/* <div>{classNumber}</div> */}
            <div className={styles["input-container"]}>
                <label for="department-name-input" className={styles['input-label']}>Department:</label>
                <input 
                    form="text"
                    name="department-name-input"
                    className={styles['input-text-field']}
                    placeholder={"e.g., I&C SCI"}
                    onChange={
                        (dpt) => {
                            setCourse([dpt.target.value, course[1]]);
                            // setCourseUpdated(courseUpdated + 1);
                            // console.log(course);
                    }}
                >
                </input>
                <label for="course-number-input" className={styles['input-label']}>Course Number:</label>
                <input
                    form="text"
                    name="course-number-input"
                    className={styles['input-text-field']}
                    placeholder={"e.g., 45C"}
                    onChange={(courseNum) => {
                        setCourse([course[0], courseNum.target.value]);
                        // setCourseUpdated(courseUpdated + 1);
                        // console.log(course);
                    }}
                >
                </input>
            </div>
        </div>
    );
}

CourseInputComponent.propTypes = {
    classNum: PropTypes.number.isRequired,
    course: PropTypes.array.isRequired,
    setCourse: PropTypes.func.isRequired,
    // courseUpdated: PropTypes.number.isRequired,
    // setCourseUpdated: PropTypes.func.isRequired,
}

export default CourseInputComponent;