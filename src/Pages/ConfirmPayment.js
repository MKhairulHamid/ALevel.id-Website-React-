import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Swal from 'sweetalert2';
import Button from "../Component/CustomButtons/Button";
import Title from './Dashboard/Sections/Title';
import { API_URL } from '../Support/API_URL';
import { fetchUnpaidEnrollment } from '../Redux/Actions';


const ConfirmPayment = () => {
  
  const dispatch = useDispatch()
  const enrollment = useSelector(state => state.enrollment)

  const data = enrollment.unpaid
  
  const onBtnConfirm = (id, bank, total) => {

    const totalamount = total.toLocaleString();
    const token = localStorage.getItem('token');

    const headers = {
        headers : {
            'Authorization': `Bearer ${token}`
        }
    }
    
    Swal.fire({
      title: 'Do you confirm this payment ?',
      text: `Receipt from Bank ${bank} in total amount : Rp ${totalamount} `,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirm',
      showCancelButton: true
    })
    .then((result) => {
      if (result.value) {
          axios.patch(`${API_URL}/enrollment/confirmpayment/${id}`,null, headers)
          .then((res) => {
              dispatch(fetchUnpaidEnrollment())
              Swal.fire(
                'Confirmed!',
                'Enrollment has been paid',
                'success'
              )
          })
          window.location.reload(false)
      }
    })
    .catch((err) => {
        
        console.log(err)
    })
  }

  const renderUnpaidEnrollment = () => {
    return data.map((val) => (
        <TableRow key={val.id}>
          <TableCell>{val.id}</TableCell>
          <TableCell>{val.firstName} {val.lastName} </TableCell>
          <TableCell>{val.courseName}- {val.courseSubject} - {val.courseProgram}</TableCell>
          <TableCell> {val.bankName} </TableCell>
          <TableCell>Rp {val.totalAmount.toLocaleString()}</TableCell>
          <TableCell>
              <Button onClick={() => onBtnConfirm(val.id, val.bankName , val.totalAmount)} color='white'  >
                  Confirm Payment
              </Button>
          </TableCell>
        </TableRow>
      ))
  }

  return (
    <div style={{ minHeight:'700px', marginRight:'100px', marginLeft:'100px' }} >
        <div align="center">
            <Title > Confirm Payment </Title>
        </div>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Enrollment ID</TableCell>
            <TableCell>Student Name</TableCell>
            <TableCell>Course Detail</TableCell>
            <TableCell>Bank Name</TableCell>
            <TableCell>Total Payment</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {renderUnpaidEnrollment()}
        </TableBody>
      </Table>
    </div>
  );
}

export default ConfirmPayment;