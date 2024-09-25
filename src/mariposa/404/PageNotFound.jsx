import React from 'react'
import './PageNotFound.css'
import logo from '../../assets/mariposalogo1.png'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div className='page-not-found-con'>
      <div className="page-not-found-img-con">
        <Link><img src={logo} className="page-not-found-img" /></Link>
      </div>
      <div className="page-not-found-some-text">
        <h1 className='four-zoro-four-title'>404</h1>
        <div className="some-expland-page">
          <p>The page you were looking for doesn't exit.</p>
          <p>You may have mistyped the address or the page may have moved.</p>
        </div>
      </div>
    </div>
  )
}

export default PageNotFound