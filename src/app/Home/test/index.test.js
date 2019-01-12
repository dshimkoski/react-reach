import React from 'react'
import Home from '..'

describe('Home', () => {
  it('should render Home', () => {
    expect(mount(<Home />).find('div').text()).toBe('Home')
  })
})
