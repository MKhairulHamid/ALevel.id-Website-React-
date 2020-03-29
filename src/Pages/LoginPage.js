import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
import { Login  } from '../Redux/Actions'



const LoginPage = () => {

    const dispatch = useDispatch()

    const [formInput, setForm] = useState({
        email : '',
        password : ''
    })

    const handleOnChange = (e) => {
        setForm({
        ...formInput,
        [e.target.name] : e.target.value
       })
    }

    const user = useSelector(state => state.user)

   

    const onBtnLogIn = () =>{
        let { email, password } = formInput
        dispatch(Login(email,password))
        
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
          marginTop: theme.spacing(1),
        },
        submit: {
          margin: theme.spacing(3, 0, 2),
        },
      }))

    const classes = useStyles();


    
    if(user.token){
      return(
        <Redirect to='/' />
      )
    }
    return (
      <div style={{minHeight : '700px'}}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Log In
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={handleOnChange}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleOnChange}
              />
              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={onBtnLogIn}
              >
                Log In
              </Button>
              <Grid container>
                <Grid item>
                  <Link to="/register" variant="body2">
                    {"Don't have an account? Register"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Container>
      </div>
      )
}

 

export default LoginPage;