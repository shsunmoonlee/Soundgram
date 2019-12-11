// configureStore.js
import { createBrowserHistory } from "history"
import { applyMiddleware, compose, createStore } from "redux"
import { routerMiddleware } from "connected-react-router"
import createRootReducer from "reducers"
import thunk from "redux-thunk"
export const history = createBrowserHistory()

export default function configureStore(preloadedState) {
  const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        })
      : compose

  const store = createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    composeEnhancers(
      applyMiddleware(
        thunk,
        routerMiddleware(history) // for dispatching history actions
        // ... other middlewares ...
      )
    )
    // compose(
    //   applyMiddleware(
    //     thunk,
    //     routerMiddleware(history) // for dispatching history actions
    //     // ... other middlewares ...
    //   )
    // )
  )

  return store
}
