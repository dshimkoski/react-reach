import React from 'react'
import { Router } from '@reach/router'

import Home from '../Home'

export default () => (
  <Router basepath={process.env.BASEPATH}>
    <Home path='/' />
  </Router>
)
