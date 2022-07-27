import React from 'react'
import { Route } from 'react-router-dom'

export const AppRoute = ({ pavement, fileName }) => {
  return <Route path={pavement} render={() => {
    return <React.Suspense fallback={<div>Loading...</div>}>
      {fileName}
    </React.Suspense>
  }} />
}
