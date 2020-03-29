import React from 'react';
import { useSelector } from 'react-redux';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';




const Orders = () =>  {
  

  const enrollment = useSelector(state => state.enrollment)

  const data = enrollment.paid

  function preventDefault(event) {
    event.preventDefault();
  }
  
  const useStyles = makeStyles((theme) => ({
    seeMore: {
      marginTop: theme.spacing(3),
    },
  }));
  const classes = useStyles();

  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell> ID</TableCell>
            <TableCell> Student Name </TableCell>
            <TableCell> Course </TableCell>
            <TableCell> Bank Name</TableCell>
            <TableCell align="right"> Total Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.firstName} {row.lastName}</TableCell>
              <TableCell>{row.name} - {row.subject} - {row.program} </TableCell>
              <TableCell>{row.bankName}</TableCell>
              <TableCell align="right"> Rp{row.totalAmount.toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
}

export default Orders;