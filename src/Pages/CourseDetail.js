import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Button } from 'reactstrap';
import Loader from 'react-loader-spinner';
import { fetchCourseById } from '../Redux/Actions'

const CourseDetail = () => {

    const dispatch = useDispatch();

    let { id } = useParams();
    

    useEffect(() => dispatch(fetchCourseById(id)), []);

    const course = useSelector(state => state.course) 

    const coursetoRender = course.courseById
    console.log(coursetoRender)
    console.log(typeof(coursetoRender))

    console.log(coursetoRender[0].name)


    const renderDetailCourse = () => {
        
        

            return(
                <div> 
                    <h1> tess </h1>
                </div>
            )
        }
    

    return(
        <div className='row mr-0'>
            {renderDetailCourse()}
            <h1> Haloo </h1>
        </div>
    )

}

export default CourseDetail;