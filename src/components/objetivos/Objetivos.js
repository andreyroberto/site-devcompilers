import React, { Component } from 'react';
import Valores1 from '../../imagens/inovacao4.jpg'
import Valores2 from '../../imagens/crescimento5.jpg'
import Valores3 from '../../imagens/resultado8.jpg'
// import { HashLink as Link } from 'react-router-hash-link'
import './objetivos.css';

export default class Objetivos extends Component {
  render() {
    return (

      <section id="objetivos" className="section section-objetivo scrollspy">
        <div className="container-fluid">
          <div className="row">
            <h4 className="center">
              <span className="blue-text darken-1">MyLab </span>Objetivos
            </h4>
            <div className="col s12 m4">

              <div class="card">
                <div class="card-image ">
                  <img src={Valores1} alt="Inovacao" />
                  <span className="card-title">Inovação</span>
                  <a class="card-tittle activator btn-floating halfway-fab waves-effect waves-light blue"><i class="material-icons">add</i></a>
                </div>

                <div class="card-content justificar">
                  <p class="">Exploramos sempre novas ideias com o objetivo
                    de oferecer para nossos clientes o melhor que
                    a tecnologia pode nos proporcionar.
                  </p>

                  {/* <span class="card-title activator grey-text text-darken-4">Inovação<i class="material-icons right">more_vert</i></span>
       */}

                </div>
                <div class="card-reveal justificar">
                  <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
                  <p>Exploramos sempre novas ideias com o objetivo
                    de oferecer para nossos clientes o melhor que
                    a tecnologia pode nos proporcionar.
                  </p>
                </div>
              </div>




            </div>

            {/* CRESCIMENTO */}

            <div className="col s12 m4">

              <div class="card">
                <div class="card-image ">
                  <img src={Valores2} alt="Inovacao" />
                  <span className="card-title">Crescimento</span>

                  <a class="card-tittle activator btn-floating halfway-fab waves-effect waves-light blue"><i class="material-icons">add</i></a>
                </div>

                <div class="card-content justificar">
                  <p class="">Exploramos sempre novas ideias com o objetivo
                    de oferecer para nossos clientes o melhor que
                    a tecnologia pode nos proporcionar.
                  </p>

                  {/* <span class="card-title activator grey-text text-darken-4">Inovação<i class="material-icons right">more_vert</i></span>
*/}

                </div>
                <div class="card-reveal justificar">
                  <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
                  <p>Exploramos sempre novas ideias com o objetivo
                    de oferecer para nossos clientes o melhor que
                    a tecnologia pode nos proporcionar.
                  </p>
                </div>
              </div>


            </div>


            {/* RESULTADO */}
            <div className="col s12 m4">

              <div class="card">
                <div class="card-image ">
                  <img src={Valores3} alt="Inovacao" />
                  <span className="card-title">Resultado</span>

                  <a class="card-tittle activator btn-floating halfway-fab waves-effect waves-light blue"><i class="material-icons">add</i></a>
                </div>

                <div class="card-content justificar">
                  <p class="">Exploramos sempre novas ideias com o objetivo
                    de oferecer para nossos clientes o melhor que
                    a tecnologia pode nos proporcionar.
                  </p>

                  {/* <span class="card-title activator grey-text text-darken-4">Inovação<i class="material-icons right">more_vert</i></span>
*/}

                </div>
                <div class="card-reveal justificar">
                  <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
                  <p>Exploramos sempre novas ideias com o objetivo
                    de oferecer para nossos clientes o melhor que
                    a tecnologia pode nos proporcionar.
                  </p>
                </div>
              </div>


            </div>




            {/* EXCLUIR ABAIXO */}


          </div>

        </div>


      </section >
    )
  }
}
