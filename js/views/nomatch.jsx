import React from 'react'
import { Link, browserHistory } from 'react-router'

class NoMatch extends React.Component {  
  render() {
    return (
      <div className="settingsContainer http-not-found">
        <div className="settings">
          <div className="logobox">
            <div className="logo"><span class="app">Page not Found</span></div>
            <p>Sorry, but the page you were trying to view does not exist.</p>
            <Link to="/s">Find a Station</Link>
          </div>
        </div>
      </div>
    )
  }
}
export default NoMatch