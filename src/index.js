import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import reportWebVitals from './reportWebVitals'
import store from './Redux/Store'
import App from './App'
import './index.css'

let rerenderTree = () => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
  )
}
rerenderTree()
reportWebVitals()