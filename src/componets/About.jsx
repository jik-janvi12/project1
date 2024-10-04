import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaCheck,FaRegFlag ,FaLayerGroup,FaMedal   } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
function About() {
  return (
    <>
        {/* section 1 */}
        <section class=" page-title bg-1">
          <div class="container">
              <div class="row">
                <div class="col-lg-12 w-11">
                    <div class="block text-center">
                        <span class="text-white">About Us</span>
                        <h1 class="text-capitalize mb-4 text">Our Company</h1>
                        <ul class="list-inline">
                            <li class="list-inline-item">
                              <a href='' class="text-white">HOME</a></li>
                            <li class="list-inline-item">
                              <span class="text-white">/</span></li>
                            <li class="list-inline-item text-white-50">About Us </li>
                        </ul>
                    </div>
                </div>
              </div>
          </div>
      </section>
      {/* section 2 */}
      <section class="section position-relative">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="about-item mb-5 pr-3">
                            <span class="text-color">What we are</span>
                            <h2 class="mt-3 mb-4 position-relative content-title">We are dynamic team of creative people</h2>
                            <p class="mb-5 hot ">We provide consulting services in the area of IFRS and management reporting, helping companies to reach their highest level. We optimize business processes, making them easier.</p>
                            <Button variant="danger">GET STARTED</Button>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="about-item-img">
                            <img src="https://demo.themefisher.com/megakit-bootstrap/images/about/home-7.jpg" class="img-fluid"></img>
                        </div>
                    </div>
                </div>
            </div>
      </section>
      {/* section 3 */}
      <section class="about-info section pt-0">
          <div class="container">
              <div class="row justify-content-center">
                  <div class="col-lg-4 col-md-6 col-sm-6">
                        <div clas="about-info-item mb-4 mb-lg-0">
                            <h3 class="mb-4"><span class="text-color te">01.</span>Our Mission</h3>
                            <p class="tex">llum similique ducimus accusamus laudantium praesentium, impedit quaerat, itaque maxime sunt deleniti voluptas distinctio .</p>
                        </div>
                  </div>
                  <div class="col-lg-4 col-md-6 col-sm-6">
                        <div clas="about-info-item mb-4 mb-lg-0">
                            <h3 class="mb-4"><span class="text-color te">02.</span>Vission</h3>
                            <p class="tex">llum similique ducimus accusamus laudantium praesentium, impedit quaerat, itaque maxime sunt deleniti voluptas distinctio .</p>
                        </div>
                  </div>
                  <div class="col-lg-4 col-md-6 col-sm-6">
                        <div clas="about-info-item mb-4 mb-lg-0">
                            <h3 class="mb-4"><span class="text-color te">03.</span>Our Approach</h3>
                            <p class="tex">llum similique ducimus accusamus laudantium praesentium, impedit quaerat, itaque maxime sunt deleniti voluptas distinctio .</p>
                        </div>
                  </div>
              </div>
          </div>
      </section>
      {/* section 4 */}
      <section class="section counter bg-counter position-relative">
          <div class='container'>
              <div class="row ">
                  <div class="col-lg-3 col-md-6 col-sm-6 cou">
                    <div class="counter-item text-center mb-5 mb-lg-0">
                        <i class="color-one coo"><FaCheck /></i>
                        <h3 class="mt-2 mb-0 text-white"><span class="counter-stat font-weight-boid">1730</span>+</h3>
                        <p class="text-white-50">Project Done</p>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-6 cou">
                    <div class="counter-item text-center mb-5 mb-lg-0">
                        <i class="color-one coo"><FaRegFlag /></i>
                        <h3 class="mt-2 mb-0 text-white"><span class="counter-stat font-weight-boid">125</span>M</h3>
                        <p class="text-white-50">User Worldwide</p>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-6 cou">
                    <div class="counter-item text-center mb-5 mb-lg-0">
                        <i class="color-one coo"><FaLayerGroup /></i>
                        <h3 class="mt-2 mb-0 text-white"><span class="counter-stat font-weight-boid">39</span></h3>
                        <p class="text-white-50">Availble Country</p>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-6 cou">
                    <div class="counter-item text-center mb-5 mb-lg-0">
                        <i class="color-one coo"><FaMedal /></i>
                        <h3 class="mt-2 mb-0 text-white"><span class="counter-stat font-weight-boid">14</span></h3>
                        <p class="text-white-50">Award Winner</p>
                    </div>
                  </div>
              </div> 
          </div>
      </section>
      {/* section 5 */}
      <section class=""></section>
    </>
  )
}

export default About;