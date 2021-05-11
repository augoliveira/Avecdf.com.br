import React from 'react'
import ReactDOM from 'react-dom'
import App from 'next/app'
import Head from 'next/head'
import Router from 'next/router'

import PageChange from 'components/PageChange/PageChange.js'

import 'assets/scss/nextjs-material-kit.scss?v=1.1.0'

Router.events.on('routeChangeStart', (url) => {
  document.body.classList.add('body-page-transition')
  ReactDOM.render(
    <PageChange path={url} />,
    document.getElementById('page-transition'),
  )
})
Router.events.on('routeChangeComplete', () => {
  ReactDOM.unmountComponentAtNode(document.getElementById('page-transition'))
  document.body.classList.remove('body-page-transition')
})
Router.events.on('routeChangeError', () => {
  ReactDOM.unmountComponentAtNode(document.getElementById('page-transition'))
  document.body.classList.remove('body-page-transition')
})

export default class MyApp extends App {
  componentDidMount() {
    let comment = document.createComment(`

=========================================================
* UP-Expert Agência de desenvolvimento web - v1.0.2 (Bootstrap 4.0.0 Final Edition) Aplicação nextjs/ReactJs v1.8.0
=========================================================

*website: https://www.upexpert.com.br
* Copyright 2021 Developer (https://www.upexpert.com.br/dev)

=========================================================

* DESCOBRIR. APRENDER. DESENVOLVE.
IDEIAS AMPLIFICADAS PELA TECNOLOGIA
No cruzamento entre Tecnologia e Criatividade você encontrará a UP EXPERT.

`)
    document.insertBefore(comment, document.documentElement)
  }
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }
  render() {
    const { Component, pageProps } = this.props

    return (
      <React.Fragment>
        <Head>
          <title>
            Avec | Associação dos Veiculos de Comunicação do Distrito Federal
          </title>
        </Head>
        <Component {...pageProps} />
      </React.Fragment>
    )
  }
}
