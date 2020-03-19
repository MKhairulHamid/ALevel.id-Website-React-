import React, { useState, useEffect, useRef } from 'react';
import { Table, Button, Input } from 'reactstrap';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { API_URL } from '../Support/API_URL';
import { fetchCourse } from '../Redux/Actions';





const ManageCourses = () => {
    
    // State Declaration 

    const [formInputAdd, setFormAdd] = useState({
        name : '',
        subject : '',
        price: null,
        program: 'IGCSE',
        image: ''
    })

    const [formInputEdit, setFormEdit] = useState({
        name : '',
        subject : '',
        price: null,
        program: 'IGCSE',
        image: ''
    })

    const [selectedCourse, setSelected] = useState({
        selectedId : null
    })

    // Fetch Global State =================================
    
    const dispatch = useDispatch();

    useEffect(() => dispatch(fetchCourse()), []);

    const user = useSelector(state => state.user)
    const course = useSelector(state => state.course)

    // Add Function ======================================

    const handleOnChageAdd = (e) => {
        setFormAdd({
            ...formInputAdd,
            [e.target.name] : e.target.value
        })    
    }

    const addCourse = () =>{
        
        const token = localStorage.getItem('token');

        
        const headers = {
            headers : {
                'Authorization': `Bearer ${token}`
            }
        }
        

        axios.post(API_URL + '/courses/addcourse', formInputAdd, headers)
            .then(() => {
                setFormAdd({
                    name : '',
                    subject : '',
                    price: null,
                    program: 'IGCSE',
                    image: ''
                })
                dispatch(fetchCourse())
                window.location.reload(false)
                
            })
            .catch((err) => {
                alert('Upload Failed')
            })   
    }


   // Edit Function ============================================


    const selectEdit = (id) => {
        setSelected({
            selectedId : id
        })
        
    }

    const handleOnChageEdit = (e) => {
        setFormEdit({
            ...formInputEdit,
            [e.target.name] : e.target.value
        })    
    }

    

    const confirmEdit = id => {

        var { name, subject, price, program, image } = formInputEdit

        var data = {
            id,
            name,
            subject,
            price,
            program,
            image
        }


        const token = localStorage.getItem('token');

        
        const headers = {
            headers : {
                'Authorization': `Bearer ${token}`
            }
        }

        axios.patch(API_URL + '/courses/editcourse', data, headers)
            .then(() => {
                dispatch(fetchCourse())
                window.location.reload(false)

            })
            .catch((err) => {
                alert('Upload Failed')
            }) 

    }

    // Delete Fuction ============================================

        const deleteData = (id, image) => {
            
            const token = localStorage.getItem('token');

            const headers = {
                headers : {
                    'Authorization': `Bearer ${token}`
                }
            }
            console.log(headers)

            Swal.fire({
                title: 'Are you sure to delete?',
                text: "You won't be able to revert this!",
                imageUrl: image,
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes'
              }).then((result) => {
                if (result.value) {
                    axios.delete(`${API_URL}/courses/deletecourse/${id}`,null, headers)
                    .then((res) => {
                        console.log(res.data)
                        dispatch(fetchCourse())
                        Swal.fire(
                          'Deleted!',
                          'Your file has been deleted.',
                          'success'
                        )
                    })
                    window.location.reload(false)
                }
              })
              .catch((err) => {
                  alert('error')
                  console.log(err)
              })
        }


    // Render Function ===========================================

    const renderCourses = () => {
        
        return course.coursesList.map((val) => {            
            if(val.id === selectedCourse.selectedId){    
                return (
                    <tr key={val.id}>
                        <td> </td>
                        <td>
                            <Input defaultValue={val.name} name='name' onMouseMove={handleOnChageEdit} onChange={handleOnChageEdit} />
                        </td>
                        <td>
                            <Input defaultValue={val.subject} name='subject' onMouseMove={handleOnChageEdit} onChange={handleOnChageEdit} />
                        </td>
                        <td>
                            <Input defaultValue={val.price} name='price' onMouseMove={handleOnChageEdit} onChange={handleOnChageEdit} />
                        </td>
                        <td>
                            <Input type='select' defaultValue={val.program} name='program' onMouseMove={handleOnChageEdit} onChange={handleOnChageEdit} >
                                    <option> IGCSE  </option>
                                    <option> AS Level </option>
                                    <option> A Level </option>
                            </Input>
                        </td>
                        <td>
                        <Input defaultValue={val.image} name='image' onMouseMove={handleOnChageEdit} onChange={handleOnChageEdit} />
                        </td>
                        <td>
                            <Button color='danger' onClick={() => setSelected({selectedId: null})} >
                                Cancel
                            </Button>
                        </td>
                        <td>
                            <Button color='primary' onClick={()=> confirmEdit(val.id) } >
                                Save
                            </Button>
                        </td>
                    </tr>
                )
            } 
            return(
                <tr key={val.id}>
                    <td>{val.id}</td>
                    <td>{val.name}</td>
                    <td>{val.subject}</td>
                    <td>{val.price}</td>
                    <td>{val.program}</td>
                    <td> <img src={val.image} alt={val.name} height='160px' width='200px' /> </td>
                    <td>
                        <Button color='success' onClick={() => selectEdit(val.id)}  >
                            Edit
                        </Button>
                    </td>
                    <td>
                        <Button color='danger' onClick={() => deleteData(val.id, val.image)}>
                            Delete
                        </Button>
                    </td>
                </tr>
            ) 
        })
    }

    // Default Return =========================================================

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
                        <td> {course.coursesList.length + 1}</td>
                        <td> <Input placeholder='Name' name='name' onChange={handleOnChageAdd}/> </td>
                        <td> <Input placeholder='Subject' name='subject' onChange={handleOnChageAdd}  /> </td>
                        <td> <Input type='number' placeholder='Price' name='price' onChange={handleOnChageAdd} /> </td>
                        <td>
                            <Input type='select'  placeholder='Program' name='program' onChange={handleOnChageAdd} >
                                <option> IGCSE  </option>
                                <option> AS Level </option>
                                <option> A Level </option>
                            </Input>
                        </td>
                        <td> <Input placeholder='Image' name='image' onChange={handleOnChageAdd} /></td>
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