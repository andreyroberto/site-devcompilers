/* eslint-disable jsx-a11y/iframe-has-title */
import React, { Component, useState } from 'react'
import '../../../node_modules/materialize-css/dist/css/materialize.min.css';
import './Docs.css';
import Backlog from '../../assets/documentos/backlog.zip';
import Caso from '../../assets/documentos/caso-de-negocio.zip';
import Estoria from '../../assets/documentos/estorias-do-usuario.zip';
import Organograma from '../../assets/documentos/organograma.zip';
import Solicitacoes from '../../assets/documentos/solicitacoes-dos-principais-envolvidos.zip';
import SprintMobile from '../../assets/documentos/sprint-backlog-mobile.zip';
import SprintWeb from '../../assets/documentos/sprint-backlog-web.zip';
import Termo from '../../assets/documentos/termo-de-abertura.zip';
import { Divider } from '@material-ui/core';

const urlDocBacklog = Backlog;
const urlDocCaso = Caso;
const urlDocEstoria = Estoria;
const urlDocOrganograma = Organograma;
const urlDocSolicitacoes = Solicitacoes;
const urlDocSprintMobile = SprintMobile;
const urlDocSprintWeb = SprintWeb;
const urlDocTermo = Termo;

//backlog
function DownloadBacklog() {
  const [download, setDownload] = useState(false);
  const [count, setCount] = useState(0)

  return (
    <div className="center">
      <button className="waves-effect waves-light btn-large radius btn-hover" onClick={() => {
        setDownload(urlDocBacklog)
        setCount((old) => old + 1)
      }}><i class="material-icons right text">file_download</i>Baixar</button>
      {download && <iframe src={download + '?c=' + count} style={{ display: 'none' }}></iframe>}
    </div>
  )
}

//caso de negocio
function DownloadCaso() {
  const [download, setDownload] = useState(false);
  const [count, setCount] = useState(0)

  return (
    <div className="center">
      <button className="waves-effect waves-light btn-large radius btn-hover" onClick={() => {
        setDownload(urlDocCaso)
        setCount((old) => old + 1)
      }}><i class="material-icons right text">file_download</i>Baixar</button>
      {download && <iframe src={download + '?c=' + count} style={{ display: 'none' }}></iframe>}
    </div>
  )
}

//estorias do usuario
function DownloadEstoria() {
  const [download, setDownload] = useState(false);
  const [count, setCount] = useState(0)

  return (
    <div className="center">
      <button className="waves-effect waves-light btn-large radius btn-hover" onClick={() => {
        setDownload(urlDocEstoria)
        setCount((old) => old + 1)
      }}><i class="material-icons right text">file_download</i>Baixar</button>
      {download && <iframe src={download + '?c=' + count} style={{ display: 'none' }}></iframe>}
    </div>
  )
}

//organograma
function DownloadOrganograma() {
  const [download, setDownload] = useState(false);
  const [count, setCount] = useState(0)

  return (
    <div className="center">
      <button className="waves-effect waves-light btn-large radius btn-hover" onClick={() => {
        setDownload(urlDocOrganograma)
        setCount((old) => old + 1)
      }}><i class="material-icons right text">file_download</i>Baixar</button>
      {download && <iframe src={download + '?c=' + count} style={{ display: 'none' }}></iframe>}
    </div>
  )
}

//solicitacoes dos princiapais envolvidos
function DownloadSolicitacao() {
  const [download, setDownload] = useState(false);
  const [count, setCount] = useState(0)

  return (
    <div className="center">
      <button className="waves-effect waves-light btn-large radius btn-hover" onClick={() => {
        setDownload(urlDocSolicitacoes)
        setCount((old) => old + 1)
      }}><i class="material-icons right text">file_download</i>Baixar</button>
      {download && <iframe src={download + '?c=' + count} style={{ display: 'none' }}></iframe>}
    </div>
  )
}

//sprint backlog web
function DownloadSprintWeb() {
  const [download, setDownload] = useState(false);
  const [count, setCount] = useState(0)

  return (
    <div className="center">
      <button className="waves-effect waves-light btn-large radius btn-hover" onClick={() => {
        setDownload(urlDocSprintWeb)
        setCount((old) => old + 1)
      }}><i class="material-icons right text">file_download</i>Baixar</button>
      {download && <iframe src={download + '?c=' + count} style={{ display: 'none' }}></iframe>}
    </div>
  )
}

//sprint backlog mobile
function DownloadSprintMobile() {
  const [download, setDownload] = useState(false);
  const [count, setCount] = useState(0)

  return (
    <div className="center">
      <button className="waves-effect waves-light btn-large radius btn-hover" onClick={() => {
        setDownload(urlDocSprintMobile)
        setCount((old) => old + 1)
      }}><i class="material-icons right text">file_download</i>Baixar</button>
      {download && <iframe src={download + '?c=' + count} style={{ display: 'none' }}></iframe>}
    </div>
  )
}

//termo de abertura
function DownloadTermo() {
  const [download, setDownload] = useState(false);
  const [count, setCount] = useState(0)

  return (
    <div className="center">
      <button className="waves-effect waves-light btn-large radius btn-hover" onClick={() => {
        setDownload(urlDocTermo)
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
                <DownloadSprintMobile />
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
                <DownloadSprintWeb />
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
                <DownloadTermo />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
