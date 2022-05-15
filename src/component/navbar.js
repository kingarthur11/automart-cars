import React from 'react'

function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-light bg-light px-5">
            <div className="container-fluid">
                <h3 className="navbar-brand font-weight-bold">Auto Mart Cars</h3>
                <form className="d-flex">
                <button className="btn btn-outline-success" type="submit">Add New Car</button>
                </form>
            </div>
        </nav>
    </div>
  )
}

export default Navbar