import React from 'react'
import {FaGithub} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Navbar({title}) {
  return (
    <nav className='navbar mv-12 shadow-lg bg-neutral text-neutral-content'>
      <div className="container max-auto">
        <div className="flex-none px-2 mx-2">
          <FaGithub className='inline pr-2 text-3xl'/>
          <Link to='/' className='text-lg font-bold align-middle'>{title}</Link>
        </div>

        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <Link to='/' className='btn btn-ghoust btn-sm rounded-btn font-bold'>Home</Link>
            <Link to='/about' className='btn btn-ghoust btn-sm rounded-btn font-bold'>About</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.defaultProps = {
  title: 'Github finder'
};


Navbar.prototypes = {
  title: PropTypes.string,
}

export default Navbar