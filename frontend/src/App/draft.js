{routes.map((route) => {
    if (route.auth) {
      if (route.layout) {
        return (
          <Switch>
            <AuthController>
              <Route key={route.name} exact={route.exact} path={route.path} component={() => {
                return (
                  <route.layout>
                    <Suspense fallback={Fallback}>
                      <route.component />
                    </Suspense>
                  </route.layout>
                )
              }} />
            </AuthController>
          </Switch>
        )
      } else {
        return (
          <Switch>
            <AuthController>
              <Suspense key={route.name} fallback={Fallback}>
                <Route exact={route.exact} path={route.path} component={route.component} />
              </Suspense>
            </AuthController>
          </Switch>
        )
      }
    } else {
      if (route.layout) {
        return (
          <Switch>
            <Route key={route.name} exact={route.exact} path={route.path} component={() => {
              return (
                <route.layout>
                  <Suspense fallback={Fallback}>
                    <route.component />
                  </Suspense>
                </route.layout>
              )
            }} />
          </Switch>
        )
      } else {
        return (
          <Switch>
            <Suspense key={route.name} fallback={Fallback}>
              <Route exact={route.exact} path={route.path} component={route.component} />
            </Suspense>
          </Switch>
        )
      }

    }


  })}
  