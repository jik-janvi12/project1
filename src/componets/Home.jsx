import React from 'react'
import Button from 'react-bootstrap/Button';
import {FaAngleRight,FaDesktop,FaMedal,FaLayerGroup,FaChartBar,FaVectorSquare,FaAndroid,FaPencilRuler
    ,FaMobileAlt,FaQuoteLeft,FaUser} from "react-icons/fa";
const Home = () =>{
  return(
    <>
      {/* section 1 */}
      <section class="slider">
          <div class="container">
              <div class="row">
                <div class="col-lg-9 w-11 ">
                    <div class="block ">
                      <span class="d-block mb-3 text-white text-capitalize">Prepare for new future</span>
                      <h1 class="mb-5 ">Our work is<br></br>presentation of our<br></br>capabilities.</h1>
                      <Button variant="danger">GET STARTED<i><FaAngleRight /></i></Button>  
                    </div>
                </div>
              </div>
          </div>
      </section>
      {/* section 2 */}
      <section class="section ">
          <div class="container">
            <div class="row">
              <div class="col-lg-8">
                <div class="section-title">
                  <span class="text-color">We are creative & expert people</span>
                  <h2 class="mt-3 content-title">We work with business & provide<br></br> solution to client with their business<br></br> problem </h2>
                </div>
              </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-4  col-md-6 col-12">
                  <div class="intro-item mb-5 mb-lg-0">
                    <i class="color-one"><FaDesktop /></i>
                    <h4 class="mt-4  mb-3 on">Modern & Responsive design</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, ducimus.</p>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 col-12">
                  <div class="intro-item mb-5 mb-lg-0">
                      <i class="color-one"><FaMedal /></i>
                      <h4 class="mt-4 mb-3 on">Awarded licensed company</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, ducimus.</p>
                    </div>
                  </div>
                <div class="col-lg-4 col-12">
                <div class="intro-item mb-5 mb-lg-0">
                    <i class="color-one"><FaLayerGroup /></i>
                    <h4 class="mt-4 mb-3 on">Build your website Professionally</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, ducimus.</p>
                  </div>
                </div>
            </div>
          </div>
      </section>
      {/* section 3 */}
      <section class="section about position-relative">
        <div class="bg-about"></div>
        <div class="container">
            <div class="row">
              <div class="col-lg-6 offset-lg-6">
                <div class="about-item">
                  <span class="text-color">what we are</span>
                  <h2 class="mt-3 mb-4 position-relative content-title">We are dynamic team of creative people</h2>
                  <div class="about-content">
                    <h4 class="mb-3 position-relative">We are Perfect Solution</h4>
                    <p class="mb-5">We provide consulting services in the area of IFRS and management reporting, helping companies to reach their highest level. We optimize business processes, making them easier.</p>
                    <Button variant="danger">GET STARTED</Button>  
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>
      {/* section 4 */}
      <section class="section counter">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="counter-item text-center mb-5 mb-lg-0"> 
                <h3 class="mb-0">
                  <span class="counter-stat font-weight-bold">1730</span>+
                </h3>
                <p class="text-muted">Project Done</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="counter-item text-center mb-5 mb-lg-0"> 
                  <h3 class="mb-0">
                    <span class="counter-stat font-weight-bold">125</span>M
                  </h3>
                  <p class="text-muted">User Worldwide</p>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="counter-item text-center mb-5 mb-lg-0"> 
                    <h3 class="mb-0">
                      <span class="counter-stat font-weight-bold">39</span>
                    </h3>
                    <p class="text-muted">Availble Country</p>
                  </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="counter-item text-center mb-5 mb-lg-0"> 
                  <h3 class="mb-0">
                    <span class="counter-stat font-weight-bold">14</span>
                  </h3>
                  <p class="text-muted">Award Winner  </p>
                </div>
            </div>
          </div>
        </div>
      </section>
      {/* section 5 */}
      <section class="section service border-top">
        <div class="container">
          <div class="row justify-content-center">
              <div class="col-lg-7 text-center" >
                  <div class="section-title">
                    <span class="text-color">Our Services</span>
                    <h2 class="mt-3  content-title">We provide a wide range of creative services</h2>
                  </div>
              </div>
          </div>
          <div class="row justify-content-center">
              <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="service-item mb-5">
                  <i><FaDesktop /></i>
                  <h4 class="mb-3">Web development.</h4>
                  <p>A digital agency isn't here to replace your internal team, we're here to partner</p>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="service-item mb-5">
                  <i><FaLayerGroup /></i>
                  <h4 class="mb-3">Interface Design.</h4>
                  <p>A digital agency isn't here to replace your internal team, we're here to partner</p>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="service-item mb-5">
                  <i><FaChartBar /></i>
                  <h4 class="mb-3">Business Consulting.</h4>
                  <p>A digital agency isn't here to replace your internal team, we're here to partner</p>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="service-item mb-5">
                  <i><FaVectorSquare /></i>
                  <h4 class="mb-3">Branding.</h4>
                  <p>A digital agency isn't here to replace your internal team, we're here to partner</p>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="service-item mb-5">
                  <i><FaAndroid /></i>
                  <h4 class="mb-3">App development.</h4>
                  <p>A digital agency isn't here to replace your internal team, we're here to partner</p>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="service-item mb-5">
                  <i><FaPencilRuler /></i>
                  <h4 class="mb-3">Content creation.</h4>
                  <p>A digital agency isn't here to replace your internal team, we're here to partner</p>
                </div>
              </div>
          </div>
        </div>
      </section>
      {/* section 6 */}
      <section class="section cta">
        <div class="container">
          <div class="row">
              <div class=" col-xl-5  col-lg-6 m-12">
                  <div class="cta-item bg-white p-5 rounded ">
                    <span class="text-color">We create for you</span>
                    <h2 class="mt-2 mb-4">Entrust Your Project <br></br>to Our Best Team of Professionals</h2>
                    <p class="lead mb-4">Have any project on mind? <br></br>For immidiate support :</p>
                    <h3><i class="mr-3 text-color"><FaMobileAlt /></i>+23 876 65 455</h3>
                  </div>
              </div>
          </div>
        </div>
      </section>
      {/* section 7 */}
      <section class="section testimonial">
        <div class="container">
          <div class="row">
            <div class="col-lg-7">
              <div class="section-title">
                <span class="text-color">Clients testimonial</span>
                <h2 class="mt-3 content-title">Check what's our clients say<br></br> about us</h2>
              </div>  
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row slick-dotted">
            <div class="col-lg-6">
              <i class="text-color-1 ti-quote-left"><FaQuoteLeft /></i>
              <div class="testimonial-item">
                <p class="testimonial-text">Quam maiores perspiciatis temporibus odio reiciendis error alias debitis atque
                consequuntur natus iusto recusandae numquam corrupti.</p>
                <div class="testimonial-text">
                  <h5 class=" mb-0 text-capitalize">thomas johnson</h5>
                  <p>Excutive Director,themefisher</p>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
                <i class="text-color-1 ti-quote-left"><FaQuoteLeft /></i>
                <div class="testimonial-item">
                    <p class="testimonial-text">Quam maiores perspiciatis temporibus odio reiciendis error alias debitis atque
                    consequuntur natus iusto recusandae numquam corrupti.</p>
                  <div class="testimonial-text">
                    <h5 class=" mb-0 text-capitalize">thomas johnson</h5>
                    <p>Excutive Director,themefisher</p>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>
      {/* section 8 */}
      <section class="section bg-2 latest-blog">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-7 text-center m-12">
              <div class="section-title">
                <span class="text-color">Latest News</span>
                <h2 class=" mt-3 content-title text-white">Latest articles to enrich<br></br> knowledge</h2>
              </div>
            </div>
          </div>
          <div class="row justify-content-center" >
            <div class="col-lg-4 col-md-6 mb-5">
              <div class="card bg-transparent border-0">
                <img src="https://demo.themefisher.com/megakit-bootstrap/images/blog/1.jpg" class="img-fluid rounded"></img>
                <div class="card-body mt-2">
                  <div class="blog-item-meta">
                    <a class="text-white-50">Design<span class="ml-2 mr-2">/</span></a>
                    <a class="text-white-50">Ui/Ux<span class="ml-2 mr-2">/</span></a>
                    <a class="text-white-50 ml-2 "><i><FaUser /></i><span class="ml-2 mr-2">admin</span></a>
                  </div>
                  <h3 class="mt-3 mb-5 lh-35">
                    <a class="text-white">How to improve design with typography?</a>
                  </h3>
                  <Button variant="primary">LEARN MORE</Button> 
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 mb-5">
              <div class="card bg-transparent border-0">
                <img src="https://demo.themefisher.com/megakit-bootstrap/images/blog/2.jpg" class="img-fluid rounded"></img>
                <div class="card-body mt-2">
                  <div class="blog-item-meta">
                    <a class="text-white-50">Design<span class="ml-2 mr-2">/</span></a>
                    <a class="text-white-50">Ui/Ux<span class="ml-2 mr-2">/</span></a>
                    <a class="text-white-50 ml-2 "><i><FaUser /></i><span class="ml-2 mr-2">admin</span></a>
                  </div>
                  <h3 class="mt-3 mb-5 lh-35">
                    <a class="text-white">Interactivity design may connect consumer</a>
                  </h3>
                  <Button variant="primary">LEARN MORE</Button> 
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 mb-5">
              <div class="card bg-transparent border-0">
                <img src="https://demo.themefisher.com/megakit-bootstrap/images/blog/3.jpg" class="img-fluid rounded"></img>
                <div class="card-body mt-2">
                  <div class="blog-item-meta">
                    <a class="text-white-50">Design<span class="ml-2 mr-2">/</span></a>
                    <a class="text-white-50">Ui/Ux<span class="ml-2 mr-2">/</span></a>
                    <a class="text-white-50 ml-2 "><i><FaUser /></i><span class="ml-2 mr-2">admin</span></a>
                  </div>
                  <h3 class="mt-3 mb-5 lh-35">
                    <a class="text-white">Marketing Strategy to bring more affect</a>
                  </h3>
                  <Button variant="primary">LEARN MORE</Button>     
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section 9 */}
      <section class="mt-70 position-relative">
        <div class="container">
          <div class="cta-block-2 p-5 rounded bg-gray border-1 ">
            <div class="row justify-content-center align-item-center ">
              <div class="col-lg-7">
                <span class="text-color">For Every type business</span>
                <h2 class="mr-2 mb-4 mb-lg-0">Entrust Your Project to Our Best Team of Professionals</h2>
              </div>
              <div class="col-lg-4 text-center"> 
              <Button variant="danger">GET STARTED</Button>  
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Home;