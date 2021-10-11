import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import './App.css';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'© ' + new Date().getFullYear() + ', '}
      <Link color="inherit" href="https://github.com/andreyroberto/site-mylab">
        Dev Compilers,
      </Link>{' '}
      {' todos os direitos reservados.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  main: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  footer: {
    minWidth: '100%',
    marginBottom: '50px',
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          DevCompilers
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {'Site desenvolvido para o projeto de Fábrica de Software, '}
          {'orientado pelo professor Ivonaldo Torres.'}
        </Typography>
        <Typography variant="body1">contatodevcompilers@gmail.com</Typography>

        <footer className="rodape"  >
          <Container maxWidth="sm">
            <Link rel="stylesheet" href="https://github.com/CoderHamilton/MyLab">

              <div className="git">
                <GitHubIcon default props />
              </div>
            </Link>

            <div className="copyright">
              <Copyright />
            </div>

          </Container>
        </footer>

      </Container>
    </div >
  );
}