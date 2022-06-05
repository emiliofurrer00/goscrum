import React from 'react'

export const Error404 = () => {
  return (
    <div className="App">
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          <h1>Oops!</h1>
          <p>😓Página no encontrada</p>          
        </div>
    </div>
  )
}