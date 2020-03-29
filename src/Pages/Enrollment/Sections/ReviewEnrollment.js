import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles(theme => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

const Review = memo (({user, courseData, address, bankName, newPrice, addUnique }) => {
  const classes = useStyles();

  const programDetail = `${courseData.subject} - ${courseData.program}`

  const price = newPrice.toLocaleString()
  const paymentCode = addUnique.toLocaleString()

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Enrollment Summary
      </Typography>
      <List disablePadding>
          <ListItem className={classes.listItem}>
            <ListItemText primary={courseData.name} secondary={programDetail} />
            <Typography variant="body2"> Rp. {price}</Typography>
          </ListItem> 
          <ListItem className={classes.listItem}>
            <ListItemText primary="Unique Payment Code" secondary="Unique code for payment checking" />
            <Typography variant="body2"> Rp. {paymentCode}</Typography>
          </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            Rp. {price}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Home Address
          </Typography>
          <Typography gutterBottom>{user.name}</Typography>
          <Typography gutterBottom> {address} </Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Payment details
          </Typography>
          <Grid container>
              <React.Fragment>
                <Grid item xs={6}>
                  <Typography gutterBottom> Bank Transfer</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom> Bank Name : {bankName} </Typography>
                </Grid>
              </React.Fragment>
            
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
})

export default Review;