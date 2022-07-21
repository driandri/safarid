import React, { Component } from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'


const routes: Array<RoutesData> = [
   {
      path: "/",
      exact: true,
      component: <div>TEst Drive</div>
   }
]

export default class RoutesComponent extends Component {
   render() {
      return (
         <BrowserRouter>
            <Routes>
               {routes.map((item, i) => {
                  return <Route
                     key={i}
                     path={item.path}
                     element={item.component}
                  />
               })}
            </Routes>
         </BrowserRouter>
      )
   }
}
