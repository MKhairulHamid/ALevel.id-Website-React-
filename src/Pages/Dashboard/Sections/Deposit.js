import React from 'react';
import { useSelector } from 'react-redux';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
  const classes = useStyles();
  const enrollment = useSelector(state => state.enrollment)
  const data = enrollment.paid
  
  const totalRevenue = () =>{
      var grandtotal= 0
      data.map((val) => {
         grandtotal += val.totalAmount
      })
      return(
        grandtotal.toLocaleString()
      )
  }

  const dateNow = () => {
    var d = new Date();
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var daynow = days[d.getDay()];   
    var date = d.getDate()
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];  
    var monthnow = months[d.getMonth()]
    var yearnow = d.getFullYear()
    return (
       daynow + ', ' + date +' ' + monthnow +' ' + yearnow
    )
  }
  console.log(dateNow)

  return (
    <React.Fragment>
      <Title> Total Revenue </Title>
      <Typography component="p" variant="h4">
        Rp. {totalRevenue()}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on {dateNow()}
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div>
    </React.Fragment>
  );
}