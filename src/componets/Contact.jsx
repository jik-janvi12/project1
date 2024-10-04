import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaDirections,FaEnvelope,FaPhoneAlt,FaFacebookF,FaTwitter,FaLinkedinIn } from "react-icons/fa";
function Contact() {
  return (
    <>
       {/* section 1 */}
       <section class=" page-title bg-1">
          <div class="container">
              <div class="row">
                <div class="col-lg-12 w-11">
                    <div class="block text-center">
                        <span class="text-white">Contact Us</span>
                        <h1 class="text-capitalize mb-4 text">Get In Touch</h1>
                        <ul class="list-inline">
                            <li class="list-inline-item">
                              <a href='' class="text-white">HOME</a></li>
                            <li class="list-inline-item">
                              <span class="text-white">/</span></li>
                            <li class="list-inline-item text-white-50">Contact Us</li>
                        </ul>
                    </div>
                </div>
              </div>
          </div>
      </section>
      {/* section 2 */}
      <section class="contact-form-wrap section">
          <div class="container">
              <div class="row">
                  <div class="col-lg-6 col-md-12 col-sm-12">
                    <form class="contact__form">
                      <h3 class="text-md mb-4">Contact Form</h3>
                      <div class="form-group">
                          <input name="name" type="text" class="form-control" placeholder="Your Name" required=""></input>
                      </div>
                      <div class="form-group">
                          <input name="email" type="email" class="form-control" placeholder="email Address" required=""></input>
                      </div>
                      <div class="form-group-2 mb-4">
                          <textarea class="form-control" rows="4" name='message' placeholder='your message'></textarea>
                      </div>
                      <button class="buuto">SEND MESSAGE </button>
                    </form>
                  </div>
                  <div class="col-lg-6 col-sm-12 ro">
                    <div class="contact-content mt-5 mt-lg-0">
                      <span class="text-muted">We are Professionals</span>
                      <h2 class="mb-3 mt-2">Don’t Hesitate to<br></br> contact with us for any <br></br>kind of information</h2>
                      <ul class="address-block list-unstyled">
                        <li class=""><i><FaDirections /></i>North Main Street,Brooklyn Australia</li>
                        <li class=""><i><FaEnvelope /></i>Email: contact@mail.com</li>
                        <li class=""><i><FaPhoneAlt /></i>Phone:+88 01672 506 744</li>
                      </ul>
                      <ul class="social-icons list-inline mt-4">
                          <li class="list-inline-item"><i><FaFacebookF /></i></li>
                          <li class="list-inline-item"><i><FaTwitter /></i></li>
                          <li class="list-inline-item"><i><FaLinkedinIn /></i></li>
                      </ul>
                    </div>
                  </div>
              </div>
          </div>
      </section>
   
    </>
    
  )
}

export default Contact;