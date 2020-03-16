import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Register } from '../Redux/Actions'


const RegisterPage = () => {
    
    const [formInput, setForm] = useState({
        firstName: '',
        lastName : '',
        email : '',
        password : '',
        confirmPass : ''
    })

    const handleOnChange = (e) => {
        setForm({
            ...formInput,
            [e.target.name] : e.target.value
        })
    }

    const user = useSelector(state => state.user)
    console.log(user.token)

    const dispatch = useDispatch()

    const onBtnRegister = () => {
        let {firstName, lastName, email, password, confirmPass } = formInput
        
        let data = {
          firstName,
          lastName,
          email, 
          password
        }
        // console.log(data)
        if(password === confirmPass){
          dispatch(Register(data))
          console.log(user.token)
        } else {
          alert('Confirm Password is false')
        }

    }

    const useStyles = makeStyles(theme => ({
        paper: {
          marginTop: theme.spacing(8),
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        },
        avatar: {
          margin: theme.spacing(1),
          backgroundColor: theme.palette.secondary.main,
        },
        form: {
          width: '100%', // Fix IE 11 issue.
          marginTop: theme.spacing(3),
        },
        submit: {
          margin: theme.spacing(3, 0, 2),
        },
      }));

    const classes = useStyles()


    if(user.token){
        return(
            <Redirect to='/'  />
        )
    }

        return (
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Register
                </Typography>
                <form className={classes.form} noValidate>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        name="firstName"
                        variant="outlined"
                        required
                        fullWidth
                        id="firstName"
                        label="First Name"
                        autoFocus
                        onChange={handleOnChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        name="lastName"
                        autoComplete="lname"
                        onChange={handleOnChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        onChange={handleOnChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={handleOnChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="confirmPass"
                        label="Confirm Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={handleOnChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Typography component="h1" variant="caption">
                      By clicking Register you agree to the ALevel.id User Agreement, Privacy Policy, and Cookie Policy
                      </Typography>
                    </Grid>
                  </Grid>
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick ={onBtnRegister}
                  >
                    Register
                  </Button>
                  <Grid container justify="flex-end">
                    <Grid item>
                      <Link to="/login" variant="body2">
                        Already have an account? Login
                      </Link>
                    </Grid>
                  </Grid>
                </form>
              </div>
            </Container>
          );





          
}

 
export default RegisterPage;