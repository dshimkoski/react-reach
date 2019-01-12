import React from 'react'
import { Router } from '@reach/router'

import Home from '../Home'

console.log(`basepath: ${process.env.BASEPATH}`)

export default () => (
  <Router basepath={process.env.BASEPATH}>
    <Home path='/' />
  </Router>
)
