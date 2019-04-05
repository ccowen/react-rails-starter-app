// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import LandingPage from './components/LandingPage'
import importTheme from './theme'

const theme = createMuiTheme(importTheme)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <MuiThemeProvider theme={theme}><LandingPage/></MuiThemeProvider>, document.body.appendChild(document.createElement('div')),
  )
});
