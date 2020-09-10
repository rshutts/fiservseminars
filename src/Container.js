import React from 'react'
import { css } from 'glamor'


function Container({ children }) {
  return (
    <div className="wrapper">
      { children }
    </div>
  )
}

export default Container