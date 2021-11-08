import React, { Component } from 'react'
import '../../../node_modules/materialize-css/dist/css/materialize.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Navbar.css'
import DevText from '../../assets/dev-text-white.svg';

const SmoothScroll = () => {
  return (
    <section className="cor" id="back-to-top-anchor">
      <div className="navbar blue-text text-darken-2">
        <nav>
          <div className="container blue-text text-darken-2">
            <div className="nav-wrapper blue-text text-darken-2">
              <AnchorLink href="!#" className="brand-logo">
                <img className="dev-logo" src={DevText} alt="DevCompilers" width="100%" height="60px" />
              </AnchorLink>
              <AnchorLink href="!#" data-target="mobile-demo" className="sidenav-trigger" ><i className="material-icons"> menu </i> </AnchorLink>

              <ul className="right hide-on-med-and-down">
                <li><AnchorLink href="/back-to-top-anchor">Home</AnchorLink></li>
                <li><AnchorLink href="/servicos">Serviços</AnchorLink></li>
                <li><AnchorLink href="/sobre">Sobre</AnchorLink></li>
                <li><AnchorLink href="/docs">Documentos</AnchorLink></li>
                <li><AnchorLink href="/contact">Contato</AnchorLink></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <ul className="sidenav" id="mobile-demo">
        <li> <AnchorLink href="#home">Home</AnchorLink></li>
        <li> <AnchorLink href="#servicos">Serviços</AnchorLink></li>
        <li> <AnchorLink href="#sobre">Sobre</AnchorLink></li>
        <li> <AnchorLink href="#docs">Documentos</AnchorLink></li>
        <li> <AnchorLink href="#contato">Contato</AnchorLink></li>
      </ul>

    </section>
  )
}

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <SmoothScroll />
      </div>
    )
  }
}
