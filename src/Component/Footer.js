import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="/">
        ALevel Edukasi Indonesia
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  main: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),

  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[800] : theme.palette.grey[200],
    
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <footer className={classes.footer}>
        <Container align="center" maxWidth="sm">
  
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}