/* eslint-disable jsx-a11y/iframe-has-title */
import React, { Component, useState } from 'react'
import '../../../node_modules/materialize-css/dist/css/materialize.min.css';
import './Docs.css';
import Url from '../../assets/docs.zip';
import Backlog from '../../assets/backlog.zip';

const urlDocDownload = Url;

function Download() {
  const [download, setDownload] = useState(false);
  const [count, setCount] = useState(0)

  return (
    <section id="docs" className=" section section-contact scrollspy">
      <div className="container">
        <div className="row">
          <div className="row">
            <h4 className="center"><span className="blue-text darnken-1">Baixe</span> as documentações</h4>
          </div>
          
          <div className="col s12 center">
            <button className="btn btn-large waves-effect white blue-text text-darken-" onClick={() => {
              setDownload(urlDocDownload)
              setCount((old) => old + 1)
            }}>Baixar Documentações<i class="large material-icons">file_download</i></button>
            {download && <iframe src={download + '?c=' + count} style={{ display: 'none' }}></iframe>}
          </div>
        </div>
      </div>
    </section>
  )
}

export default class Divisao extends Component {
  render() {
    return (
      // <section className="section section-book blue darken-2 white-text center" id="docs">

      //   <div className="container">
      //     <div className="row">
      //       <div className="col s12 center">
      //         <a href='!#' className="btn btn-large waves-effect white blue-text text-darken-">
      //           Baixar Documentações 
      //           <i class="large material-icons">file_download</i>
      //         </a>
      //       </div>
      //     </div>
      //   </div>

      // </section>

      <Download />
    )
  }
}
