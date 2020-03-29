import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Swal from 'sweetalert2';
import Button from "../../Component/CustomButtons/Button";
import Title from '../Dashboard/Sections/Title';
import { API_URL } from '../../Support/API_URL';
import { fetchEnrollmentById } from '../../Redux/Actions';




const EnrollmentPage = () => {
  
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const enrollment = useSelector(state => state.enrollment)

  const data = enrollment.byUserId

  const onBtnCancel = ( id, courseName, courseSubject, courseProgram ) => {
    
    const token = localStorage.getItem('token');
    const headers = {
        headers : {
            'Authorization': `Bearer ${token}`
        }
    }
   
    Swal.fire({
      title: 'Are you sure to cancel this enrollment ?',
      text: `Cancel enrollment for ${courseName} - ${courseSubject} - ${courseProgram}`,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirm',
      showCancelButton: true
    })
    .then((result) => {
      if(result.value) {
        axios.patch(`${API_URL}/enrollment/cancel/${id}`,null, headers)
        .then((res)=> {
          dispatch(fetchEnrollmentById(user.id))
          Swal.fire(
            'Cancelled',
            'Your enrollment has been cancelled',
            'success'
          )
        })
        window.location.reload(false)
      }
    })
    .catch((err) => {
      alert('error')
      alert(err)
      console.log(err)
    })
  }
  
  const onBtnConfirm = (id, total) => {
    const totallocale = total.toLocaleString()
    const token = localStorage.getItem('token');
    const headers = {
        headers : {
            'Authorization': `Bearer ${token}`
        }
    }
   
    Swal.fire({
      title: 'Are you confirm already do payment transfer ?',
      text: `Transfer Confirmation to BCA (123456) an PT ALevel Edukasi Indonesia in Total : Rp. ${totallocale}`,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirm',
      showCancelButton: true
    })
    .then((result) => {
      if(result.value) {
        axios.patch(`${API_URL}/enrollment/confirmtransfer/${id}`,null, headers)
        .then((res)=> {
          dispatch(fetchEnrollmentById(user.id))
          Swal.fire(
            'Checking',
            'Please wait, our system is checking your payment',
            'success'
          )
        })
        window.location.reload(false)
      }
    })
    .catch((err) => {
      alert('error')
      alert(err)
      console.log(err)
    })
  }

  const renderEnrollment = () => {
    return data.map((val) => (
        <TableRow key={val.id}>
          <TableCell>{val.id}</TableCell>
          <TableCell>{val.courseName}- {val.courseSubject} - {val.courseProgram}</TableCell>
          <TableCell> {val.paymentConfirm} </TableCell>
          <TableCell>Rp.{val.totalAmount.toLocaleString()}</TableCell>
          <TableCell>
              {
                val.paymentConfirm==='Paid'?
                <Button color='twitter' >
                  Go to my courses
                </Button>
                :
                null
              }
              {
                val.paymentConfirm==='Unpaid'?
                <Button onClick={() => onBtnCancel(val.id, val.courseName, val.courseSubject, val.courseProgram )} color='white' >
                  Cancel Enrollment
                </Button>
                :
                null
              }
              {
                val.paymentConfirm==='Unpaid'?
                <Button onClick={() => onBtnConfirm(val.id,val.totalAmount )} color='success' >
                  Confirm Payment
                </Button>
                :
                null
              }
              {
                val.paymentConfirm==='Checking'?
                <Button  color='info' >
                  Please Wait 
                </Button>
                :
                null
              }
              
              
          </TableCell>
        </TableRow>
      ))
  }

  return (
    <div style={{ minHeight:'700px', marginRight:'100px', marginLeft:'100px' }} >
        <div align="center">
            <Title > My Enrollment </Title>
        </div>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Enrollment ID</TableCell>
            <TableCell>Course Detail</TableCell>
            <TableCell>Payment Status</TableCell>
            <TableCell>Total Payment</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {renderEnrollment()}
        </TableBody>
      </Table>
    </div>
  );
}

export default EnrollmentPage;