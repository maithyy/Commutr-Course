import { React } from 'react';
import { PropTypes } from 'prop-types';
import styles from './CourseInfoComponent.module.css'

const CourseInfoComponent = ({courseTitle, instructor, when, where}) => {
    return (
        <div className={styles['course-info-component-container']}>
            <div className={styles['course-logistics']}>
                <div className={styles['individual-info']}><b>course title: </b>{courseTitle}</div> 
                <div className={styles['individual-info']}><b>instructor: </b>{instructor}</div>
                <div className={styles['individual-info']}><b>when: </b>{when}</div>
                <div className={styles['individual-info']}><b>where: </b>{where}</div>
                <div className={styles['individual-info']}><b>course code: </b>######</div>
            </div>
        </div>
    )
}

CourseInfoComponent.propTypes = {
    courseTitle: PropTypes.string.isRequired,
    instructor: PropTypes.string.isRequired,
    when: PropTypes.string.isRequired,
    where: PropTypes.string.isRequired,
}

export default CourseInfoComponent;