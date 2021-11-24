import React, { Component } from 'react'
import '../../../node_modules/materialize-css/dist/css/materialize.min.css';
import ImgOne from '../../assets/image01.jpg';
import ImgTwo from '../../assets/image02.jpg';
import ImgThree from '../../assets/image03.jpg';
import { Link } from 'react-router-dom';
import './Banner.css';

export default class banner extends Component {
  render() {
    return (
      <section className="slider" id="home"> 
      {/* id=home errado */}
        <ul className="slides">
          <li>
            <img src={ImgTwo} alt="Vacation" />
            <div className="caption center-align">
              <h2>Organize sua instituição</h2>
              <h5 className="light grey-text text-lighten-3 hide-on-small-only">
                Lorem ipsum dolor sit amet
              </h5>
              <Link to="#" className="btn btn-large blue"> Leia mais </Link>
            </div>
          </li>
          <li>
            <img src={ImgOne} alt="Vacation" />
            <div className="caption left-align">
              <h2>Seja o diferencial</h2>
              <h5 className="light grey-text text-lighten-3 hide-on-small-only">
                Lorem ipsum dolor sit amet
              </h5>
              <Link to="#" className="btn btn-large blue">Leia mais</Link>
            </div>
          </li>
          <li>
            <img src={ImgThree} alt="Budgets" />
            <div className="caption right-align">
              <h2>Mantenha todos informados</h2>
              <h5 className="light grey-text text-lighten-3 hide-on-small-only">
                Lorem ipsum dolor sit amet
              </h5>
              <Link to="#" className="btn btn-large blue">Leia mais</Link>
            </div>
          </li>
        </ul>
      </section>
    )
  }
}
