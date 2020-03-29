import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import Axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import TextField from '@material-ui/core/TextField';
import Button from '../Component/CustomButtons/Button';
import Title from './Dashboard/Sections/Title';
import { API_URL } from '../Support/API_URL';
import { Logout } from '../Redux/Actions'


const MyProfile = () => {
    
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)

    const [formEdit, setFormEdit] = useState({
        id : user.id,
        firstName : user.firstName,
        lastName : user.lastName,
        email : user.email,
        address : user.address
    })
    

    const [openEdit, setOpenEdit] = useState(false)

    const onBtnEditProfile = () => {
        setOpenEdit(!openEdit)
    }
    const handleOnChange = (e) => {
        setFormEdit({
            ...formEdit,
            [e.target.name] : e.target.value
        })
    }
    console.log(formEdit)

    const onBtnSave = () => {
        
        const data = formEdit
        const token = localStorage.getItem('token');
        const headers = {
            headers : {
                'Authorization': `Bearer ${token}`
            }
        }
        Axios.patch(`${API_URL}/users/editprofile` , data, headers )
                    .then((res) => {
                        Swal.fire({
                            title: 'Edit Profile Success',
                            text: `You need to relogin`,
                            confirmButtonColor: 'white',
                            confirmButtonText: '<a href="/login"> Login </a>'
                          })
                        dispatch(Logout())
                        localStorage.removeItem('token')

                    }).catch((err) =>{
                        console.log(err)
                    })
    }

    if(openEdit){
        return (
            <div style={{ minHeight:'700px', marginRight:'100px', marginLeft:'100px' }} >
                <div align="center">
                    <Title > Edit Profile </Title>
                </div>
            <Table size="small">
                <TableHead>
                <TableRow>
                    
                </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell> Name </TableCell>
                        <TableCell> 
                        <TextField
                            fullWidth
                            label="First Name"
                            required
                            defaultValue={user.firstName}
                            name="firstName"
                            onChange={handleOnChange}
                            required
                        />
                        <TextField
                            fullWidth
                            label="Last Name"
                            required
                            defaultValue={user.lastName}
                            name="lastName"
                            onChange={handleOnChange}
                            required
                        />
                        </TableCell>

                    </TableRow>
                    <TableRow>
                        <TableCell> Email  </TableCell>
                        <TableCell> 
                            <TextField
                                fullWidth
                                label="Email"
                                required
                                defaultValue={user.email}
                                name="email"
                                onChange={handleOnChange}
                            />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell> Address </TableCell>
                        <TableCell>
                            <TextField
                                fullWidth
                                label="Address"
                                required
                                defaultValue={user.address}
                                name="address"
                                onChange={handleOnChange}
                            />
                        </TableCell>
                    </TableRow>  
                    <TableRow>
                        <TableCell> You Need To Relogin After Editing Profile </TableCell>
                    </TableRow>  
                </TableBody>
                <TableFooter >
                    <Button onClick={onBtnSave} color='twitter' >
                        Save
                    </Button> 
                    <Button onClick={onBtnEditProfile} color='white' >
                        Cancel
                    </Button> 
                </TableFooter>
            </Table>
            </div>
        )

    }
    else{
        return (
            <div style={{ minHeight:'700px', marginRight:'400px', marginLeft:'400px' }} >
                <div align="center">
                    <Title > My Profile </Title>
                </div>
            <Table size="small">
                <TableHead>
                <TableRow>
                    
                </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell> Name </TableCell>
                        <TableCell> {user.firstName} {user.lastName}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell> Email  </TableCell>
                        <TableCell> {user.email} </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell> Address </TableCell>
                        <TableCell> {user.address} </TableCell>
                    </TableRow>  
                    <TableRow>
                        <TableCell> </TableCell>
                    </TableRow>  
                </TableBody>
                <TableFooter >
                    <TableCell></TableCell>
                    <Button onClick={onBtnEditProfile} color='twitter' >
                        Edit Profile
                    </Button> 
                    <TableCell></TableCell>
                </TableFooter>
            </Table>
            </div>
        ) 
    }
}

export default MyProfile;