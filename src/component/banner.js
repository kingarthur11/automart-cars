import React from 'react'
import './css/banner.css'

function Banner() {
  return (
 
    <div>
        <section id="about" className="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 pt-4 pt-lg  d-flex flex-column justify-content-center align-items-center">
                        <h3>ONLINE SHOPPING <span>EXECUTIVES</span></h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                    <div className="col-lg-6">
                        <img src="https://res.cloudinary.com/du4zuqepf/image/upload/v1652513716/blog/2022-05-14T07:35:15.166Z.jpg" className="img-fluid h-75" alt="banner pictur" />
                    </div>
                </div>
            </div>
        </section>
    </div>


  )
}

export default Banner