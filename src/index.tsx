import React from 'react'
import ReactDOM from 'react-dom'
import './assets/styles/index.css'
import Bill from './pages/Bills'
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom'
import About from './pages/About'
import Header from './components/Header'
import Home from './pages/Home'
import { BillContextProvider } from './store/BillsContext'

ReactDOM.render(
  <div className='App'>
    <Router>
      <BillContextProvider>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/bills' component={Bill} />
          <Route exact path='/about' component={About} />
        </Switch>
      </BillContextProvider>
    </Router>
  </div>,
  document.getElementById('root')
)
