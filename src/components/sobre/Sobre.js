import React, { Component } from 'react';
import Image from '../../assets/sobre.png';

export default class sobre extends Component {
  render() {
    return (
      <section id="sobre" className="section grey lighten-3">
        <div className="container">
          <div className="row">
            <h4 className="center">Equipe <span className="blue-text darnken-1">DevCompilers</span></h4>
          </div>

          <div className="col s12">
            <img className="sobre" src={Image} alt="equipe devcompilers" width="100%"></img>
          </div>

          <div>
            <p className="flow-text center">A <b>DevCompilers</b> é composta por graduandos do curso de Sistemas de Informação da faculdade Uninassau localizada na cidade do Paulista. Nossa equipe foi formada para o desenvolvimento do projeto final do curso, a <b>Fábrica de Software.</b></p>
          </div>
        </div>
      </section>
    )
  }
}
