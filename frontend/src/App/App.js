import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import routes from './routes';
import Fallback from './fallback.js';


const App = () => {
  return (
    <React.Fragment>
      <Router>
        {routes.map((route) => {
          if (route.layout) {
            return (
              <Route key={route.name} exact={route.exact} path={route.path} component={() => {
                return (
                  <route.layout>
                    <Suspense fallback={Fallback}>
                      <route.component />
                    </Suspense>
                  </route.layout>
                )
              }} />
            )
          } else {
            return (
              <Route key={route.name} exact={route.exact} path={route.path} component={route.component} />
            )
          }
        })}
      </Router>
    </React.Fragment>
  )
}

export default App;