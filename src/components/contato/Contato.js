import React, { Component } from 'react';
import './Contato.css';

export default class Contato extends Component {
  render() {
    return (
      <section id="contact" className="section section-contact scrollspy grey lighten-3">
        <div className="container pad">
          <div className="row">
            <div className="row">
              <h4 className="center">Contate a <span className="blue-text darnken-1">Dev Compilers</span></h4>
            </div>
            <div className="col s12 m6">
              <div className="card-panel cor white-text center">
                <i className="material-icons medium">email</i>
                <h5>Endereço Dev Compilers</h5>
                <p>Av. Sen. Salgado Filho, s/n - Centro, Paulista</p>
              </div>

              <ul className="collection with-header card">
                <li className="collection-header">
                  <h4>Main Office</h4>
                </li>
                <li className="collection-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <i> 53401-440, Pernambuco, PE - Brasil</i>
                </li>
                <li className="collection-item">
                  <i className="fas fa-phone"></i>
                  <i> (81) 99999-9999</i>
                </li>
                <li className="collection-item">
                  <i className="fas fa-envelope-square"></i>
                  <i> contatodevcompilers@gmail.com</i>
                </li>
              </ul>
            </div>
            
            <div className="col s12 m6">
              <div className="card-panel white lighten-3 center">
                <h5>Entre em contato conosco preenchendo o formulário abaixo</h5>
                <form>

                  <div className="input-field">
                    <input type="text" id="name" className="validate" />
                    <label for="name" className="blue-text">Nome</label>
                  </div>

                  <div className="input-field">
                    <input type="text" id="email" className="validate" />
                    <label for="email" className="blue-text">Email</label>
                  </div>

                  <div className="input-field">
                    <input type="text" id="phone" className="validate" />
                    <label for="phone" className="blue-text">Telefone</label>
                  </div>

                  <div className="input-field">
                    <textarea type="text" id="message" className="materialize-textarea" data-length="120"></textarea>
                    <label for="message" className="blue-text">Mensagem</label>
                  </div>

                  <input type="submit" value="Enviar" className="btn btn-hover"></input>

                </form>

              </div>
            </div>

          </div>
        </div>

      </section>
    )
  }
}
