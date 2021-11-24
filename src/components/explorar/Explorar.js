import React, { Component } from 'react'
import './Explorar.css';
import '../../../node_modules/materialize-css/dist/css/materialize.min.css';

export default class Explorar extends Component {
  render() {
    return (
      <section id="explore" className="section section-icons grey lighten-4 center">
        <div className="container">
          <div className="row">
            <h4 className="center">
              <span className="blue-text darnken-1">Valores </span>Mylab
            </h4>

            <div className="col s6 m3">
              <div className="card small hoverable">
                <div class="btn-floating btn-large pulse blue ">
                  <i class="material-icons medium white-text">history</i>
                </div>
                <h4>Missão</h4>
                <p>Gerenciar da melhor forma <br />possível sua instituição</p>
              </div>
            </div>

            <div className="col s6 m3">
              <div className="card small hoverable">
                <div class="btn-floating btn-large pulse blue">
                  <i className="material-icons medium white-text">room</i>
                </div>
                <h4>Local</h4>
                <p>Centralize todas suas ideias em <br />um só lugar</p>
              </div>
            </div>

            <div className="col s6 m3">
              <div className="card small hoverable">
                <div class="btn-floating btn-large pulse blue">
                  <i className="material-icons medium white-text">lightbulb</i>
                </div>
                <h4>Ideias</h4>
                <p>Deixe tudo conosco que nós resolvemos tudo</p>
              </div>
            </div>

            <div className="col s6 m3">
              <div className="card small hoverable">
                <div class="btn-floating btn-large pulse blue">
                  <i className="material-icons medium white-text">verified</i>
                </div>
                <h4>Confiança</h4>
                <p>Não se preocupe mais com agendamentos duplicados</p>
              </div>
            </div>

          </div>

        </div>

      </section>
    )
  }
}
