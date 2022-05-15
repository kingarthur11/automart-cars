import React from 'react'
import { Link } from "react-router-dom";
import './css/navbar.css'

function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-light bg-light px-5">
            <div className="container-fluid">
                <Link to="/" className='text-decoration-none'><h3 className="navbar-brand font-weight-bold">Auto Mart Cars</h3></Link>
                <Link to="add-car" className='text-decoration-none'><button className="btn btn-outline-success" type="submit">Add New Car</button></Link>
            </div>
        </nav>
    </div>
  )
}

export default Navbar