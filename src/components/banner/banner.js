import React, { Component } from 'react'
import '../../../node_modules/materialize-css/dist/css/materialize.min.css';
import ImgOne from '../../assets/image01.jpg';
import ImgTwo from '../../assets/image02.jpg';
import ImgThree from '../../assets/image03.jpg';
import './Banner.css';

export default class banner extends Component {
  render() {
    return (
      <section className="slider" id="home"> 
        <ul className="slides">
          <li>
            <img src={ImgTwo} alt="Vacation" />
            <div className="caption center-align">
              <h2>Organize sua Instituição</h2>
              <h5 className="light grey-text text-lighten-3 hide-on-small-only">
                Nossas soluções tecnológicas ajudarão a organizar sua instituição
              </h5>
            </div>
          </li>
          <li>
            <img src={ImgOne} alt="Vacation" />
            <div className="caption left-align">
              <h2>Melhore suas Experiências</h2>
              <h5 className="light grey-text text-lighten-3 hide-on-small-only">
                Trazemos as melhores experências nas reservas de laboratórios
              </h5>
            </div>
          </li>
          <li>
            <img src={ImgThree} alt="Budgets" />
            <div className="caption right-align">
              <h2>Mantenha Todos Informados</h2>
              <h5 className="light grey-text text-lighten-3 hide-on-small-only">
                Disponibilizamos meios para manter os nossos usuários bem informados
              </h5>
            </div>
          </li>
        </ul>
      </section>
    )
  }
}
