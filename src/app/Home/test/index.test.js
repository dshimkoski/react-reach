import React from 'react'
import Home from '..'

describe('Home', () => {
  it('should render sir doggo', () => {
    expect(mount(<Home />).find('img').length).toBe(1)
  })
})
