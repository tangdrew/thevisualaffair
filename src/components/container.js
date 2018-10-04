import React from 'react'
import Media from 'react-media'

export default ({ children }) => (
  <Media query="(max-width: 1400px)">
    {matches => (
      <div style={{ width: matches ? '100%' : '75%', margin: '0 auto' }}>{children}</div>
    )}
  </Media>
)
