// This is the landing page that will be shown when you
// first reach the page w/ a short description
import { React } from 'react';
import { JournalBookmark } from 'react-bootstrap-icons';
import styles from './LandingPage.module.css';
import { Link } from "react-router-dom";

const LandingPage = () => {
    return (
        <div className={styles['landing-page-container']}>
            <div className={styles['page-title']}>peter planner</div>
            <div className={styles['peter-planner-desc']}>
                hi there! welcome to peter planner, the perfect planning tool for Peter the Commuter any any of his friends. just enter your classes and we’ll help you find the best schedule for minimizing days on campus and time between classes.
            </div>
            <div className={styles['peter-planner-link-container']}>
                {/* <JournalBookmark /> */}
                <Link to="/planner" className={styles['peter-planner-link']} src='images/petr_spaceship.png'>
                    {/* <JournalBookmark className={styles['link-icon']}/> */}
                    <div className={styles['link-text']}>go to peter planner</div>
                </Link>
            </div>
        </div>
    );     
};

export default LandingPage;