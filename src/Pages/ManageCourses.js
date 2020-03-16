import React, { useState, useEffect } from 'react';
import { Table, Button, Input } from 'reactstrap';
import Axios from 'axios';
import Swal from 'sweetalert2';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { API_URL } from '../Support/API_URL';
import { fetchCourse } from '../Redux/Actions';




const ManageCourses = () => {

    const [formInput, setForm] = useState({
        name : '',
        subject : '',
        price: null,
        program: '',
        image: ''
    })

    const [selectedCourse, setSelected] = useState({
        id : ''
    })

    const dispatch = useDispatch();

    useEffect(() => dispatch(fetchCourse()), []);

    const user = useSelector(state => state.user)
    const course = useSelector(state => state.course)

    console.log(course.coursesList)

    const handleOnChange = (e) => {
        setForm({
            ...formInput,
            [e.target.name] : e.target.value
        })
    }

    const renderCourses = () => {
        
        return course.coursesList.map((val) => {
            if(val.id === selectedCourse.id){
                return (
                    <tr>
                        <td> </td>
                        <td>
                            <Input defaultValue={val.name} name='name' onChange={handleOnChange} />
                        </td>
                        <td>
                            <Input defaultValue={val.subject} name='subject' onChange={handleOnChange} />
                        </td>
                        <td>
                            <Input defaultValue={val.price} name='price' onChange={handleOnChange} />
                        </td>
                        <td>
                            <Input type='select' defaultValue={val.program} name='program' onChange={handleOnChange} >
                                    <option> IGCSE  </option>
                                    <option> AS Level </option>
                                    <option> A Level </option>
                            </Input>
                        </td>
                        <td>
                        <Input defaultValue={val.image} name='image' onChange={handleOnChange} />
                        </td>
                        <td>
                            <Button color='danger' onClick={setForm({id: null})} >
                                Cancel
                            </Button>
                        </td>
                        <td>
                            <Button>
                                Save
                            </Button>
                        </td>
                    </tr>
                )
            } 
            return(
                <tr>
                    <td>{val.id}</td>
                    <td>{val.name}</td>
                    <td>{val.subject}</td>
                    <td>{val.price}</td>
                    <td>{val.program}</td>
                    <td> <img src={val.image} alt={val.name} height='160px' width='200px' /> </td>
                    <td>
                        <Button>
                            Edit
                        </Button>
                    </td>
                    <td>
                        <Button>
                            Delete
                        </Button>
                    </td>
                </tr>
            ) 
        })
    }

    const addCourse = () =>{
        let { name, subject, price, program, image } = formInput

        let data = {
            name,
            subject,
            price,
            program,
            image
        }

        


        
    }

    if(2>3){
        return(
            <Redirect to='/'  /> 
        )
    }

    return (
        <div> 
            <Table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Subject</th>
                        <th>Price</th>
                        <th>Program</th>
                        <th>Image</th>
                        <th colSpan='2'>Action</th>

                    </tr>
                </thead>
                <tbody>
                    {renderCourses()}
                    
                </tbody>
                <tfoot>
                    <tr>
                        <td> </td>
                        <td> <Input placeholder='Name' name='name' onChange={handleOnChange} /> </td>
                        <td> <Input placeholder='Subject' name='subject' onChange={handleOnChange}  /> </td>
                        <td> <Input type='number' placeholder='Price' name='price' onChange={handleOnChange} /> </td>
                        <td>
                            <Input type='select'  placeholder='Program' name='program' onChange={handleOnChange} >
                                <option> IGCSE  </option>
                                <option> AS Level </option>
                                <option> A Level </option>
                            </Input>
                        </td>
                        <td> <Input placeholder='Image' name='image' onChange={handleOnChange} /></td>
                        <td>
                            <Button onClick={addCourse}>
                                Add Course
                            </Button>
                        </td>
                    </tr>
                </tfoot>
            </Table>
        </div>
    )

}

export default ManageCourses