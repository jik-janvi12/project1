import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
const Portfolio = () =>{
    return(
        <>
             {/* section 1 */}
      <section class=" page-title bg-1">
          <div class="container">
              <div class="row">
                <div class="col-lg-12 w-11">
                    <div class="block text-center">
                        <span class="text-white">Latest works</span>
                        <h1 class="text-capitalize mb-4 text">Portfolio</h1>
                        <ul class="list-inline">
                            <li class="list-inline-item">
                              <a href='' class="text-white">HOME</a></li>
                            <li class="list-inline-item">
                              <span class="text-white">/</span></li>
                            <li class="list-inline-item text-white-50">Latest works</li>
                        </ul>
                    </div>
                </div>
              </div>
          </div>
      </section>
      {/* section 2 */}
      <section class="section pb-0">
          <div class="container">
              <div class="row justify-content-center">
                  <div class="col-lg-7 text-center">
                      <div class="section-title">
                        <span class="text-color ">Our works</span>
                        <h2 class="mt-3 content-title">We have done lots of works, lets check some</h2>
                      </div>
                  </div>
              </div>
              <div class="container-fluid">
                  <div class="row   portfolio-gallery">
                    <div class="col-lg-4 col-md-6">
                      <div class="portfolio-item position-relative mb-4">
                        <a href='https://demo.themefisher.com/megakit-bootstrap/images/portfolio/1.jpg' class="popup-gallery">
                        <img src='https://demo.themefisher.com/megakit-bootstrap/images/portfolio/1.jpg' class="img-fluid w-100"></img></a>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <div class="portfolio-item position-relative mb-4">
                        <a href='https://demo.themefisher.com/megakit-bootstrap/images/portfolio/2.jpg' class="popup-gallery">
                        <img src='https://demo.themefisher.com/megakit-bootstrap/images/portfolio/2.jpg' class="img-fluid w-100"></img></a>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <div class="portfolio-item position-relative mb-4">
                        <a href='https://demo.themefisher.com/megakit-bootstrap/images/portfolio/3.jpg' class="popup-gallery">
                        <img src='https://demo.themefisher.com/megakit-bootstrap/images/portfolio/3.jpg' class="img-fluid w-100"></img></a>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <div class="portfolio-item position-relative mb-4">
                        <a href='https://demo.themefisher.com/megakit-bootstrap/images/portfolio/4.jpg' class="popup-gallery">
                        <img src='https://demo.themefisher.com/megakit-bootstrap/images/portfolio/4.jpg' class="img-fluid w-100"></img></a>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <div class="portfolio-item position-relative mb-4">
                        <a href='https://demo.themefisher.com/megakit-bootstrap/images/portfolio/5.jpg' class="popup-gallery">
                        <img src='https://demo.themefisher.com/megakit-bootstrap/images/portfolio/5.jpg' class="img-fluid w-100"></img></a>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <div class="portfolio-item position-relative mb-4">
                        <a href='https://demo.themefisher.com/megakit-bootstrap/images/portfolio/6.jpg' class="popup-gallery">
                        <img src='https://demo.themefisher.com/megakit-bootstrap/images/portfolio/6.jpg' class="img-fluid w-100"></img></a>
                      </div>
                    </div>
                  </div>
              </div>
          </div>
      </section>
        </>
    )
}
export default Portfolio;