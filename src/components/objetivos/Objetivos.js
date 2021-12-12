/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import Valores1 from '../../assets/imagens/inovacao.jpg';
import Valores2 from '../../assets/imagens/crescimento.jpg';
import Valores3 from '../../assets/imagens/resultado.jpg';
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

            {/* Inovacao */}

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

                </div>
                <div class="card-reveal justificar">
                  <span class="card-title grey-text text-darken-4">Inovação<i class="material-icons right">close</i></span>
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
                  <p class="">Processo resultante do trabalho bem desenvolvido por nossos colaboradores que se empenham ao máximo para fornecer a solução ideal para nossos clientes.
                  </p>

                </div>
                <div class="card-reveal justificar">
                  <span class="card-title grey-text text-darken-4">Crescimento<i class="material-icons right">close</i></span>
                  <p>Processo resultante do trabalho bem desenvolvido por nossos colaboradores que se empenham ao     máximo para fornecer a solução ideal para nossos clientes.
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
                  <p class="">Efeito de nossas ações. Finalização de um problema. A cada problema que finalizamos, produzimos soluções satisfatórias, sempre buscando satisfazer as demandas dos nossos clientes.
                  </p>

                </div>
                <div class="card-reveal justificar">
                  <span class="card-title grey-text text-darken-4">Resultado<i class="material-icons right">close</i></span>
                  <p>Exploramos sempre novas ideias com o objetivo
                    de oferecer para nossos clientes o melhor que
                    a tecnologia pode nos proporcionar.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </section >
    )
  }
}
