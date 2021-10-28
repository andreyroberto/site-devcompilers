import React, { Component } from 'react'
import '../../../node_modules/jquery/dist/jquery';
import 'materialize-css/dist/js/materialize';
// import { Link } from 'react-router-dom';
 import { Link } from '@material-ui/core'
import Typography from '@material-ui/core/Typography';
import './Footer.css';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" className="white-text">
      <Link color="inherit" href="https://github.com/andreyroberto/site-devcompilers">
        <h4>Dev Compilers</h4>
      </Link>{' '}
      {'© ' + new Date().getFullYear() + ', todos os direitos reservados.'}
    </Typography>
  );
}

export default class footer2 extends Component {
  render() {
    return (
      <section className="Section footer blue darkent-2 white-text center scrollspy">
        <div className="row">
          <div className="col s12">
            <div>
              <Copyright />
            </div>
            <p>Acesse o repositório do projeto:</p>

            {/* <Link to="htps://facebook.com" target="blank" className="white-text">
              <i className="fab fa-facebook fa-3x"></i>
            </Link>
            <Link to="htps://twitter.com" target="blank" className="white-text">
              <i className="fab fa-twitter fa-3x"></i>
            </Link>
            <Link to="htps://linkedin.com" target="blank" className="white-text">
              <i className="fab fa-linkedin fa-3x"></i>
            </Link> */}
            <Link href="https://github.com/CoderHamilton/MyLab" target="blank" className="white-text">
              <i className="fab fa-github fa-3x"></i>
            </Link>

          </div>
        </div>

      </section>
    )
  }
}
