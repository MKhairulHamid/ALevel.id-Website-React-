import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import Swal from 'sweetalert2';
import { API_URL } from '../../Support/API_URL'
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddressForm from './Sections/AddressForm';
import Review from './Sections/ReviewEnrollment';
import { fetchCourseById, fetchEnrollmentById } from '../../Redux/Actions'

// Styling

const useStyles = makeStyles(theme => ({
    appBar: {
      position: 'static'
      
    },
    layout: {
      width: 'auto',
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
        width: 600,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    paper: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      padding: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
        padding: theme.spacing(3),
      },
    },
    stepper: {
      padding: theme.spacing(3, 0, 5),
    },
    buttons: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    button: {
      marginTop: theme.spacing(3),
      marginLeft: theme.spacing(1),
    },
  }))


const  EnrollmentForm = () => {

  const [address, setAddress] = useState('')
  const [bankName, setBankName] = useState('')
  const [enrollmentId, setEnrollmentId] = useState(0)
  const [redirect, setRedirect] = useState(false)

  const handleOnChangeAddress = useCallback((e) => 
  { setAddress (e.target.value)}, [setAddress]);

  const handleOnChangeBankName = useCallback((e) => 
  { setBankName (e.target.value)}, [setBankName]);


  let { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchCourseById(id)), [])
  const courseData = useSelector(state => state.course.courseById)
  const user = useSelector(state => state.user)



  console.log(id)

  

  const addUnique = Math.floor((Math.random() * 1000)); 
  const newPrice = courseData.price + addUnique;
  const price = newPrice.toLocaleString()

    // Step 

    const steps = ['Enrollment Form', 'Enrollment Review'];

    function getStepContent(step) {
      switch (step) {
        case 0:
          return <AddressForm handleOnChangeAddress={handleOnChangeAddress} handleOnChangeBankName={handleOnChangeBankName} user={user} address={address} bankName={bankName} />;
        case 1:
          return <Review user={user} courseData={courseData} address={address} bankName={bankName} newPrice={newPrice} addUnique={addUnique} />;
        default:
          throw new Error('Unknown step');
      }
    }


    
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    const handleEnroll = () => {
      
      var newAddress = address
      var userId = user.id
      var courseId = courseData.id
      var totalAmount = newPrice

      
      const data1 = { userId , courseId, bankName, totalAmount }
      const data2 = { userId, newAddress }

      const token = localStorage.getItem('token');
      const headers = {
            headers : {
                'Authorization': `Bearer ${token}`
            }
        }
        Axios.post(API_URL + '/enrollment/submit', data1, headers)
            .then((res) => {
                setEnrollmentId(res.data[0].id)
                dispatch(fetchEnrollmentById(userId))
                setActiveStep(activeStep + 1)
                Axios.patch(`${API_URL}/users/editaddress` , data2, headers )
                    .then((res) => {
                        console.log(res)
                    }).catch((err) =>{
                        console.log(err)
                    })
            }).catch((err) =>{
                console.log(err)
            })

        
      
    };

    // Styling
    const classes = useStyles();
    
    ;



    // Return
    
    return (
    <div style={{ minHeight:'700px'}}>
      <CssBaseline />
      <AppBar color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Enrollment for : {courseData.name} ( {courseData.subject} - {courseData.program})
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography align="center" variant="h5" gutterBottom>
                  Thank You
                </Typography>
                <Typography align="center" variant="subtitle1" gutterBottom>
                  Your enrollment ID is {enrollmentId}
                </Typography>
                <Typography align="center" variant="h6" gutterBottom>
                  Payment Information
                </Typography>
                <Typography align="center" variant="subtitle2">
                  Total Amount : {price} <br />
                  Transfer to : <br />
                  Bank Name : BCA <br />
                  Account Number : 1234567 <br />
                </Typography>
                <div align="center" style={{ marginTop: '20px'}}>
                  <Button
                      align="center"
                      variant="contained"
                      color="primary"
                      href="/enrollment"
                  >
                    Confirm Payment
                  </Button>
                </div>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  {activeStep === steps.length - 1 ? 
                    <Button
                    variant="contained"
                    color="primary"
                    onClick={handleEnroll}
                    className={classes.button}
                    >
                     Enroll Now
                    </Button>
                    : 
                    <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                    >
                     Next
                    </Button>
                  }

                  
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </main>
      </div>
  );

}



export default EnrollmentForm;