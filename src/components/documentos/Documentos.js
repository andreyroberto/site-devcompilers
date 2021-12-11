/* eslint-disable jsx-a11y/iframe-has-title */
import React, { Component, useState } from 'react'
import '../../../node_modules/materialize-css/dist/css/materialize.min.css';
import './Documentos.css';
import UrlBacklog from '../../assets/documentos/backlog.zip';
import UrlCaso from '../../assets/documentos/caso-de-negocio.zip';
import UrlEstoria from '../../assets/documentos/estorias-do-usuario.zip';
import UrlOrganograma from '../../assets/documentos/organograma.zip';
import UrlSolicitacoes from '../../assets/documentos/solicitacoes-dos-principais-envolvidos.zip';
import { Divider } from '@material-ui/core';

const urlBacklog = UrlBacklog;
const urlCaso = UrlCaso;
const urlEstoria = UrlEstoria;
const urlOrganograma = UrlOrganograma;
const urlSolicitacoes = UrlSolicitacoes;

function DownloadBacklog() {
  const [download, setDownload] = useState(false);
  const [count, setCount] = useState(0)

  return (
    <div className="center">
      <button className="waves-effect waves-light btn-large radius btn-hover" onClick={() => {
        setDownload(urlBacklog)
        setCount((old) => old + 1)
      }}><i class="material-icons right text">file_download</i>Baixar</button>
      {download && <iframe src={download + '?c=' + count} style={{ display: 'none' }}></iframe>}
    </div>
  )
}

function DownloadCaso() {
  const [download, setDownload] = useState(false);
  const [count, setCount] = useState(0)

  return (
    <div className="center">
      <button className="waves-effect waves-light btn-large radius btn-hover" onClick={() => {
        setDownload(urlCaso)
        setCount((old) => old + 1)
      }}><i class="material-icons right text">file_download</i>Baixar</button>
      {download && <iframe src={download + '?c=' + count} style={{ display: 'none' }}></iframe>}
    </div>
  )
}

function DownloadEstoria() {
  const [download, setDownload] = useState(false);
  const [count, setCount] = useState(0)

  return (
    <div className="center">
      <button className="waves-effect waves-light btn-large radius btn-hover" onClick={() => {
        setDownload(urlEstoria)
        setCount((old) => old + 1)
      }}><i class="material-icons right text">file_download</i>Baixar</button>
      {download && <iframe src={download + '?c=' + count} style={{ display: 'none' }}></iframe>}
    </div>
  )
}

function DownloadOrganograma() {
  const [download, setDownload] = useState(false);
  const [count, setCount] = useState(0)

  return (
    <div className="center">
      <button className="waves-effect waves-light btn-large radius btn-hover" onClick={() => {
        setDownload(urlOrganograma)
        setCount((old) => old + 1)
      }}><i class="material-icons right text">file_download</i>Baixar</button>
      {download && <iframe src={download + '?c=' + count} style={{ display: 'none' }}></iframe>}
    </div>
  )
}

function DownloadSolicitacao() {
  const [download, setDownload] = useState(false);
  const [count, setCount] = useState(0)

  return (
    <div className="center">
      <button className="waves-effect waves-light btn-large radius btn-hover" onClick={() => {
        setDownload(urlSolicitacoes)
        setCount((old) => old + 1)
      }}><i class="material-icons right text">file_download</i>Baixar</button>
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
              <h4 className="center">Baixe as <span className="blue-text darnken-1">documentações</span></h4>
            </div>

            <Divider />

            <div className="pad">
              <div className="col s6">
                <p className="flow-text">Backlog Mylab</p>
              </div>
              <div className="col s6">
                <DownloadBacklog />
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
                <DownloadCaso />
              </div>
            </div>
          </div>

          <Divider />
          
          <div className="row">
            <div className="pad">
              <div className="col s6">
                <p className="flow-text">Estórias do usuário</p>
              </div>
              <div className="col s6">
                <DownloadEstoria />
              </div>
            </div>
          </div>

          <Divider />
          
          <div className="row">
            <div className="pad">
              <div className="col s6">
                <p className="flow-text">Organograma</p>
              </div>
              <div className="col s6">
                <DownloadOrganograma />
              </div>
            </div>
          </div>

          <Divider />
          
          <div className="row">
            <div className="pad">
              <div className="col s6">
                <p className="flow-text">Solicitações dos principais envolvidos</p>
              </div>
              <div className="col s6">
                <DownloadSolicitacao />
              </div>
            </div>
          </div>

          <Divider />
          
          <div className="row">
            <div className="pad">
              <div className="col s6">
                <p className="flow-text">Sprint backlog mobile</p>
              </div>
              <div className="col s6">
                <DownloadBacklog />
              </div>
            </div>
          </div>

          <Divider />
          
          <div className="row">
            <div className="pad">
              <div className="col s6">
                <p className="flow-text">Sprint backlog web</p>
              </div>
              <div className="col s6">
                <DownloadBacklog />
              </div>
            </div>
          </div>

          <Divider />
          
          <div className="row">
            <div className="pad">
              <div className="col s6">
                <p className="flow-text">Termo de abertura</p>
              </div>
              <div className="col s6">
                <DownloadBacklog />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
