import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Zoom, useScrollTrigger, CssBaseline, Fab } from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import PropTypes from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';

import Home from './components/home/Home';

import Servicos from './components/servicos/Servicos';
import Navbar2 from './components/navbar/Navbar';
import Banner from './components/banner/banner';
import Explorar from './components/explorar/Explorar';
import Objetivos from './components/objetivos/Objetivos';
import Divisao from './components/divisao/Divisao';
import Contato from './components/contato/Contato';
import Footer from './components/footer/Footer';
import Docs from './components/documentos/Documentos';
import Sobre from './components/sobre/Sobre';

const useStyles = makeStyles((theme) => ({
  blogsContainer: {
    paddingTop: theme.spacing(3),
  },
   root: {
     position: 'fixed',
     bottom: theme.spacing(2),
     right: theme.spacing(2),
   },
}));

//rolar para topo da page
function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};
//fim da rolagem

function App(props) {

  return (
    <div className="App">

      <Router>
        <Fragment>
          <Navbar2 />
          <Home />
          <Banner />
          <Explorar />
          <Objetivos />
          <Divisao />
          <Servicos />
          <Sobre />
          <Docs />
          <Contato />
          <Footer />

          <React.Fragment>
            <CssBaseline />
            <ScrollTop {...props}>
              <Fab color="secondary" size="small" aria-label="scroll back to top">
                <KeyboardArrowUpIcon />
              </Fab>
            </ScrollTop>
          </React.Fragment>

        </Fragment>
      </Router>

    </div>

  );
}
export default App;
