import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import CourseCard from '../Component/CourseCard';
import { fetchCourse } from '../Redux/Actions';
import Loader from 'react-loader-spinner';

const CoursesPage = () => {

    const dispatch = useDispatch();

    useEffect(() => dispatch(fetchCourse()), []);

    const [selectedCourse, setSelected] = useState({
        selected : ''
    })

    const handleSelect = e => {
        setSelected({
            "selected" : e.value
        })
        
    }


    const course = useSelector(state => state.course) 
       

    const options = [
        { value: null, label : 'All'},
        { value: 'IGCSE', label: 'IGCSE' },
        { value: 'AS Level', label : 'AS Level' },
        { value: 'A Level', label : 'A Level' }
    ];


    const renderCardCourse = () => {

        var selectedCoursetoRender = course.coursesList.filter(function (e) {
            return e.program === selectedCourse.selected
        })

        if(selectedCourse.selected){
        return selectedCoursetoRender.map((val) => { 
            return(
                <Link to={`/course-detail/${val.id}`} key={val.id}>
                    <CourseCard 
                        name={val.name}
                        image={val.image}
                        price={val.price}
                        subject={val.subject}
                    />
                </Link>
            )
        })  
        } else {
            return course.coursesList.map((val) => { 
                return(
                    <Link to={`/course-detail/${val.id}`} key={val.id}>
                        <CourseCard 
                            name={val.name}
                            image={val.image}
                            price={val.price}
                            subject={val.subject}
                        />
                    </Link>
                )
            })
        }

    }


if(course.error){
    return (
        <div>
            Product Loading Error
        </div>
    )
}
if(course.loading){
    return(
        <div className='d-flex justify-content-center'>
            <Loader type="Circles" color="#5A6268" height={80} width={80} />
        </div>
    )
}

    return (
        <div className='d-flex'>
            <div className='col-2'> 
                <Select 
                    
                    onChange={handleSelect}
                    options={options} 
                    
                />
            </div>
            <div className='col-10'>
                <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                    {renderCardCourse()}
                </div>
            </div>    
        </div>
    )
    
}

export default CoursesPage;