/* eslint-disable jsx-a11y/iframe-has-title */
import React, { Component, useState } from 'react'
import '../../../node_modules/materialize-css/dist/css/materialize.min.css';
import './Docs.css';
import Url from '../../assets/docs.zip';
import Backlog from '../../assets/backlog.zip';
import { Divider } from '@material-ui/core';

const urlDocDownload = Url;

function Download() {
  const [download, setDownload] = useState(false);
  const [count, setCount] = useState(0)

  return (
    <div className="center">
      <button className="waves-effect waves-light blue btn-large" onClick={() => {
        setDownload(urlDocDownload)
        setCount((old) => old + 1)
      }}><i class="material-icons right">file_download</i>Baixar</button>
      {download && <iframe src={download + '?c=' + count} style={{ display: 'none' }}></iframe>}
    </div>
  )
}

export default class Divisao extends Component {
  render() {
    return (
      <section id="docs" className="section section-contact scrollspy center">
        <div className="container">
          <div className="row">
            <div className="row">
              <h4 className="center"><span className="blue-text darnken-1">Baixe</span> as documentações</h4>
            </div>

            <Divider />

            <div className="pad">
              <div className="col s6">
                <p className="flow-text">Backlog Mylab</p>
              </div>
              <div className="col s6">
                {/* {urlDocDownload} = {Backlog}; */}
                <Download />
              </div>
            </div>
          </div>

          <Divider />
          
          <div className="row">
            <div className="pad">
              <div className="col s6">
                <p className="flow-text">Caso de negócio</p>
              </div>
              <div className="col s6">
                <Download />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
