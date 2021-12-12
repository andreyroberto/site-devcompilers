/* eslint-disable jsx-a11y/iframe-has-title */
import React, { Component, useState } from 'react';
import '../../../node_modules/materialize-css/dist/css/materialize.min.css';
import './Documentos.css';

import DocEstoria from '../../assets/documentos/estorias-do-usuario.zip';
import DocSolicitacoes from '../../assets/documentos/solicitacoes-dos-principais-envolvidos.zip';
import DocSprint from '../../assets/documentos/sprint-backlog.zip';
import DocTermo from '../../assets/documentos/termo-de-abertura.zip';
import DocOrgano from '../../assets/documentos/doc-organograma.zip';
import DocEscopo from '../../assets/documentos/escopo.zip';
import DocArqui from '../../assets/documentos/documento-de-arquitetura.zip';
import DocPlano from '../../assets/documentos/plano-de-teste.zip';
import DocProcesso from '../../assets/documentos/documento-de-processos.zip';
import DocCaso from '../../assets/documentos/caso-de-teste.zip';
import DocProjeto from '../../assets/documentos/projeto-de-teste.zip';
import { Divider } from '@material-ui/core';

const urlEstoria = DocEstoria;
const urlSolicitacoes = DocSolicitacoes;
const urlSprint = DocSprint;
const urlTermo = DocTermo;
const urlOrgano = DocOrgano;
const urlEscopo = DocEscopo;
const urlArqui = DocArqui;
const urlPlano = DocPlano;
const urlProcesso = DocProcesso;
const urlCaso = DocCaso;
const urlProjeto = DocProjeto;

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

function DownloadArqui() {
  const [download, setDownload] = useState(false);
  const [count, setCount] = useState(0)

  return (
    <div className="center">
      <button className="waves-effect waves-light btn-large radius btn-hover" onClick={() => {
        setDownload(urlArqui)
        setCount((old) => old + 1)
      }}><i class="material-icons right text">file_download</i>Baixar</button>
      {download && <iframe src={download + '?c=' + count} style={{ display: 'none' }}></iframe>}
    </div>
  )
}

function DownloadProcesso() {
  const [download, setDownload] = useState(false);
  const [count, setCount] = useState(0)

  return (
    <div className="center">
      <button className="waves-effect waves-light btn-large radius btn-hover" onClick={() => {
        setDownload(urlProcesso)
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

function DownloadSprint() {
  const [download, setDownload] = useState(false);
  const [count, setCount] = useState(0)

  return (
    <div className="center">
      <button className="waves-effect waves-light btn-large radius btn-hover" onClick={() => {
        setDownload(urlSprint)
        setCount((old) => old + 1)
      }}><i class="material-icons right text">file_download</i>Baixar</button>
      {download && <iframe src={download + '?c=' + count} style={{ display: 'none' }}></iframe>}
    </div>
  )
}


function DownloadTermo() {
  const [download, setDownload] = useState(false);
  const [count, setCount] = useState(0)

  return (
    <div className="center">
      <button className="waves-effect waves-light btn-large radius btn-hover" onClick={() => {
        setDownload(urlTermo)
        setCount((old) => old + 1)
      }}><i class="material-icons right text">file_download</i>Baixar</button>
      {download && <iframe src={download + '?c=' + count} style={{ display: 'none' }}></iframe>}
    </div>
  )
}

function DownloadPlano() {
  const [download, setDownload] = useState(false);
  const [count, setCount] = useState(0)

  return (
    <div className="center">
      <button className="waves-effect waves-light btn-large radius btn-hover" onClick={() => {
        setDownload(urlPlano)
        setCount((old) => old + 1)
      }}><i class="material-icons right text">file_download</i>Baixar</button>
      {download && <iframe src={download + '?c=' + count} style={{ display: 'none' }}></iframe>}
    </div>
  )
}

function DownloadProjeto() {
  const [download, setDownload] = useState(false);
  const [count, setCount] = useState(0)

  return (
    <div className="center">
      <button className="waves-effect waves-light btn-large radius btn-hover" onClick={() => {
        setDownload(urlProjeto)
        setCount((old) => old + 1)
      }}><i class="material-icons right text">file_download</i>Baixar</button>
      {download && <iframe src={download + '?c=' + count} style={{ display: 'none' }}></iframe>}
    </div>
  )
}

function DownloadOrgano() {
  const [download, setDownload] = useState(false);
  const [count, setCount] = useState(0)

  return (
    <div className="center">
      <button className="waves-effect waves-light btn-large radius btn-hover" onClick={() => {
        setDownload(urlOrgano)
        setCount((old) => old + 1)
      }}><i class="material-icons right text">file_download</i>Baixar</button>
      {download && <iframe src={download + '?c=' + count} style={{ display: 'none' }}></iframe>}
    </div>
  )
}

function DownloadEscopo() {
  const [download, setDownload] = useState(false);
  const [count, setCount] = useState(0)

  return (
    <div className="center">
      <button className="waves-effect waves-light btn-large radius btn-hover" onClick={() => {
        setDownload(urlEscopo)
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

          </div>

          <Divider />

          <div className="row">
            <div className="pad">
              <div className="col s6">
                <p className="flow-text">Caso de teste</p>
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
                <p className="flow-text">Documento de Arquitetura</p>
              </div>
              <div className="col s6">
                <DownloadArqui />
              </div>
            </div>
          </div>

          <Divider />

          <div className="row">
            <div className="pad">
              <div className="col s6">
                <p className="flow-text">Documento de Processos</p>
              </div>
              <div className="col s6">
                <DownloadProcesso />
              </div>
            </div>
          </div>

          <Divider />

          <div className="row">
            <div className="pad">
              <div className="col s6">
                <p className="flow-text">Escopo do projeto</p>
              </div>
              <div className="col s6">
                <DownloadEscopo />
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
                <p className="flow-text">Plano de teste</p>
              </div>
              <div className="col s6">
                <DownloadPlano />
              </div>
            </div>
          </div>

          <Divider />

          <div className="row">
            <div className="pad">
              <div className="col s6">
                <p className="flow-text">Projeto de teste</p>
              </div>
              <div className="col s6">
                <DownloadProjeto />
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
                <DownloadOrgano />
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
                <p className="flow-text">Sprint backlog</p>
              </div>
              <div className="col s6">
                <DownloadSprint />
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
