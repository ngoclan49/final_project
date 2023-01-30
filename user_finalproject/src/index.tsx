import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom'
import './index.css'
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux';
import { store } from './redux/configureStore';
export const history: any = createBrowserHistory()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <HistoryRouter history={history}>
    <Provider store={store}>
      <App />
    </Provider>
  </HistoryRouter>

);


