// This is the page that will display all the options for picking classes
// & showing the resulting schedules.

import axios from 'axios';
import { React, useState } from 'react';
import styles from './PlannerPage.module.css';
import CourseSelectionComponent from '../components/CourseSelectionComponent/CourseSelectionComponent';
import ScheduleComponent from '../components/ScheduleComponent/ScheduleComponent';
// import CourseInputComponent from './components/courseInputComponent/CourseInputComponent';

function convertTime(time_str){
    let x = ''
    if (time_str[time_str.length - 1] === 'p'){
        x = time_str.substring(0, time_str.length - 1).split('-') 
    } else {
        x = time_str.split('-') 
    }
    let start = x[0]
    let end = x[1]
    let start_num = Number.parseInt((start.split(':')[0].trim()), 10)
    let start_min = Number.parseInt((start.split(':')[1].trim()), 10)
    let end_num = Number.parseInt((end.split(':')[0].trim()), 10)
    let end_min = Number.parseInt((end.split(':')[1].trim()), 10)

    if (time_str.substring(0, time_str.length - 1)){
        if (start_num <= end_num){
            start_num += 12
        }
        end_num += 12

    return [start_num*60 + start_min, end_num*60 + end_min]
    }
}

function dataStructure(coursedata){ 
    //given coursedata json dict ugly thing, return a very specific data structure
    //the returned data structure is [[Lec A dict, [Dis1, Dis2, Dis3, ...]], [Lec B dict, [Dis1, Dis2,...]], more letter lecs]
    let course_sections = []

    let sections = coursedata['schools'][0]['departments'][0]['courses'][0]['sections']
    let inner = []
    let secondary = []
    let starting_section = 'A'

    sections.forEach(function(section){
        let section_num = section['sectionNum']
        let section_code = section['sectionCode']
        let section_type = section['sectionType']
        let days = section['meetings'][0]['days']
        let times = convertTime(section['meetings'][0]['time'])
        if (!isNaN(section)){
            section_num = starting_section + section_num
        }
        let details = {
            'sectionNum': section_num,
            'sectionCode': section_code,
            'sectionType': section_type,
            'days': days,
            'times': times
        }

        if (/^[a-zA-Z]+$/.test(section_num)){
            if (secondary.length !== 0){
                inner.push(secondary)
                course_sections.push(inner)
                inner = []
            }
            starting_section = section_num
            inner.push(details)
            secondary = []
        } else {
            secondary.push(details)
        }
    
    })
    if (course_sections.length === 0){
        course_sections.push([inner, []])
    }
    console.log(course_sections)
    return course_sections
}

function createCourseCombos(course_sections){ //this uses special data structure i made
    //returns a list [combos of class1, combos of class2, combos of class3] and combos of class 1 would be like [[lecA, dis1], [lecA, dis2],... and so on]
    let course_combos = []
    course_sections.forEach(function(course_sec){
        let possibles = []
        course_sec.forEach(function(my_tuple){
            let lec = my_tuple[0]
            let discussions_list = my_tuple[1]
            if (discussions_list.length !== 0){
                discussions_list.forEach(function(discussion){
                    possibles.push([lec, discussion])
            })
            } else {
                possibles.push([lec])
            }
        })
        course_combos.push(possibles)
    })
    return course_combos
}

function timeOverlap(course1, course2){
    let [s1, e1] = course1['times']
    let [s2, e2] = course2['times'] 
    return (s1 <= s2 <= e1 || s2 <= s1 <= e2)
}


const PlannerPage = () => {
    const [courses, setCourses] = useState([]);

    return (
        <div className={styles['Home']}>
            <div className={styles['title']}>
            commuter course
            </div>

            <div className={styles['boxes']}>
                <div className={styles['left']}>
                    <div className={styles['description']}>
                    welcome to commuter course, the perfect planning
                    tool for Peter the Commuter and his friends.
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

