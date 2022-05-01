import React from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom';

export default function Navbar(props) {

  const navigate = useNavigate()

  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >
        <div className="container-fluid">
          {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                {/* <Link className="nav-link" to="/text-utils/about">{props.aboutText}</Link> */}
                <a className="nav-link" href="/text-utils/about">{props.aboutText}</a>
              </li>
            </ul>
            <div className={`form-check form-switch mx-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
              <input className="form-check-input" onChange={props.toggleBgMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" checked={props.mode === "light"} />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode === 'light' ? 'Disable' : 'Enable'} Light Mode</label>
            </div>
            <form className="d-flex">
              <button type="button" className={`btn ${props.mode === 'light' ? 'btn-outline-primary' : 'btn-primary btn-light'}`} onClick={() => navigate('/contact')}>{props.contactText}</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
  contactText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
  title: 'Set title here',
  aboutText: 'About',
  contactText: 'Contact'
};
