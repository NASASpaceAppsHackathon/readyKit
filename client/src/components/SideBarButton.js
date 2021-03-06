import React, { Component } from 'react'

const SideBarButton = props => {
  return (
    <div
      style={{
        width: '160px',
        height: '50px'
      }}
    >
      <h3
        style={{
          textAlign: 'center',
          color: 'white',
          verticalAlign: 'middle',
          lineHeight: '50px',
          marginBottom: '1px',
          marginTop: '1px',
          position: 'static',
          fontWeight: '300'
        }}
      >
        {props.title}
      </h3>
    </div>
  )
}

export default SideBarButton
