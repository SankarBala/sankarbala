import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from './redux_store/store';
import "./App.css";
import routes from './routes';
import Fallback from './fallback.js';
import AuthController from './Controllers/AuthController';


const App = () => {
  return (
    <React.Fragment>
      <Provider store={Store}>
        <Router>
          <Switch>
            {routes.map((route) => {
              if (route.auth) {
                if (route.layout) {
                  return (
                    <AuthController key={route.path} path={route.path} exact={route.exact}>
                      <route.layout>
                        <Suspense fallback={Fallback}>
                          <route.component />
                        </Suspense>
                      </route.layout>
                    </AuthController>
                  )
                } else {
                  return (
                    <AuthController key={route.path} path={route.path} exact={route.exact}>
                      <Suspense fallback={Fallback}>
                        <route.component />
                      </Suspense>
                    </AuthController>
                  )
                }
              } else {
                if (route.layout) {
                  return (
                    <Route key={route.path} exact={route.exact} path={route.path} component={() => {
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
                    <Route key={route.path} exact={route.exact} path={route.path} component={() => {
                      return (
                        <Suspense fallback={Fallback}>
                          <route.component />
                        </Suspense>
                      )
                    }} />
                  )
                }
              }
            })}
          </Switch>
        </Router>
      </Provider>
    </React.Fragment>
  )
}

export default App;