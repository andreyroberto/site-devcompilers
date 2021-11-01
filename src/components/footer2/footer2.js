import React, { Component } from 'react'
import '../../../node_modules/jquery/dist/jquery';
import 'materialize-css/dist/js/materialize';
 import { Link } from '@material-ui/core'
import Typography from '@material-ui/core/Typography';
import './Footer.css';

function Copyright() {
  return (
    <Typography variant="body2" className="white-text">
      <Link color="inherit" href="https://github.com/andreyroberto/site-devcompilers" target="blank" rel="noopener" underline="none">
        <h4>DevCompilers</h4>
      </Link>{' '}
      {'© ' + new Date().getFullYear() + ', todos os direitos reservados.'}
    </Typography>
  );
}

export default class footer2 extends Component {
  render() {
    return (
      <section className="Section blue darkent-2 white-text center scrollspy">
        <div className="footer">
          <div className="col s12 ">
            <div>
              <Copyright />
            </div>
            <p>Acesse o repositório do projeto:</p>

            <div className="github">
              <Link href="https://github.com/CoderHamilton/MyLab" target="blank" className="white-text" rel="noopener">
                <i className="fa fa-github fa-3x"></i>
              </Link>
            </div>

          </div>
        </div>

      </section>
    )
  }
}
