import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Button } from 'reactstrap';
import Loader from 'react-loader-spinner';
import Swal from 'sweetalert2';
import { fetchCourseById } from '../Redux/Actions'
import { ProgramDesc } from '../Component/ProgramDescriptions'

const CourseDetail = () => {

    // Get Course Data

    let { id } = useParams();
    const dispatch = useDispatch();
    useEffect(() => dispatch(fetchCourseById(id)), [])
    const courseData = useSelector(state => state.course.courseById)
    const user = useSelector(state => state.user)

    const token = user.token

    const onEnrollmentClick = () =>{
        if(!token){
            Swal.fire({
                title: 'You Need To Login',
                confirmButtonColor: 'white',
                confirmButtonText: '<a href="/login"> Login </a>'
              })
        }
    }

    return (

        <div className='row mr-0' style={{minHeight:'700px', marginTop:'50px', marginRight:'70px', marginLeft:'70px'}}>
            <div style={{ marginLeft: 70, marginTop: 30}} >
                {
                    courseData.image
                    ?
                    <img src={courseData.image} alt={courseData.name} width='300px' height='220px' />
                    :
                    <Loader type="Circles" color='grey' height={80} width={80} />
                }
            </div>
            <div className='col-8 container' style={{ marginTop:20}}>
                <div className='py-1'>
                    <h3>
                        {courseData.name}
                    </h3>
                </div>
                <div className='py-1'>
                    <h5>
                       Subject :  {courseData.subject}
                    </h5>
                </div>
                <div className='py-1'>
                    <h5>
                       Program : {courseData.program}
                    </h5>
                </div>
                <div className='py-1'>
                    {
                        courseData.price
                        ?
                        <h5>
                           Tuition Fee :  Rp.{courseData.price.toLocaleString()}
                        </h5>
                        :
                        null
                    }
                </div>
                <div className='py-1'>
                    <p>
                        {ProgramDesc(courseData.program)}
                    </p>
                </div>
                {
                    user.token?
                    <Button href={`/enrollmentform/${courseData.id}`} color='primary'>
                        Enroll Now
                    </Button>
                    :
                    <div>
                        <p> You Need Login To Enroll This Course</p>
                        <Button href="/login" color='primary'>
                            Login
                        </Button>
                    </div>

                }
                    
            </div>
            
        </div> 
    )
}

export default CourseDetail;